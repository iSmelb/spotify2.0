'use client';

import { RootState } from '@/redux/store';
import { RootObject } from '@/types/types';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import SongCard from '../songCard/SongCard';

type listProps = {
  data: RootObject;
};

const MusicLists: FC<listProps> = ({ data }) => {
  const { isPlaying, activeSong } = useSelector(
    (state: RootState) => state.player,
  );

  return (
    <>
      {data?.tracks.map((song, i) => (
        <SongCard
          key={song.key}
          i={i}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={data}
        />
      ))}
    </>
  );
};

export default MusicLists;
