import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { IPlayerState } from '@/redux/reducers/PlayerSlice';
import { RootObject } from '@/redux/services/types';
import SongBar from '../songBar/SongBar';

type relatedSongs = Pick<IPlayerState, 'isPlaying' | 'activeSong'> & {
  data: RootObject;
};

const RelatedSongs: FC<relatedSongs> = ({ isPlaying, activeSong, data }) => {
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
        {data.tracks.map((song, i) => (
          <SongBar
            key={`${song.key}-${i}`}
            song={song}
            i={i}
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RelatedSongs;
