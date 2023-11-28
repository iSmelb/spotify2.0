import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import Image from 'next/image';
import { PurpleArtist } from '@/types/typesSearch';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';

type IArtistCard = {
  artist: PurpleArtist;
};

const ArtistCard: FC<IArtistCard> = ({ artist }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="220px"
      sx={{
        padding: '16px',
        borderRadius: '4px',
        backgroundColor: 'var(--text-negative)',
        transition: 'background-color .3s ease',

        '&:hover': {
          backgroundColor: '#282828',
        },
      }}
    >
      <Box
        position="relative"
        height="190px"
        borderRadius="50%"
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={artist.avatar ? 'skeleton' : ''}
        mb="0.5rem"
      >
        {artist.avatar ? (
          <Image alt="artist_img" sizes="100vw" fill src={artist?.avatar} />
        ) : (
          <PersonIcon
            sx={{
              width: '100%',
              height: '100%',
            }}
          />
        )}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        sx={{
          '& p': {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            margin: 0,
          },
          '& a': {
            color: 'inherit',
            '&:hover': {
              opacity: '0.8',
            },
          },
        }}
      >
        <Typography fontWeight={600}>
          <Link href={`/artists/${artist.adam_id}`}>
            {artist.name.toLocaleUpperCase()}
          </Link>
        </Typography>
        <Typography
          pb="0.5rem"
          fontWeight={300}
          fontSize="14px"
          color="var(--gray)"
        >
          Singer
        </Typography>
      </Box>
    </Box>
  );
};

export default ArtistCard;
