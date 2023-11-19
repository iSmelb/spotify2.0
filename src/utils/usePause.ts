import { playPause } from '@/redux/reducers/PlayerSlice';
import { useDispatch } from 'react-redux';
import { useCallback, MouseEventHandler } from 'react';

const useHandlePauseClick = (): MouseEventHandler => {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(playPause(false)), [dispatch]);
};

export default useHandlePauseClick;
