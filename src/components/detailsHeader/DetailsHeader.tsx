import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ITrackDetails } from '@/types/typesSong';
import { IArtistDetails } from '@/types/typesArtist';
import Image from 'next/image';
import Link from 'next/link';

interface IDetailsHeader {
  detailsData: ITrackDetails | IArtistDetails;
}

const DetailsHeader: FC<IDetailsHeader> = ({ detailsData }) => {
  const isArtist = 'data' in detailsData;

  return (
    <Box display="flex" padding="0 0.5rem 0.5rem">
      <Box
        className="skeleton"
        mr="1rem"
        sx={{
          borderRadius: isArtist ? '50%' : 'initial',
          overflow: 'hidden',
          width: '232px',
          height: '232px',
          position: 'relative',
        }}
      >
        <Image
          alt="profile"
          src={
            isArtist
              ? detailsData.data[0]?.attributes?.artwork?.url
                  .replace('{w}', '500')
                  .replace('{h}', '500')
              : detailsData?.images?.coverart
          }
          fill
          sizes="100vw"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          alignItems: 'flex-start',
          a: {
            color: 'inherit',
            opacity: '0.6',
            '&:hover': {
              opacity: '0.8',
            },
          },
        }}
      >
        <Typography variant="h1">
          {isArtist
            ? detailsData.data[0]?.attributes?.name
            : detailsData?.title}
        </Typography>
        {!isArtist && !!detailsData?.artists.length && (
          <Link href={`/artists/${detailsData?.artists[0]?.adamid}`}>
            <Typography mb="0.5rem" variant="h3">
              {detailsData?.subtitle}
            </Typography>
          </Link>
        )}
        <Typography fontStyle="italic" variant="h4">
          {isArtist
            ? detailsData.data[0]?.attributes?.genreNames[0]
            : detailsData?.genres?.primary}
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailsHeader;
