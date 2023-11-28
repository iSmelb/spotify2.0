'use client';

import { Box, IconButton } from '@mui/material';
import { FC, SetStateAction, Dispatch, MouseEventHandler, memo } from 'react';
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

const Controls: FC<Controls> = memo(
  ({
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
          '& .MuiButtonBase-root': {
            color: 'inherit',
            padding: 0,
            width: '24px',
            height: '24px',

            '&.large': {
              height: '35px',
              width: '35px',
            },
          },
          '& >.MuiButtonBase-root:hover': {
            opacity: 0.7,
          },
          '& >.MuiButtonBase-root:focus-visible': {
            outline: '2px solid var(--white)',
          },
          '& .MuiButtonBase-root:disabled': {
            color: 'var(--gray)',
          },
          '& .MuiSvgIcon-root': {
            width: '100%',
            height: '100%',
          },
        }}
      >
        <IconButton
          disabled={!currentSongs.length}
          onClick={() => setRepeat((prev) => !prev)}
        >
          <LoopIcon
            sx={{
              color: repeat ? 'var(--green)' : 'inherit',
            }}
          />
        </IconButton>

        <IconButton
          className="large"
          disabled={!currentSongs.length}
          onClick={handlePrevSong}
        >
          <SkipPreviousIcon />
        </IconButton>

        <IconButton
          className="large"
          disabled={!currentSongs.length}
          onClick={handlePlayPause}
        >
          {isPlaying ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
        </IconButton>

        <IconButton
          className="large"
          disabled={!currentSongs.length}
          onClick={handleNextSong}
        >
          <SkipNextIcon />
        </IconButton>

        <IconButton
          disabled={!currentSongs.length}
          onClick={() => setShuffle((prev) => !prev)}
        >
          <ShuffleIcon
            sx={{
              color: shuffle ? 'var(--green)' : 'inherit',
            }}
          />
        </IconButton>
      </Box>
    );
  },
);

export default Controls;
