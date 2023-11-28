'use client';

import ErrorWrapper from '@/components/error/error';
import Loading from '@/components/loading/loading';
import MusicLists from '@/components/musicLists/MusicLists';
import { useGetTopChartsQuery } from '@/redux/services/shazamCore';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import { genres } from '../data/genres';

const HomePage: NextPage = () => {
  const [genreTitle, setGenreTitle] = useState(genres[0].value);

  const { data, isFetching, error } = useGetTopChartsQuery({
    genre: genreTitle,
    limit: 50,
  });

  const handleChange = (event: SelectChangeEvent) => {
    setGenreTitle(event.target.value as string);
  };

  if (isFetching) return <Loading />;

  if (error) return <ErrorWrapper error={error} />;

  return (
    <Box display="flex" flexDirection="column" padding="0.5rem">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="1rem"
      >
        <Typography variant="h4">Discover {genreTitle}</Typography>
        <FormControl
          sx={{
            '& .MuiSelect-select': {
              padding: '10px',
              color: 'var(--white)',
            },
            '& .MuiSvgIcon-root': {
              color: 'var(--white)',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--white)',
            },
            '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.7)',
            },
          }}
        >
          <Select
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
            value={genreTitle}
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
        {data && <MusicLists data={data} />}
      </Box>
    </Box>
  );
};

export default HomePage;
