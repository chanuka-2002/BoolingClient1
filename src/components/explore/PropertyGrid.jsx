// src/components/explore/PropertyGrid.jsx
import React from 'react';
import PropertyCard from './PropertyCard';
import EmptyState from './EmptyState';

const PropertyGrid = ({ properties, onBook, onClearFilters }) => {
  const styles = {
    container: {
      flex: 1
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      flexWrap: 'wrap',
      gap: '12px'
    },
    resultsCount: {
      color: '#666',
      fontSize: '15px'
    },
    sortSelect: {
      padding: '8px 32px 8px 12px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
      cursor: 'pointer'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '24px'
    }
  };

  if (properties.length === 0) {
    return (
      <div style={styles.container}>
        <EmptyState onClearFilters={onClearFilters} />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p style={styles.resultsCount}>
          <strong>{properties.length}</strong> properties found
        </p>
        <select 
          style={styles.sortSelect}
          onFocus={(e) => e.target.style.borderColor = '#1976d2'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
        >
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: High to Low</option>
        </select>
      </div>

      <div style={styles.grid}>
        {properties.map(property => (
          <PropertyCard 
            key={property.id} 
            property={property}
            onBook={onBook}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;