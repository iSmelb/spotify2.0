'use client';

import { IPlayerState } from '@/redux/reducers/PlayerSlice';
import { Track } from '@/redux/services/types';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

type TrackProps = Pick<IPlayerState, 'isPlaying' | 'isActive' | 'activeSong'>;

const Track: FC<TrackProps> = ({ isPlaying, isActive, activeSong }) => {
  return (
    <Box display="flex" alignItems="center" flex={1}>
      <Box
        width="16px"
        height="16px"
        m={4}
        borderRadius="50%"
        overflow="hidden"
      >
        <Image
          src={(activeSong as Track)?.images?.coverart}
          fill
          alt="cover art"
        />
      </Box>
      <Box
        width="50%"
        sx={{
          '& p': {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          },
        }}
      >
        <Typography paragraph fontWeight={700} color="var(--white)">
          {(activeSong as Track)?.title
            ? (activeSong as Track).title
            : 'No active song'}
        </Typography>
        <Typography paragraph fontWeight={300} color="var(--gray)">
          {(activeSong as Track)?.subtitle
            ? (activeSong as Track).subtitle
            : 'No active song'}
        </Typography>
      </Box>
    </Box>
  );
};

export default Track;
