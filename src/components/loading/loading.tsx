import { FC } from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Box } from '@mui/material';

const Loading: FC = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <MusicNoteIcon
        sx={{
          width: '100px',
          height: '100px',
          color: 'var(--green)',
          animation: 'pulse 1.5s infinite',

          '@keyframes pulse': {
            '0%': {
              transform: 'scale(0.8)',
            },
            '50%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 0 var(--green)',
            },
            '100%': {
              transform: 'scale(0.8)',
            },
          },
        }}
      />
    </Box>
  );
};

export default Loading;
