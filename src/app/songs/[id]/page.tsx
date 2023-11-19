'use client';

import DetailsHeader from '@/components/detailsHeader/DetailsHeader';
import ErrorWrapper from '@/components/error/error';
import Loading from '@/components/loading/loading';
import PlayPause from '@/components/playPause/PlayPause';
import RelatedSongs from '@/components/relatedSongs/RelatedSongs';
import { data, songDetails } from '@/data/genres';
import {
  useGetListRecomendationQuery,
  useGetSongDetailsQuery,
} from '@/redux/services/shazamCore';
import { RootState } from '@/redux/store';
import useHandlePauseClick from '@/utils/usePause';
import useHandlePlayClick from '@/utils/usePlay';
import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

type SongProps = {
  params: {
    id: string;
  };
};

const SongPage: NextPage<SongProps> = ({ params: { id } }) => {
  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player,
  );

  // const {
  //   data: songDetails,
  //   isFetching: songFetching,
  //   isError: songError,
  // } = useGetSongDetailsQuery(id);
  // const {
  //   data,
  //   isFetching: listRecomendationFetch,
  //   isError,
  // } = useGetListRecomendationQuery(id);

  const handlePauseClick = useHandlePauseClick();
  const handlePlayClick = useHandlePlayClick({
    song: songDetails,
    data,
    i: -1,
  });

  // if (songFetching || listRecomendationFetch) return <Loading />;

  // if (songError || isError)
  //   return <ErrorWrapper error={songError || isError} />;

  return (
    <Box display="flex" flexDirection="column" p="0.5rem">
      <Box pt="8rem">
        <DetailsHeader detailsData={songDetails} />
      </Box>

      <Box p="0.5rem">
        <PlayPause
          song={songDetails}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      </Box>

      <Box p="0 0.5rem" display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h4" mb="1rem">
            Lyrics:
          </Typography>

          <Box
            sx={{
              '& .MuiTypography-root': {
                opacity: 0.7,
              },
            }}
          >
            {songDetails?.sections[1].type === 'LYRICS' ? (
              songDetails?.sections[1]?.text?.map((line, i) => (
                <Typography key={`lyrics-${line}-${i}`}>{line}</Typography>
              ))
            ) : (
              <Typography>Sorry, No lyrics found!</Typography>
            )}
          </Box>
        </Box>

        <RelatedSongs
          data={data}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      </Box>
    </Box>
  );
};

export default SongPage;
