'use client';

import { Box, Button, Input, Typography } from '@mui/material';
import { FC, SetStateAction, Dispatch, ChangeEventHandler } from 'react';

type SeekBarProps = {
  value: number;
  min: number;
  max: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  setSeekTime: Dispatch<SetStateAction<number>>;
  appTime: number;
};

const SeekBar: FC<SeekBarProps> = ({
  value,
  min,
  max,
  onChange,
  setSeekTime,
  appTime,
}) => {
  const getTime = (time: number) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <Box display="flex" alignItems="center">
      <Button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        sx={{ marginRight: 4 }}
      >
        -
      </Button>
      <Typography paragraph>{value === 0 ? '0:00' : getTime(value)}</Typography>

      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        // className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />

      <Typography paragraph>{value === 0 ? '0:00' : getTime(max)}</Typography>
      <Button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        sx={{ marginLeft: 4 }}
      >
        +
      </Button>
    </Box>
  );
};

export default SeekBar;
