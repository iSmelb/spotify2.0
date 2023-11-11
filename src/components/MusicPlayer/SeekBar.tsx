'use client';

import { Box, Button, Slider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC, SetStateAction, Dispatch, ChangeEventHandler } from 'react';

const CustomSlider = styled(Slider)({
  color: 'var(--white)',
  width: '20rem',
  margin: '0 1rem',
  height: '4px',

  '&:hover .MuiSlider-thumb': {
    display: 'block',
  },
  '&:hover .MuiSlider-track': {
    color: 'var(--green)',
  },
  '& .MuiSlider-thumb': {
    display: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
});

type SeekBarProps = {
  value: number;
  min: number;
  max: number;
  onChange: (event: Event) => void;
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
        sx={{ marginRight: 2, minWidth: '0', color: 'var(--green)' }}
      >
        -
      </Button>
      <Typography paragraph>{value === 0 ? '0:00' : getTime(value)}</Typography>

      <CustomSlider
        step={1}
        value={value}
        min={min}
        max={max}
        size="small"
        onChange={onChange}
      />

      <Typography paragraph>{value === 0 ? '0:00' : getTime(max)}</Typography>
      <Button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        sx={{ marginLeft: 2, minWidth: '0', color: 'var(--green)' }}
      >
        +
      </Button>
    </Box>
  );
};

export default SeekBar;
