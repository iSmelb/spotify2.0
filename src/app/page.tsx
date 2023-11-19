'use client';

import { NextPage } from 'next';
import { data, genres } from '../data/genres';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import SongCard from '@/components/songCard/SongCard';
import { useGetTopChartsQuery } from '@/redux/services/shazamCore';
import Loading from '@/components/loading/loading';
import ErrorWrapper from '@/components/error/error';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useState } from 'react';

const HomePage: NextPage = () => {
  const [genreTitle, setGenreTitle] = useState(genres[0].value);
  const limit = 3;
  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player,
  );

  // const { data, isFetching, error } = useGetTopChartsQuery({
  //   genre: genreTitle,
  // });

  const handleChange = (event: SelectChangeEvent) => {
    setGenreTitle(event.target.value as string);
  };

  // if (isFetching) return <Loading />;

  // if (error) return <ErrorWrapper error={error} />;

  return (
    <Box display="flex" flexDirection="column" padding="0.5rem">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h2>Discover {genreTitle}</h2>
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
        {data?.tracks.map((song, i) => (
          <SongCard
            key={song.key}
            i={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
