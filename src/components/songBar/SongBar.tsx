import { IPlayerState } from '@/redux/reducers/PlayerSlice';
import { ModifyTrack } from '@/types/ModifyTrack';
import { RootObject, Track } from '@/types/types';
import { ITrackDetails } from '@/types/typesSong';
import useHandlePauseClick from '@/utils/usePause';
import useHandlePlayClick from '@/utils/usePlay';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import PlayPause from '../playPause/PlayPause';

type ISongBar = Pick<IPlayerState, 'isPlaying' | 'activeSong'> & {
  i: number;
  song: Track | ITrackDetails | ModifyTrack;
  data: RootObject;
};

const SongBar: FC<ISongBar> = ({ isPlaying, activeSong, i, song, data }) => {
  const handlePauseClick = useHandlePauseClick();
  const handlePlayClick = useHandlePlayClick({ song, data, i });

  const isActiveSong = 'title' in activeSong;

  return (
    <Box
      display="flex"
      alignItems="center"
      p="0.5rem 1rem"
      sx={{
        borderRadius: '4px',
        '&:hover': {
          background: '#2a2a2a',
        },
      }}
    >
      <Box
        mr="0.5rem"
        width="16px"
        color={
          isActiveSong && activeSong?.key === song.key ? 'var(--green)' : ''
        }
      >
        {i + 1}
      </Box>

      <Box display="flex" alignItems="center" flex={1}>
        <Box
          width="56px"
          height="56px"
          mr={2}
          position="relative"
          className="skeleton"
        >
          {song?.images?.coverart ? (
            <Image
              src={song?.images?.coverart}
              fill
              alt="cover art"
              sizes="100vw"
            />
          ) : (
            <MusicNoteIcon
              sx={{
                width: '56px',
                height: '56px',
              }}
            />
          )}
        </Box>
        <Box
          width="50%"
          sx={{
            '& p': {
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              margin: 0,
            },
            '& a:hover': {
              opacity: 0.8,
            },
          }}
        >
          <Typography
            fontSize="14px"
            fontWeight={700}
            color={
              isActiveSong && activeSong?.key === song.key ? 'var(--green)' : ''
            }
          >
            {(song as ModifyTrack)?.songId ? (
              <Link href={`/songs/${(song as ModifyTrack)?.songId}`}>
                {song.title}
              </Link>
            ) : (
              song.title
            )}
          </Typography>
          <Typography fontSize="12px" fontWeight={300} color="var(--gray)">
            {!!song?.artists?.length && (
              <Link href={`/artists/${song?.artists[0]?.adamid}`}>
                {song.subtitle}
              </Link>
            )}
          </Typography>
        </Box>
      </Box>

      <Box>
        <PlayPause
          size="medium"
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </Box>
    </Box>
  );
};

export default SongBar;
