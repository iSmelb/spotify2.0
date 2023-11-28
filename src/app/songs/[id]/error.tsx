'use client';

import ErrorWrapper from '@/components/error/error';
import { FC } from 'react';

interface IError {
  error: any;
}

const Error: FC<IError> = ({ error }) => {
  return <ErrorWrapper error={error} />;
};

export default Error;
