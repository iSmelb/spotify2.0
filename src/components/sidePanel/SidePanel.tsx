"use client"

import { FC, useState } from 'react';
import cl from './sidePanel.module.scss'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

interface ISidePanel {
}

const OpenDrawerWidth = 300;
const CloseDrawerWidth = 80;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
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
      backgroundColor: '#121212',
    },
    '& .MuiListItem-root': {
      color: '#b3b3b3',
      padding: '4px 12px',
    },
    '& .MuiButtonBase-root': {
      gap: 20,
      padding: 0,

      '&:hover': {
        backgroundColor: 'transparent',
        color: '#fff'
      }
    },
    '& .MuiListItemIcon-root': {
      minWidth: 'auto',
      color: 'inherit'
    },
    '& .MuiListItemText-root': {
      opacity: open ? 1 : 0
    }
  }),
);

const SidePanel: FC<ISidePanel> = (props) => {
  const [open, setOpen] = useState(true);

  const handleDrawer = (): void => {
    setOpen(!open);
  };

  return (
    <aside>
      <Drawer
        variant='permanent'
        open={open}
      >
        <nav className={cl.side_navigation}>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Home'/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary='Search'/>
              </ListItemButton>
            </ListItem>

          </List>

          <List>
            <ListItem>
              <ListItemButton onClick={handleDrawer}>
                <ListItemIcon>
                  <LibraryMusicIcon/>
                </ListItemIcon>
                <ListItemText primary='My media'/>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Drawer>
    </aside>
  )
};

export default SidePanel; 
