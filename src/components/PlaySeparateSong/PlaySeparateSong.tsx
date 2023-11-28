'use client';

import { FC } from 'react';
import useHandlePauseClick from '@/utils/usePause';
import useHandlePlayClick from '@/utils/usePlay';
import PlayPause from '../playPause/PlayPause';
import { RootState } from '@/redux/store';
import { RootObject, Track } from '@/types/types';
import { ITrackDetails } from '@/types/typesSong';
import { useSelector } from 'react-redux';
import { ModifyTrack } from '@/types/ModifyTrack';

type Props = {
  song: Track | ITrackDetails | ModifyTrack;
  data: RootObject;
};

const PlaySeparateSong: FC<Props> = ({ song, data }) => {
  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player,
  );

  const handlePauseClick = useHandlePauseClick();
  const handlePlayClick = useHandlePlayClick({
    song,
    data,
    i: -1,
  });

  return (
    <>
      <PlayPause
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </>
  );
};

export default PlaySeparateSong;
