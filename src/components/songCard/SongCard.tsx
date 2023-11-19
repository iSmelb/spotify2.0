import { RootObject, Track } from '@/redux/services/types';
import { IPlayerState } from '@/redux/reducers/PlayerSlice';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import PlayPause from '../playPause/PlayPause';
import useHandlePauseClick from '@/utils/usePause';
import useHandlePlayClick from '@/utils/usePlay';

type ISongCard = Pick<IPlayerState, 'isPlaying' | 'activeSong'> & {
  i: number;
  song: Track;
  data: RootObject;
};

const SongCard: FC<ISongCard> = ({ i, song, isPlaying, activeSong, data }) => {
  const handlePauseClick = useHandlePauseClick();

  const handlePlayClick = useHandlePlayClick({ song, data, i });

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="200px"
      sx={{
        padding: '16px',
        backgroundOpacity: 80,
        backdropFilter: 'blur(10px)',
        borderRadius: '4px',
        backgroundColor: 'var(--text-negative)',
      }}
    >
      <Box
        position="relative"
        height="200px"
        borderRadius="4px"
        overflow="hidden"
        sx={{
          '&:hover .PlayPause': {
            display: 'flex',
          },
        }}
      >
        <Box
          position="absolute"
          justifyContent="end"
          alignItems="end"
          p="0 0.5rem 0.5rem 0"
          zIndex={1}
          display={
            (activeSong as Track)?.title === song.title ? 'flex' : 'none'
          }
          className="PlayPause"
          sx={{
            inset: 0,
            cursor: 'pointer',
            '&:hover .overlay': {
              opacity: 0.8,
            },
          }}
        >
          <Box
            className="overlay"
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: 0.65,
              backgroundColor: 'var(--light_gray)',
            }}
          />
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </Box>
        <Image alt="song_img" fill src={song.images?.coverart} />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        mt={2}
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
        <Typography paragraph fontWeight={600}>
          <Link href={`/songs/${song.key}`}>{song.title}</Link>
        </Typography>
        <Typography paragraph fontSize={12} color="var(--gray)">
          <Link
            href={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
          >
            {song.subtitle}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SongCard;
