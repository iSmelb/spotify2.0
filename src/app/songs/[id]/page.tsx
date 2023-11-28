import { Metadata, ResolvingMetadata } from 'next';
import DetailsHeader from '@/components/detailsHeader/DetailsHeader';
import ErrorWrapper from '@/components/error/error';
import Loading from '@/components/loading/loading';
import PlayPause from '@/components/playPause/PlayPause';
import RelatedSongs from '@/components/relatedSongs/RelatedSongs';
import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateTitle } from '@/hooks/useUpdateTitle';
import ShazamService from '@/api/Shazam';
import PlaySeparateSong from '@/components/PlaySeparateSong/PlaySeparateSong';

type SongProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: SongProps): Promise<Metadata> => {
  const { id } = params;

  try {
    const song = await ShazamService.getSongDetails(id);

    return {
      title: song.title,
      description: `Find out all about ${song.title} and listel similar songs`,
    };
  } catch (error) {
    return {
      title: 'error',
      description: '',
    };
  }
};

const SongPage: NextPage<SongProps> = async ({ params: { id } }) => {
  const songDetailsData = ShazamService.getSongDetails(id);
  const recomedtationListData = ShazamService.getListRecomendation(id);

  const [songDetails, recomedtationList] = await Promise.all([
    songDetailsData,
    recomedtationListData,
  ]);

  return (
    <Box display="flex" flexDirection="column" p="0.5rem">
      <Box pt="8rem">
        <DetailsHeader detailsData={songDetails} />
      </Box>

      <Box p="0.5rem">
        <PlaySeparateSong song={songDetails} data={recomedtationList} />
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

        <RelatedSongs data={recomedtationList} />
      </Box>
    </Box>
  );
};

export default SongPage;
