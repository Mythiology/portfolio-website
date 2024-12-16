'use client';

import { useState, MouseEvent } from 'react';
// import { useTranslations } from 'next-intl';
import { Button } from '@components/Button';
import { Link } from '@navigation';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';
// import { LanguageToggleButton } from './LanguageToggleButton';

export const Dropdown = () => {
  // const t = useTranslations('Buttons');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='right-button'
        className='right-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'right-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        disableScrollLock
      >
        <Link href='/about' passHref>
          <MenuItem>
            <ListItemIcon>
              <InfoIcon fontSize='small' />
            </ListItemIcon>
            <p>About</p>
          </MenuItem>
        </Link>
        <Link href='/experience' passHref>
          <MenuItem>
            <ListItemIcon>
              <ArticleIcon fontSize='small' />
            </ListItemIcon>
            <p>Experience</p>
          </MenuItem>
        </Link>
        <Link href='/projects' passHref>
          <MenuItem>
            <ListItemIcon>
              <LinkIcon fontSize='small' />
            </ListItemIcon>
            <p>Projects</p>
          </MenuItem>
        </Link>
        {/*<LanguageToggleButton />*/}
      </Menu>
    </div>
  );
};
