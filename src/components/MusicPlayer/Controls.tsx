'use client';

import { Box } from '@mui/material';
import { FC, SetStateAction, Dispatch, MouseEventHandler } from 'react';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import LoopIcon from '@mui/icons-material/Loop';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { IPlayerState } from '@/redux/reducers/PlayerSlice';

type Controls = Pick<IPlayerState, 'isPlaying' | 'currentSongs'> & {
  repeat: boolean;
  setRepeat: Dispatch<SetStateAction<boolean>>;
  shuffle: boolean;
  setShuffle: Dispatch<SetStateAction<boolean>>;
  handlePlayPause: MouseEventHandler;
  handlePrevSong: MouseEventHandler;
  handleNextSong: MouseEventHandler;
};

const Controls: FC<Controls> = ({
  isPlaying,
  currentSongs,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      width="15rem"
      sx={{
        '& svg': {
          cursor: 'pointer',
          pointerEvents: !!currentSongs.length ? 'initial' : 'none',
          color: !!currentSongs.length ? 'inherit' : 'var(--gray)',
        },
        '& >svg:hover': {
          opacity: 0.7,
        },
      }}
    >
      <LoopIcon
        sx={{
          color: repeat ? 'var(--green)' : 'white',
        }}
        onClick={() => setRepeat((prev) => !prev)}
      />
      {<SkipPreviousIcon fontSize="large" onClick={handlePrevSong} />}

      {isPlaying ? (
        <PauseCircleFilledIcon fontSize="large" onClick={handlePlayPause} />
      ) : (
        <PlayCircleFilledIcon fontSize="large" onClick={handlePlayPause} />
      )}

      {<SkipNextIcon fontSize="large" onClick={handleNextSong} />}
      <ShuffleIcon
        sx={{
          color: shuffle ? 'var(--green)' : 'white',
        }}
        onClick={() => setShuffle((prev) => !prev)}
      />
    </Box>
  );
};

export default Controls;
