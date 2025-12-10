// src/components/explore/ExploreProperties.jsx
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FilterSidebar from './FilterSidebar';
import PropertyGrid from './PropertyGrid';

const ExploreProperties = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Sample data - In real app, this would come from API
  const properties = [
    {
      id: 1,
      name: 'Araliya Beach Resort',
      category: 'accommodation',
      price: 350,
      rating: 4.9,
      reviews: 128,
      location: 'Sri Lanka',
      image: '/images/AraliyaBeachResort.jpeg',
      available: true
    },
    {
      id: 2,
      name: 'City Center Apartment',
      category: 'accommodation',
      price: 120,
      rating: 4.5,
      reviews: 89,
      location: 'Paris',
      image: '',
      available: true
    },
    {
      id: 3,
      name: 'Desert Safari Adventure',
      category: 'activities',
      price: 85,
      rating: 4.8,
      reviews: 234,
      location: 'Dubai',
      image: '',
      available: true
    },
    {
      id: 4,
      name: 'Kayaking Kitulgala',
      category: 'activities',
      price: 50,
      rating: 4.7,
      reviews: 156,
      location: 'Kitulgala',
      image: '',
      available: true
    },
    {
      id: 5,
      name: 'Cafe de vibe',
      category: 'restaurants',
      price: 95,
      rating: 4.9,
      reviews: 342,
      location: 'Kandy',
      image: '',
      available: true
    },
    {
      id: 6,
      name: 'Year end Music Festival',
      category: 'events',
      price: 40,
      rating: 4.6,
      reviews: 89,
      location: 'Colombo',
      image: '',
      available: true
    },
    {
      id: 7,
      name: 'Upcountry Adventure',
      category: 'packages',
      price: 899,
      rating: 5.0,
      reviews: 67,
      location: 'Ella',
      image: '',
      available: true
    },
    {
      id: 8,
      name: 'Toyota Axio',
      category: 'cars',
      price: 180,
      rating: 4.7,
      reviews: 145,
      location: 'Galle',
      image: '',
      available: true
    }
  ];

  // Filter properties based on all criteria
  const filteredProperties = properties.filter(property => {
    const matchesCategory = selectedCategory === 'all' || property.category === selectedCategory;
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesRating = property.rating >= selectedRating;
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || property.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesRating && matchesSearch && matchesLocation;
  });

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 1000]);
    setSelectedRating(0);
    setSearchQuery('');
    setSelectedLocation('');
  };

  const handleSearch = () => {
    // Optional: Add search analytics or API call here
    console.log('Searching with query:', searchQuery);
  };

  const handleBook = (property) => {
    // Handle booking logic
    console.log('Booking property:', property);
    // Navigate to booking page or open booking modal
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f8fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '20px'
    },
    headerContent: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#1a1a1a'
    },
    mainContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '24px',
      display: 'flex',
      gap: '24px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>Explore All Services</h1>
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
          />
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Filters Sidebar */}
        <FilterSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          onClearFilters={clearFilters}
        />

        {/* Properties Grid */}
        <PropertyGrid
          properties={filteredProperties}
          onBook={handleBook}
          onClearFilters={clearFilters}
        />
      </div>
    </div>
  );
};

export default ExploreProperties;