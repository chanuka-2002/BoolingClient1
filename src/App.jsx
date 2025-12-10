import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection'; 
import FeaturedListings from './components/FeaturedListings';
import ExploreProperties from './components/explore/ExploreProperties';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1, bgcolor: '#f5f8fa', minHeight: '100vh' }}>
        <Header />
        
        <Routes>
          {/* Home/Dashboard Route */}
          <Route path="/" element={
            <>
              <Hero />
              <CategorySection />
              <FeaturedListings />
              
              {/* . */}
            </>
          } />
          
          {/* Explore All Properties Route */}
          <Route path="/explore" element={<ExploreProperties />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;