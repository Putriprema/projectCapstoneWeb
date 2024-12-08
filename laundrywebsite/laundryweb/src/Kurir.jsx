import React from 'react';
import kurir from './assets/kurir.jpg';  // Correctly import the image

const Kurir = () => {
  return (
    <div 
      style={{
        display: 'flex',             // Use flexbox for layout
        justifyContent: 'center',    // Center horizontally
        alignItems: 'center',        // Center vertically
        height: '100vh',             // Full viewport height
        textAlign: 'center',         // Center text
        flexDirection: 'column',     // Stack content vertically
      }}
    >
      {/* Display the image */}
      <img 
        src={kurir}  // Use the imported 'kurir' directly
        alt="Kurir" 
        style={{ width: '300px', height: 'auto', marginBottom: '20px' }} 
      />
      
      {/* Display the text below the image */}
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Kurir sedang bersiap dan berangkat menjemput pakaian
      </p>
    </div>
  );
};

export default Kurir;
