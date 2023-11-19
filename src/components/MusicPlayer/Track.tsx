'use client';

import { IPlayerState } from '@/redux/reducers/PlayerSlice';
import { Track } from '@/redux/services/types';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, memo } from 'react';

type TrackProps = Pick<IPlayerState, 'activeSong'>;

const Track: FC<TrackProps> = memo(({ activeSong }) => {
  return (
    <Box display="flex" alignItems="center" flex={1}>
      <Box width="56px" height="56px" mr={2} position="relative">
        {(activeSong as Track)?.images?.coverart && (
          <Image
            src={(activeSong as Track)?.images?.coverart}
            fill
            alt="cover art"
          />
        )}
      </Box>
      <Box
        width="50%"
        sx={{
          '& p': {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            margin: 0,
          },
        }}
      >
        <Typography
          paragraph
          fontSize="14px"
          fontWeight={700}
          color="var(--white)"
        >
          {(activeSong as Track)?.title
            ? (activeSong as Track).title
            : 'No active song'}
        </Typography>
        <Typography
          fontSize="12px"
          paragraph
          fontWeight={300}
          color="var(--gray)"
        >
          {(activeSong as Track)?.subtitle
            ? (activeSong as Track).subtitle
            : 'No active song'}
        </Typography>
      </Box>
    </Box>
  );
});

export default Track;
