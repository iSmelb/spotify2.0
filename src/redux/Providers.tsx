'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { FC, ReactNode } from 'react';

interface IReduxProvider {
  children: ReactNode;
}

const Providers: FC<IReduxProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
