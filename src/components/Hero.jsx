// src/components/Hero.jsx
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        // This gradient matches the light blue in your image
        background: 'linear-gradient(180deg, #d6e8f8ff 0%, #fffefeff 100%)',
        
        // This ensures it spans the full width of the screen
        width: '96%',
        
        // Sets a nice height (350px) so it's visible even without the search bar
        height: '350px', 
        margin: '0 auto',
        marginTop: 3,
        marginBottom: 4,
        borderRadius: 2,
        
        // These 3 lines are crucial for centering content
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          {/* Hero Title */}
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              color: '#1a1a1a',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Find Your Perfect Experience
          </Typography>
          
          {/* Hero Subtitle */}
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Book accommodations, activities, transfers, and more — all in one place
          </Typography>

          {/* Explore All Button */}
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/explore')}
            sx={{
              bgcolor: '#1976d2',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
              '&:hover': {
                bgcolor: '#1565c0',
                boxShadow: '0 6px 16px rgba(25, 118, 210, 0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
            startIcon={<Search size={20} />}
          >
            Explore All Properties
          </Button>

          {/* Optional: Quick Stats */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 4, 
              mt: 4,
              flexWrap: 'wrap'
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2' }}>
                10,000+
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Properties
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2' }}>
                150+
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Destinations
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2' }}>
                50,000+
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Happy Customers
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;