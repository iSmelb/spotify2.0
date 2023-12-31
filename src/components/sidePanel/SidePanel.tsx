'use client';

import { FC, useState } from 'react';
import cl from './sidePanel.module.scss';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ISidePanel {}

const OpenDrawerWidth = 300;
const CloseDrawerWidth = 80;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: open ? OpenDrawerWidth : CloseDrawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    zIndex: 0,
    top: 8,
    left: 8,
    backgroundColor: 'inherit',
    width: open ? OpenDrawerWidth : CloseDrawerWidth,
  },
  '& .MuiList-root': {
    padding: '8px 12px',
    borderRadius: 8,
    backgroundColor: 'var(--light_black)',
  },
  '& .MuiListItem-root': {
    color: 'var(--gray)',
    padding: '4px 12px',
  },
  '& .MuiButtonBase-root': {
    gap: 20,
    padding: 0,
    color: 'inherit',
    border: '1px solid transparent',

    '&:focus-visible': {
      borderColor: 'var(--white)',
    },
    '&:-moz-focusring': {
      borderColor: 'var(--white)',
    },

    '&.active': {
      color: 'var(--white)',
    },

    '&:hover': {
      backgroundColor: 'transparent',
      color: 'var(--white)',
    },
  },
  '& .MuiListItemIcon-root': {
    minWidth: 'auto',
    color: 'inherit',
  },
  '& .MuiListItemText-root': {
    opacity: open ? 1 : 0,
  },
}));

const SidePanel: FC<ISidePanel> = (props) => {
  const [open, setOpen] = useState(true);
  const pathName = usePathname();

  const handleDrawer = (): void => {
    setOpen(!open);
  };

  return (
    <aside>
      <Drawer variant="permanent" open={open}>
        <nav className={cl.side_navigation}>
          <List>
            <ListItem>
              <ListItemButton
                className={pathName === '/' ? 'active' : ''}
                LinkComponent={Link}
                href="/"
                disableTouchRipple
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton
                className={pathName === '/search' ? 'active' : ''}
                LinkComponent={Link}
                href="/search"
                disableTouchRipple
              >
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <ListItem title={open ? 'close media' : 'open media'}>
              <ListItemButton onClick={handleDrawer} disableTouchRipple>
                <ListItemIcon>
                  <LibraryMusicIcon />
                </ListItemIcon>
                <ListItemText primary="My media" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton
                className={pathName === '/around-you' ? 'active' : ''}
                LinkComponent={Link}
                href="/around-you"
                disableTouchRipple
              >
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Top around you" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Drawer>
    </aside>
  );
};

export default SidePanel;
