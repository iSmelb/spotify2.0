'use client';

import { Box, Slider } from '@mui/material';
import { FC, SetStateAction, Dispatch, memo } from 'react';
import { styled } from '@mui/material/styles';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const CustomSlider = styled(Slider)({
  color: 'var(--white)',
  marginLeft: '0.5rem',
  width: '7rem',
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

type VolumeBarProps = {
  value: number;
  min: number;
  max: number;
  onChange: (event: Event) => void;
  setVolume: Dispatch<SetStateAction<number>>;
};

const VolumeBar: FC<VolumeBarProps> = memo(
  ({ value, min, max, onChange, setVolume }) => {
    return (
      <Box display="flex" flex={1} alignItems="center" justifyContent="end">
        {value <= 1 && value > 0.5 && (
          <VolumeUpIcon onClick={() => setVolume(0)} />
        )}
        {value <= 0.5 && value > 0 && (
          <VolumeDownIcon onClick={() => setVolume(0)} />
        )}
        {value === 0 && <VolumeMuteIcon onClick={() => setVolume(1)} />}
        <CustomSlider
          step={0.1}
          value={value}
          min={min}
          max={max}
          size="small"
          onChange={onChange}
        />
      </Box>
    );
  },
);

export default VolumeBar;
