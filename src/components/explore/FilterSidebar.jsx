// src/components/explore/FilterSidebar.jsx
import React from 'react';

const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedLocation,
  setSelectedLocation,
  selectedRating,
  setSelectedRating,
  onClearFilters
}) => {
  const categories = [
    { id: 'all', name: 'All Categories', icon: '🏠' },
    { id: 'accommodation', name: 'Accommodation', icon: '🏨' },
    { id: 'activities', name: 'Activities & Tours', icon: '🎯' },
    { id: 'restaurants', name: 'Restaurants', icon: '🍽️' },
    { id: 'events', name: 'Events', icon: '🎫' },
    { id: 'packages', name: 'Vacation Packages', icon: '🏖️' },
    { id: 'cars', name: 'Car Rentals', icon: '🚙' },
    { id: 'equipment', name: 'Equipment Rentals', icon: '📷' }
  ];

  const styles = {
    sidebar: {
      width: '300px',
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '24px',
      height: 'fit-content',
      position: 'sticky',
      top: '100px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    sidebarHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px'
    },
    sidebarTitle: {
      fontSize: '20px',
      fontWeight: '600',
      margin: 0
    },
    clearButton: {
      background: 'none',
      border: 'none',
      color: '#1976d2',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    },
    filterSection: {
      marginBottom: '24px'
    },
    filterTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '12px',
      color: '#333'
    },
    categoryButton: {
      width: '100%',
      padding: '12px 16px',
      marginBottom: '8px',
      border: '2px solid transparent',
      borderRadius: '8px',
      backgroundColor: '#f5f5f5',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'all 0.2s',
      textAlign: 'left'
    },
    categoryButtonActive: {
      backgroundColor: '#e3f2fd',
      border: '2px solid #1976d2',
      color: '#1976d2'
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none',
      boxSizing: 'border-box'
    },
    slider: {
      width: '100%',
      marginBottom: '8px',
      cursor: 'pointer'
    },
    priceDisplay: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.sidebarHeader}>
        <h2 style={styles.sidebarTitle}>Filters</h2>
        <button 
          onClick={onClearFilters} 
          style={styles.clearButton}
          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
        >
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div style={styles.filterSection}>
        <h3 style={styles.filterTitle}>Category</h3>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              ...styles.categoryButton,
              ...(selectedCategory === cat.id ? styles.categoryButtonActive : {})
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== cat.id) {
                e.target.style.backgroundColor = '#e8e8e8';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== cat.id) {
                e.target.style.backgroundColor = '#f5f5f5';
              }
            }}
          >
            <span style={{ fontSize: '20px' }}>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Price Range */}
      <div style={styles.filterSection}>
        <h3 style={styles.filterTitle}>Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
          style={styles.slider}
        />
        <div style={styles.priceDisplay}>
          <span style={{ color: '#666' }}>$0</span>
          <span style={{ color: '#1976d2', fontWeight: '600' }}>${priceRange[1]}</span>
        </div>
      </div>

      {/* Location Filter */}
      <div style={styles.filterSection}>
        <h3 style={styles.filterTitle}>Location</h3>
        <input
          type="text"
          placeholder="Enter location..."
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          style={styles.input}
          onFocus={(e) => e.target.style.borderColor = '#1976d2'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
        />
      </div>

      {/* Rating Filter */}
      <div style={styles.filterSection}>
        <h3 style={styles.filterTitle}>Minimum Rating</h3>
        {[5, 4, 3, 2, 1, 0].map(rating => (
          <button
            key={rating}
            onClick={() => setSelectedRating(rating)}
            style={{
              ...styles.categoryButton,
              ...(selectedRating === rating ? styles.categoryButtonActive : {})
            }}
            onMouseEnter={(e) => {
              if (selectedRating !== rating) {
                e.target.style.backgroundColor = '#e8e8e8';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedRating !== rating) {
                e.target.style.backgroundColor = '#f5f5f5';
              }
            }}
          >
            {rating > 0 ? `⭐ ${rating}+ Stars` : 'Any Rating'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;