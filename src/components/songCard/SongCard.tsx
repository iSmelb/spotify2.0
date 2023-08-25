import { Isong } from '@/redux/services/types';
import { Box } from '@mui/material';
import { FC } from 'react';

interface ISongCard {
  i: number;
  song: Isong;
}

const SongCard: FC<ISongCard> = ({ i, song }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="200px"
      sx={{
        padding: '16px',
        backgroundOpacity: 80,
        backdropFilter: 'blur(10px)',
        borderRadius: '4px',
        backgroundColor: 'var(--text-negative)',
      }}
    >
      <Box position="relative" height="250px">
        <Box
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            inset: 0,
            '&:hover': {
              backgroundColor: 'var(--light_gray)',
              cursor: 'pointer',
            },
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default SongCard;
