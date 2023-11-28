'use client';

import ArtistCard from '@/components/artictCard/ArtistCard';
import SongBar from '@/components/songBar/SongBar';
import { useGetBySearchQuery } from '@/redux/services/shazamCore';
import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import ErrorWrapper from '@/components/error/error';
import Loading from '@/components/loading/loading';
import { useUpdateTitle } from '@/hooks/useUpdateTitle';

const SearchPage: NextPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('query');
  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player,
  );
  const { data, isFetching, error, isUninitialized } = useGetBySearchQuery(
    search,
    { skip: !search },
  );

  const modifySongs = {
    next: 'str',
    properties: {},
    tracks:
      data?.tracks?.hits.map((song) => ({
        hub: {
          actions: [
            {},
            {
              uri: song?.stores?.apple?.previewurl,
            },
          ],
        },
        images: { coverart: song?.stores?.apple?.coverarturl },
        title: song.heading.title,
        subtitle: song.heading.subtitle,
        key: song.actions[0]?.id,
        songId: song.actions[0]?.id,
        artists: [
          { adamid: !!song?.artists?.length ? song.artists[0]?.adamid : '/' },
        ],
      })) || [],
  };

  useUpdateTitle(`search ${search || ''}`, [search]);

  if (isFetching) return <Loading />;

  return (
    <Box p="1rem">
      {error && <ErrorWrapper error={error} />}
      {isUninitialized ? (
        <Box display="flex" justifyContent="center">
          What do you want to listen to?
        </Box>
      ) : (
        <>
          {data && (
            <Box>
              <Typography variant="h4" mb="1rem">
                Artists
              </Typography>
              <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fill, 220px)"
                gap="1rem"
              >
                {data.artist?.hits.map(
                  (artist, i) =>
                    i < 10 && (
                      <ArtistCard
                        key={artist.artist.adam_id}
                        artist={artist.artist}
                      />
                    ),
                )}
                {!!data.artist?.hits.length ? '' : 'Nothing found'}
              </Box>
            </Box>
          )}

          {data && (
            <Box mt="1rem">
              <Typography variant="h4" mb="1rem">
                Songs
              </Typography>
              <Box width="95%" m="0 auto">
                {modifySongs.tracks?.map((song, i) => (
                  <SongBar
                    key={song.key}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    i={i}
                    song={song}
                    data={modifySongs}
                  />
                ))}
                {!!data.tracks?.hits.length ? '' : 'Nothing found'}
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default SearchPage;
