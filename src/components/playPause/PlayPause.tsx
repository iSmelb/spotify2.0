import { IPlayerState } from '@/redux/reducers/PlayerSlice';
import { Track } from '@/redux/services/types';
import { FC, MouseEventHandler } from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { Box, IconButton } from '@mui/material';
import { ITrackDetails } from '@/redux/services/typesSong';
import { ModifyTrack } from '@/app/artists/[id]/page';

type IPlayPause = Pick<IPlayerState, 'isPlaying' | 'activeSong'> & {
  song: Track | ITrackDetails | ModifyTrack;
  handlePause: MouseEventHandler;
  handlePlay: MouseEventHandler;
  size?: 'large' | 'medium';
};

const PlayPause: FC<IPlayPause> = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
  size = 'large',
}) => {
  const iconSize = {
    large: '66px',
    medium: '34px',
  };

  return (
    <Box display="flex" position="relative">
      {isPlaying && (activeSong as Track)?.title === song.title ? (
        <IconButton
          onClick={handlePause}
          sx={{
            color: 'var(--green)',
            width: iconSize[size],
            height: iconSize[size],
            cursor: 'pointer',
            padding: 0,
            '&:hover': {
              transform: 'scale(1.1)',
            },
            '&:focus': {
              border: '2px solid var(--green)',
            },
          }}
        >
          <PauseCircleIcon
            sx={{
              color: 'var(--green)',
              width: '100%',
              height: '100%',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 'calc(50% - 25%)',
              left: 'calc(50% - 25%)',
              width: '50%',
              height: '50%',
              borderRadius: '50%',
              zIndex: '-1',
              background: 'var(--black)',
            }}
          />
        </IconButton>
      ) : (
        <IconButton
          onClick={handlePlay}
          sx={{
            color: 'var(--green)',
            width: iconSize[size],
            height: iconSize[size],
            cursor: 'pointer',
            padding: 0,
            '&:hover': {
              transform: 'scale(1.1)',
            },
            '&:focus': {
              border: '2px solid var(--green)',
            },
          }}
        >
          <PlayCircleFilledIcon
            sx={{
              color: 'var(--green)',
              width: '100%',
              height: '100%',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 'calc(50% - 25%)',
              left: 'calc(50% - 25%)',
              width: '50%',
              height: '50%',
              borderRadius: '50%',
              zIndex: '-1',
              background: 'var(--black)',
            }}
          />
        </IconButton>
      )}
    </Box>
  );
};

export default PlayPause;
