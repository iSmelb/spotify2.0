import IpInfoService from '@/api/IpiInfo';
import ShazamService from '@/api/Shazam';
import MusicLists from '@/components/musicLists/MusicLists';
import { Box, Typography } from '@mui/material';
import { Metadata, NextPage } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const location = await IpInfoService.getUseInfo();

    return {
      title: location.country,
      description: 'Listen popular music in ' + location.country,
    };
  } catch (error) {
    return {
      title: 'error',
      description: '',
    };
  }
};

const AroundYouPage: NextPage = async () => {
  const location = await IpInfoService.getUseInfo();
  const data = await ShazamService.getSongsByCountry(location.country);

  return (
    <Box p="1rem">
      <Typography variant="h4" mb="1rem">
        Listen popular music in {location.country}
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 200px)"
        gap="32px"
        justifyContent="center"
      >
        <MusicLists data={data} />
      </Box>
    </Box>
  );
};

export default AroundYouPage;
