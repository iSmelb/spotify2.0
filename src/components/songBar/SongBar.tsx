import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { IPlayerState } from '@/redux/reducers/PlayerSlice';
import { RootObject, Track } from '@/redux/services/types';
import { ITrackDetails } from '@/redux/services/typesSong';
import Image from 'next/image';
import PlayPause from '../playPause/PlayPause';
import useHandlePauseClick from '@/utils/usePause';
import useHandlePlayClick from '@/utils/usePlay';
import { ITopSong } from '@/redux/services/typeTopSongs';
import { ModifyTrack } from '@/app/artists/[id]/page';

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
          isActiveSong && activeSong?.title === song.title ? 'var(--green)' : ''
        }
      >
        {i + 1}
      </Box>

      <Box display="flex" alignItems="center" flex={1}>
        <Box width="56px" height="56px" mr={2} position="relative">
          {song?.images?.coverart && (
            <Image src={song?.images?.coverart} fill alt="cover art" />
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
          }}
        >
          <Typography
            fontSize="14px"
            fontWeight={700}
            color={
              isActiveSong && activeSong?.title === song.title
                ? 'var(--green)'
                : ''
            }
          >
            {song.title}
          </Typography>
          <Typography fontSize="12px" fontWeight={300} color="var(--gray)">
            {song.subtitle}
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
