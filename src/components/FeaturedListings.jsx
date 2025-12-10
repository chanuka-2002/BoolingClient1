// src/components/FeaturedListings.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  Chip
} from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarRateIcon from '@mui/icons-material/StarRate';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// === SAMPLE DATA ===
const featuredListings = [
  {
    id: 1,
    title: "Grand Plaza Hotel",
    location: "Moratuwa, Colombo",
    price: 249,
    rating: 4.8,
    reviews: 1243,
    category: "Hotel"
  },
  {
    id: 2,
    title: "City Walking Tour",
    location: "Moratuwa, Colombo",
    price: 89,
    rating: 4.9,
    reviews: 856,
    category: "Activity"
  },
  {
    id: 3,
    title: "Tesla Model 3",
    location: "Moratuwa, Colombo",
    price: 120,
    rating: 4.7,
    reviews: 432,
    category: "Car"
  },
  
  {
    id: 4,
    title: "Seaside Bistro",
    location: "Moratuwa, Colombo",
    price: 65,
    rating: 4.6,
    reviews: 678,
    category: "Restaurant"
  },
  {
    id: 5,
    title: "Mountain Resort",
    location: "Moratuwa, Colombo",
    price: 320,
    rating: 4.9,
    reviews: 534,
    category: "Hotel"
  },
  {
    id: 6,
    title: "Jazz Music Festival",
    location: "Moratuwa, Colombo",
    price: 45,
    rating: 4.8,
    reviews: 1024,
    category: "Event"
  },
];

const FeaturedListings = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#fafafa', py: 3 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
        
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight={600} align='center'>
            Featured Listings
          </Typography>
          <Button 
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: '12px !important' }} />} 
            sx={{ textTransform: 'none', fontWeight: 500, color: 'primary.main', fontSize: '0.875rem' }}
          >
            View all
          </Button>
        </Stack>

        {/* Grid */}
        <Grid container spacing={2} justifyContent="center">
          {featuredListings.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              
              <Card 
                elevation={0}
                sx={{ 
                  borderRadius: 1.5,
                  border: "1px solid #e0e0e0",
                  bgcolor: 'white',
                  height: '100%',
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  alignContent: 'center',
                  transition: "all 0.2s ease",
                  "&:hover": { boxShadow: 2, transform: 'translateY(-2px)' }
                }}
              >

                {/* Fixed Height Image Placeholder */}
                <Box 
                  sx={{ 
                    height: 180, 
                    bgcolor: '#f0f0f0', 
                    width: '100%',
                    flexShrink: 0
                  }} 
                />

                <CardContent 
                  sx={{ 
                    p: 2, 
                    pb: '16px !important',
                    display: "flex", 
                    flexDirection: "column",
                    gap: 1
                  }}
                >

                  {/* Title + Rating */}
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
                    
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{
                        lineHeight: 1.3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        flex: 1,
                        fontSize: '0.95rem'
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Chip
                      icon={<StarRateIcon sx={{ fontSize: '13px !important', color: 'white !important' }} />} 
                      label={item.rating.toFixed(1)}
                      size="small"
                      sx={{ 
                        bgcolor: "primary.main", 
                        color: "white", 
                        fontWeight: 600, 
                        height: 22,
                        fontSize: '0.75rem',
                        flexShrink: 0,
                        '& .MuiChip-label': { px: 0.5 }
                      }}
                    />
                  </Stack>

                  {/* Location */}
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <LocationOnIcon sx={{ fontSize: 14, color: 'text.secondary', flexShrink: 0 }} />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontSize: '0.8rem'
                      }}
                    >
                      {item.location}
                    </Typography>
                  </Stack>

                  {/* Price + Reviews */}
                  <Stack 
                    direction="row" 
                    justifyContent="space-between" 
                    alignItems="center"
                    sx={{ mt: 0.5 }}
                  >
                    <Box>
                      <Typography 
                        component="span" 
                        variant="h6" 
                        fontWeight={700} 
                        color="primary.main"
                        sx={{ fontSize: '1.1rem' }}
                      >
                        ${item.price}
                      </Typography>
                      <Typography 
                        component="span" 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ ml: 0.3, fontSize: '0.75rem' }}
                      >
                        /night
                      </Typography>
                    </Box>

                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem', textAlign: 'right' }}>
                      {item.reviews}<br/>reviews
                    </Typography>
                  </Stack>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedListings;