'use client';

import { NextPage } from 'next';
import { genres } from '../data/genres';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import SongCard from '@/components/songCard/SongCard';
import { useGetTopChartsQuery } from '@/redux/services/shazamCore';
import Loading from '@/components/loading/loading';
import ErrorWrapper from '@/components/error/error';

const HomePage: NextPage = () => {
  const genreTitle = 'POP';

  // const { data, isFetching, error } = useGetTopChartsQuery(null);

  // console.log(data);

  // if (isFetching) return <Loading />;

  // if (error) return <ErrorWrapper error={error} />;

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="8px"
      borderRadius="8px"
      sx={{ backgroundColor: 'var(--light_black)' }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h2>Discover {genreTitle}</h2>
        <FormControl
          sx={{
            '& .MuiSelect-select': {
              padding: '10px',
            },
          }}
        >
          <Select
            onChange={() => {}}
            defaultValue={genreTitle}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.value} value={genre.value}>
                {genre.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 200px)"
        gap="32px"
        justifyContent="center"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
          (song, i) => (
            <SongCard key={song.key} i={i} song={song}>
              song
            </SongCard>
          ),
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
