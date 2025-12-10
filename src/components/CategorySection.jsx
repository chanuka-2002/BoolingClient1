// src/components/CategorySection.jsx
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Stack, 
  Button 
} from '@mui/material'; // Note: I removed 'Grid' since you are using Stack now
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ApartmentIcon from '@mui/icons-material/Apartment';       
import ExploreIcon from '@mui/icons-material/Explore';           
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'; 
import RestaurantIcon from '@mui/icons-material/Restaurant';     
import EventIcon from '@mui/icons-material/Event';  
import EquipmentIcon from '@mui/icons-material/EmojiEvents';             

const categories = [
  { title: 'Hotels', icon: <ApartmentIcon sx={{ fontSize: 32 }} />, color: '#1976d2' },
  { title: 'Tours & Activities', icon: <ExploreIcon sx={{ fontSize: 32 }} />, color: '#009688' },
  { title: 'Car Rentals', icon: <DirectionsCarIcon sx={{ fontSize: 32 }} />, color: '#7b1fa2' },
  { title: 'Restaurants', icon: <RestaurantIcon sx={{ fontSize: 32 }} />, color: '#0288d1' },
  { title: 'Events', icon: <EventIcon sx={{ fontSize: 32 }} />, color: '#1976d2' }, 
  { title: 'Equipment Rentals', icon: <EquipmentIcon sx={{ fontSize: 32 }} />, color: '#f57c00' },
];

const CategorySection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}> 
      
      {/* 1. Header Section */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          Explore by Category
        </Typography>
        <Button 
          endIcon={<ArrowForwardIosIcon sx={{ fontSize: '12px !important' }} />} 
          sx={{ textTransform: 'none', fontWeight: 500 }}
        >
          View all
        </Button>
      </Stack>

      {/* 2. The SCROLLABLE LIST (Only ONE Stack here) */}
      <Stack 
        direction="row"
        spacing={2}
        sx={{
          overflowX: "auto",      // Enables horizontal scrolling
          overflowY: "hidden",    // Hides vertical overflow
          whiteSpace: "nowrap",   // Keeps items in one line
          pb: 1,                  // Padding bottom for scrollbar space
          "&::-webkit-scrollbar": { height: 6 },  
          "&::-webkit-scrollbar-thumb": { background: "#ccc", borderRadius: 3 },
        }}
      >
        {/* 3. The LOOP (Only ONE loop here) */}
        {categories.map((cat, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              width: 180,
              height: 180,
              flex: "0 0 auto", // Prevents the card from shrinking
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "transparent",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transform: "translateY(-4px)",
              },
            }}
          >
            <Box
              sx={{
                bgcolor: cat.color,
                color: "white",
                width: 56,
                height: 56,
                borderRadius: 2,
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              {cat.icon}
            </Box>

            <Typography variant="body2" fontWeight="600" sx={{ px: 1, whiteSpace: 'normal' }}>
              {cat.title}
            </Typography>
          </Paper>
        ))}
      </Stack>
      
    </Container>
  );
};

export default CategorySection;