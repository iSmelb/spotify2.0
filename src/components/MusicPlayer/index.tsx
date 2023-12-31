'use client';

import { FC, useState, useEffect, useCallback } from 'react';
import { RootState } from '@/redux/store';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { nextSong, playPause, prevSong } from '@/redux/reducers/PlayerSlice';
import Track from './Track';
import Controls from './Controls';
import SeekBar from './SeekBar';
import Player from './Player';
import VolumeBar from './VolumeBar';

const MusicPlayer: FC = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state: RootState) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = useCallback((): void => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  }, [isActive, isPlaying]);

  const handleNextSong = useCallback((): void => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  }, [shuffle, currentIndex, currentSongs]);

  const handlePrevSong = useCallback((): void => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  }, [currentIndex, shuffle, currentSongs]);

  const changeVolume = useCallback((event: Event) => {
    setVolume(parseFloat((event.target as HTMLInputElement)?.value));
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      position="relative"
    >
      <Track activeSong={activeSong} />
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Controls
          isPlaying={isPlaying}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <SeekBar
          value={appTime}
          min={0}
          max={duration}
          onChange={(event) =>
            setSeekTime(parseInt((event.target as HTMLInputElement)?.value))
          }
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </Box>
      <VolumeBar
        value={volume}
        min={0}
        max={1}
        onChange={changeVolume}
        setVolume={setVolume}
      />
    </Box>
  );
};

export default MusicPlayer;
