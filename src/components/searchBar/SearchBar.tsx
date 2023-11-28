import { FC, useState, SyntheticEvent } from 'react';
import { FormControl, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

const SearchBar: FC = () => {
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (value.trim() === '') return;
    router.push(`/search?query=${value}`);
    setValue('');
  };

  return (
    <FormControl
      component={'form'}
      onSubmit={handleSubmit}
      sx={{
        padding: '0 10px',
        background: 'var(--background-elevated-base)',
        borderRadius: '500px',
        flex: '0 1 364px',
        '&: hover': {
          background: 'var(--background-elevated-highlight)',
          outline: '1px solid var(--background-base)',
        },
        '&:focus-within': {
          outline: '2px solid var(--white)',
        },
        fontSize: '0.9rem',
      }}
    >
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autoComplete="off"
        startAdornment={<SearchIcon sx={{ mr: '0.5rem' }} />}
        placeholder="Full name of songs or artists"
        type="search"
        id="search-input"
        sx={{
          color: 'inherit',
          height: '48px',
          font: 'inherit',

          '&::before': {
            display: 'none',
          },
          '&::after': {
            display: 'none',
          },
          '& .MuiInputBase-input': {
            padding: 0,
          },
        }}
      />
    </FormControl>
  );
};

export default SearchBar;
