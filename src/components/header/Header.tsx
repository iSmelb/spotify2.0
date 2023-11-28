'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import SearchBar from '../searchBar/SearchBar';
import HeaderNavigation from '../headerNavigation/HeaderNavigation';
import Link from 'next/link';
import PlayingSong from '../playingSong/PlayingSong';

const Header: FC = () => {
  const pathName = usePathname();

  return (
    <header className="header">
      <HeaderNavigation />
      {pathName.includes('/search') && <SearchBar />}
      <PlayingSong />
      <Link
        title="https://github.com/iSmelb?tab=repositories"
        className="github"
        href="https://github.com/iSmelb?tab=repositories"
        target="_blank"
      >
        Look another projects
      </Link>
    </header>
  );
};

export default Header;
