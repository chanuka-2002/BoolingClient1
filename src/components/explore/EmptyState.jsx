// src/components/explore/EmptyState.jsx
import React from 'react';

const EmptyState = ({ onClearFilters }) => {
  const styles = {
    container: {
      textAlign: 'center',
      padding: '60px 20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    icon: {
      fontSize: '64px',
      marginBottom: '16px'
    },
    title: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#1a1a1a'
    },
    text: {
      color: '#666',
      marginBottom: '20px',
      fontSize: '15px'
    },
    button: {
      padding: '10px 24px',
      backgroundColor: '#1976d2',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>🔍</div>
      <h3 style={styles.title}>No properties found</h3>
      <p style={styles.text}>Try adjusting your filters or search criteria</p>
      <button 
        onClick={onClearFilters} 
        style={styles.button}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#1565c0'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#1976d2'}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default EmptyState;