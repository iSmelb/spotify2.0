'use client';

import { RootState } from '@/redux/store';
import { ModifyTrack } from '@/types/ModifyTrack';
import { ITopSongs } from '@/types/typeTopSongs';
import { RootObject } from '@/types/types';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import SongBar from '../songBar/SongBar';

type relatedSongs = {
  data: RootObject | ITopSongs;
};

const RelatedSongs: FC<relatedSongs> = ({ data }) => {
  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player,
  );

  const rootObj =
    'data' in data
      ? {
          next: '-',
          properties: {},
          tracks: data.data.map((song) => new ModifyTrack(song)),
        }
      : data;

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h4" mb="1rem">
        Related Songs:
      </Typography>

      <Box
        display={'grid'}
        gridTemplateColumns={'repeat(auto-fill, minmax(100px, 600px))'}
        gap={'0 1rem'}
      >
        {rootObj.tracks.map((song, i) => (
          <SongBar
            key={`${song.key}-${i}`}
            song={song}
            i={i}
            data={rootObj}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RelatedSongs;
