import { playPause, setActiveSong } from '@/redux/reducers/PlayerSlice';
import { useDispatch } from 'react-redux';
import { useCallback, MouseEventHandler } from 'react';
import { RootObject, Track } from '@/redux/services/types';
import { ITrackDetails } from '@/redux/services/typesSong';
import { ModifyTrack } from '@/app/artists/[id]/page';

interface IHandlePlay {
  song: Track | ITrackDetails | ModifyTrack;
  data: RootObject;
  i: number;
}

const useHandlePlayClick = ({
  song,
  data,
  i,
}: IHandlePlay): MouseEventHandler => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(playPause(true));
    dispatch(setActiveSong({ song, data, i }));
  }, [dispatch]);
};

export default useHandlePlayClick;
