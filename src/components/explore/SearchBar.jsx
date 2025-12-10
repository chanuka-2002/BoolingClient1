// src/components/explore/SearchBar.jsx
import { AlignCenter } from 'lucide-react';
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const styles = {
    searchContainer: {
      display: 'flex',
      gap: '12px',
      width: '100%',
      align : 'center'
    },
    inputWrapper: {
      position: 'relative',
      flex: 1
    },
    searchIcon: {
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#999',
      fontSize: '18px'
    },
    searchInput: {
      width: '95%',
      padding: '12px 16px 12px 44px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '15px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    searchButton: {
      padding: '12px 60px',
      backgroundColor: '#397cbfff',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '15px',
      fontalign: 'center',
      fontWeight: '750',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      whiteSpace: 'nowrap'
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch();
    }
  };

  return (
    <div style={styles.searchContainer}>
      <div style={styles.inputWrapper}>
        <span style={styles.searchIcon}>🔍</span>
        <input
          type="text"
          placeholder="Search properties, locations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.searchInput}
          onFocus={(e) => e.target.style.borderColor = '#1976d2'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
        />
      </div>
      <button 
        style={styles.searchButton}
        onClick={onSearch}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#1565c0'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#1976d2'}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;