'use client';

import { Box } from '@mui/material';
import { FC } from 'react';

interface IErrorWrapper {
  error: any;
}

const ErrorWrapper: FC<IErrorWrapper> = ({ error }) => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <h4>{error?.status || error?.message}</h4>
      <h2>Oops, something went wrong!!!</h2>
    </Box>
  );
};

export default ErrorWrapper;
