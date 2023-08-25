'use client';

import { Box } from '@mui/material';
import { FC } from 'react';

interface IErrorWrapper {
  error: any;
}

const ErrorWrapper: FC<IErrorWrapper> = ({ error }) => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <h1>{error.status}</h1>
      <h2>Oops!!! {error.data?.message}</h2>
    </Box>
  );
};

export default ErrorWrapper;
