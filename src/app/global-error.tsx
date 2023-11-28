'use client';

import { FC } from 'react';

type params = { error: Error & { digest?: string } };

const GlobalError: FC<params> = ({ error }) => {
  return (
    <html>
      <body>
        <h2>Something went wrong! {error.message}</h2>
      </body>
    </html>
  );
};

export default GlobalError;
