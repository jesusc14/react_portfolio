import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const pages = [
  { name: 'Home', path: '#home-section' },
  { name: 'Projects', path: '#projects-section' },
  { name: 'About Me', path: '#about-me-section' }
];

function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {pages.map((page) => (
          <Button key={page.name} href={page.path} color="inherit">
            {page.name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default ButtonAppBar;