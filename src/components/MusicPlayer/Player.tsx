'use client';

import { IPlayerState } from '@/redux/reducers/PlayerSlice';
import { Track } from '@/types/types';
import {
  FC,
  useRef,
  useEffect,
  ReactEventHandler,
  ChangeEventHandler,
} from 'react';

type PlayerProps = Pick<IPlayerState, 'activeSong' | 'isPlaying'> & {
  volume: number;
  seekTime: number;
  onEnded: ReactEventHandler<HTMLAudioElement>;
  onTimeUpdate: ChangeEventHandler<HTMLAudioElement>;
  onLoadedData: ChangeEventHandler<HTMLAudioElement>;
  repeat: boolean;
};

const Player: FC<PlayerProps> = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref = useRef<HTMLAudioElement | null>(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (ref.current) {
      ref.current.currentTime = seekTime;
    }
  }, [seekTime]);

  return (
    <audio
      src={
        (activeSong as Track)?.hub?.actions
          ? (activeSong as Track)?.hub?.actions[1]?.uri
          : (activeSong as Track)?.hub?.options[0]?.actions[1]?.uri
      }
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
