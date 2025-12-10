// src/components/Header.jsx
import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Stack 
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// You'll need a real flag image. For now, I'm using a placeholder from a CDN.
const flagUrl = "";

const Header = () => {
  return (
    // 1. AppBar with a white background and no shadow (elevation=0)
    <AppBar position="static" color="default" elevation={1} sx={{ bgcolor: 'common.white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        {/* === LEFT SECTION: Logo & Nav Links === */}
        <Stack direction="row" alignItems="center" spacing={4}>
          {/* The Logo */}
          <Stack direction="row" alignItems="center" spacing={1}>
            {/* Blue rounded square placeholder for logo icon */}
            <Box sx={{ width: 24, height: 24, bgcolor: 'primary.main', borderRadius: 1 }} />
            <Typography variant="h6" component="div" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              BOOK <span style={{ fontWeight: 'normal', color: 'black' }}>it</span>
            </Typography>
          </Stack>

          {/* Navigation Links (Hidden on small screens for responsiveness) */}
          <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {['Explore', 'Deals', 'Help'].map((text) => (
              <Button key={text} color="inherit" sx={{ fontWeight: 400, textTransform: 'none' }}>
                {text}
              </Button>
            ))}
          </Stack>
        </Stack>


        {/* === CENTER SECTION: Currency/Language Selector === */}
        {/* We use an empty Box with flexGrow to push this to the center-right */}
        <Box sx={{ flexGrow: 1 }} /> 
        
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mr: 4 }}>
          <img src={flagUrl} alt="Flag" style={{ width: 24, height: 'auto' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            LKR
          </Typography>
        </Stack>


        {/* === RIGHT SECTION: Property, Cart, Sign In === */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button color="inherit" sx={{ textTransform: 'none', display: { xs: 'none', md: 'flex' } }}>
            List Your Property
          </Button>
          
          <IconButton aria-label="cart" color="inherit">
            <ShoppingCartOutlinedIcon />
          </IconButton>
          
          <Button variant="contained" color="primary" sx={{ textTransform: 'none', borderRadius: 5, px: 3 }}>
            Sign In
          </Button>
        </Stack>

      </Toolbar>
    </AppBar>
  );
};

export default Header;