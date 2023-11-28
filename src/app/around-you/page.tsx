'use client';

import IpInfoService from '@/api/IpiInfo';
import ErrorWrapper from '@/components/error/error';
import Loading from '@/components/loading/loading';
import MusicLists from '@/components/musicLists/MusicLists';
import { useUpdateTitle } from '@/hooks/useUpdateTitle';
import { useGetSongsByCountryQuery } from '@/redux/services/shazamCore';
import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const AroundYouPage: NextPage = () => {
  const [location, setLocation] = useState('');
  const [isError, setIsError] = useState<Error | null>(null);
  const [fetching, setFetching] = useState(true);

  const { data, isFetching, error } = useGetSongsByCountryQuery(location, {
    skip: !location,
  });

  useEffect(() => {
    try {
      IpInfoService.getUseInfo().then((res) => {
        if (res.country) {
          setLocation(res.country);
        } else {
          setIsError(
            new Error('If you use adblock, please turn off it and try again'),
          );
        }
      });
    } catch (error) {
    } finally {
      setFetching(false);
    }
  }, []);

  useUpdateTitle(location, [location]);

  if (error || isError) return <ErrorWrapper error={error || isError} />;

  if (!fetching && !location)
    return (
      <Typography display="flex" justifyContent="center">
        If you use adblock, please turn off it and try again
      </Typography>
    );

  return (
    <Box p="1rem">
      {location && (
        <Typography variant="h4" mb="1rem">
          Listen popular music in {location}
        </Typography>
      )}

      {(fetching || isFetching) && <Loading />}

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 200px)"
        gap="32px"
        justifyContent="center"
      >
        {data && <MusicLists data={data} />}
      </Box>
    </Box>
  );
};

export default AroundYouPage;
