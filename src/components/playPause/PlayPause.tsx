import { IPlayerState } from '@/redux/reducers/PlayerSlice';
import { Track } from '@/redux/services/types';
import { FC, MouseEventHandler } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

type IPlayPause = Pick<IPlayerState, 'isPlaying' | 'activeSong'> & {
  song: Track;
  handlePause: MouseEventHandler;
  handlePlay: MouseEventHandler;
};

const PlayPause: FC<IPlayPause> = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) =>
  isPlaying && (activeSong as Track)?.title === song.title ? (
    <PauseCircleIcon fontSize="large" onClick={handlePause} />
  ) : (
    <PlayCircleIcon fontSize="large" onClick={handlePlay} />
  );

export default PlayPause;
