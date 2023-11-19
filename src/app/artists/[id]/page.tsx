'use client';

import DetailsHeader from '@/components/detailsHeader/DetailsHeader';
import ErrorWrapper from '@/components/error/error';
import Loading from '@/components/loading/loading';
import RelatedSongs from '@/components/relatedSongs/RelatedSongs';
import { artistDetails, data, songDetails, topSongs } from '@/data/genres';
import {
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
} from '@/redux/services/shazamCore';
import { RootState } from '@/redux/store';
import useHandlePauseClick from '@/utils/usePause';
import useHandlePlayClick from '@/utils/usePlay';
import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { ITopSong } from '@/redux/services/typeTopSongs';

export class ModifyTrack {
  hub: {
    actions: Array<{ uri?: string }>;
  };
  images: {
    coverart: string;
  };
  title: string;
  subtitle: string;
  key: string;

  constructor(topSong: ITopSong) {
    this.hub = {
      actions: [
        {},
        {
          uri: topSong.attributes?.previews[0]?.url,
        },
      ],
    };
    this.images = {
      coverart: topSong.attributes?.artwork?.url
        .replace('{w}', '125')
        .replace('{h}', '125'),
    };
    this.title = topSong.attributes?.name;
    this.subtitle = topSong.attributes?.artistName;
    this.key = topSong.id;
  }
}

type ArtistProps = {
  params: {
    id: string;
  };
};

const ArtistPage: NextPage<ArtistProps> = ({ params: { id } }) => {
  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player,
  );

  // const {
  //   data,
  //   isFetching,
  //   isError,
  // } = useGetArtistDetailsQuery(id);

  // const {
  //   data: topSongs,
  //   isFetching: fetchTopSongs,
  //   isError: topSongsError,
  // } = useGetArtistTopSongsQuery(id)

  const modifySongs = {
    next: '-',
    properties: {},
    tracks: topSongs.data.map((song) => new ModifyTrack(song)) || [],
  };

  // if (isFetching || fetchTopSongs) return <Loading />;

  // if (isError || topSongsError)
  //   return <ErrorWrapper error={isError || topSongsError} />;

  return (
    <Box display="flex" flexDirection="column" p="0.5rem">
      <Box pt="8rem">
        <DetailsHeader detailsData={artistDetails} />
      </Box>
      <Box p="0.5rem" mt="2rem">
        <RelatedSongs
          data={modifySongs}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      </Box>
    </Box>
  );
};

export default ArtistPage;
