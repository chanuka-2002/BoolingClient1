// src/components/explore/PropertyCard.jsx
import React from 'react';

const PropertyCard = ({ property, onBook }) => {
  const styles = {
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '200px'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    availableBadge: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      backgroundColor: '#4caf50',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '600'
    },
    content: {
      padding: '16px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    name: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '8px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: '#1a1a1a'
    },
    location: {
      color: '#666',
      fontSize: '14px',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '16px',
      fontSize: '14px'
    },
    ratingValue: {
      fontWeight: '600',
      color: '#1a1a1a'
    },
    reviews: {
      color: '#666'
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'auto'
    },
    priceContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    price: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1976d2'
    },
    priceLabel: {
      fontSize: '12px',
      color: '#666'
    },
    bookButton: {
      padding: '8px 20px',
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
    <div 
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
      }}
    >
      <div style={styles.imageContainer}>
        <img
          src={property.image}
          alt={property.name}
          style={styles.image}
        />
        {property.available && (
          <span style={styles.availableBadge}>Available</span>
        )}
      </div>
      
      <div style={styles.content}>
        <h3 style={styles.name}>{property.name}</h3>
        
        <div style={styles.location}>
          <span>📍</span>
          <span>{property.location}</span>
        </div>
        
        <div style={styles.rating}>
          <span style={styles.ratingValue}>⭐ {property.rating}</span>
          <span style={styles.reviews}>({property.reviews} reviews)</span>
        </div>
        
        <div style={styles.footer}>
          <div style={styles.priceContainer}>
            <div style={styles.price}>${property.price}</div>
            <div style={styles.priceLabel}>per night</div>
          </div>
          <button 
            style={styles.bookButton}
            onClick={() => onBook && onBook(property)}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1565c0'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1976d2'}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;