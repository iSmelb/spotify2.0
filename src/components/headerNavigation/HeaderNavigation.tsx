'use client';

import { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/navigation';

const HeaderNavigation: FC = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '0.5rem',

        '& .MuiButtonBase-root': {
          backgroundColor: 'rgba(0,0,0,.7) !important',
          color: 'var(--white)',
          width: '32px',
          height: '32px',

          '&:hover': {
            opacity: '0.8',
          },
        },
        '& .MuiSvgIcon-root': {
          color: 'inherit',
        },

        '& .Mui-disabled .MuiSvgIcon-root': {
          opacity: 0.6,
        },
      }}
    >
      <IconButton title="back" onClick={() => router.back()}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton title="forward" onClick={() => router.forward()}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  );
};

export default HeaderNavigation;
