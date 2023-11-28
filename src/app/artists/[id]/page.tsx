import ShazamService from '@/api/Shazam';
import DetailsHeader from '@/components/detailsHeader/DetailsHeader';
import RelatedSongs from '@/components/relatedSongs/RelatedSongs';
import { Box } from '@mui/material';
import { Metadata, NextPage } from 'next';

type ArtistProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: ArtistProps): Promise<Metadata> => {
  const { id } = params;

  try {
    const artist = await ShazamService.getArtistDetails(id);

    return {
      title: artist.data[0]?.attributes.name,
      description: 'Find out all about ' + artist.data[0]?.attributes.name,
    };
  } catch (error) {
    return {
      title: 'error',
      description: '',
    };
  }
};

const ArtistPage: NextPage<ArtistProps> = async ({ params: { id } }) => {
  const artistDetailsData = ShazamService.getArtistDetails(id);
  const dataTopSongs = ShazamService.getArtistTopSongs(id);

  const [artistDetails, topSongs] = await Promise.all([
    artistDetailsData,
    dataTopSongs,
  ]);

  return (
    <Box display="flex" flexDirection="column" p="0.5rem">
      <Box pt="8rem">
        <DetailsHeader detailsData={artistDetails} />
      </Box>
      <Box p="0.5rem" mt="2rem">
        <RelatedSongs data={topSongs} />
      </Box>
    </Box>
  );
};

export default ArtistPage;
