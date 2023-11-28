import { Track } from '@/types/types';
import { RootState } from '@/redux/store';
import { Box } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';

const PlayingSong: FC = () => {
  const { isPlaying, activeSong } = useSelector(
    (state: RootState) => state.player,
  );

  if (isPlaying) {
    return (
      <Box display="flex" alignItems="center">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '32px',
            height: '20px',
            mr: '1rem',

            '@keyframes go-up-down': {
              '0%': {
                height: 0,
              },
              '100%': {
                height: '100%',
              },
            },

            '& .MuiBox-root': {
              backgroundColor: 'var(--green)',
              width: '4px',
              height: '2px',
              animation: 'go-up-down infinite alternate',
            },
          }}
        >
          <Box
            sx={{
              animationDuration: '0.7s !important',
            }}
          />
          <Box
            sx={{
              animationDuration: '0.6s !important',
            }}
          />
          <Box
            sx={{
              animationDuration: '0.3s !important',
            }}
          />
          <Box
            sx={{
              animationDuration: '0.5s !important',
            }}
          />
        </Box>
        <Box width="160px" overflow="hidden">
          <Box
            sx={{
              fontSize: '0.9rem',
              animation: 'my-animation 7s linear infinite',

              '@keyframes my-animation': {
                from: {
                  transform: 'translateX(100%)',
                },
                to: {
                  transform: 'translateX(-100%)',
                },
              },
            }}
          >
            {(activeSong as Track)?.title}
          </Box>
        </Box>
      </Box>
    );
  }
};

export default PlayingSong;
