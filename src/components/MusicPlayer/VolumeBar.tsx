'use client';

import { Box } from '@mui/material';
import { FC, ChangeEventHandler, SetStateAction, Dispatch } from 'react';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

type VolumeBarProps = {
  value: number;
  min: number;
  max: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  setVolume: Dispatch<SetStateAction<number>>;
};

const VolumeBar: FC<VolumeBarProps> = ({
  value,
  min,
  max,
  onChange,
  setVolume,
}) => {
  return (
    <Box display="flex" flex={1} alignItems="center" justifyContent="end">
      {value <= 1 && value > 0.5 && (
        <VolumeUpIcon onClick={() => setVolume(0)} />
      )}
      {value <= 0.5 && value > 0 && (
        <VolumeDownIcon onClick={() => setVolume(0)} />
      )}
      {value === 0 && <VolumeMuteIcon onClick={() => setVolume(1)} />}
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        // className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      />
    </Box>
  );
};

export default VolumeBar;
