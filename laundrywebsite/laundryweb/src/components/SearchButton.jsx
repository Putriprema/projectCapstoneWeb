/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const FAQ = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <div className='Search' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className="form-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Cari..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              width: '1500px',
              height: '50px',
              padding: '10px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              border: 'none',
              outline: 'none',
              borderRadius: '20px',
              marginRight: '10px',
              marginTop: '70px'
            }}
          />
         <Button className="ml-2 text-white" style={{ marginTop: '70px', width: '50px', height: '50px', backgroundColor: '#327094', transition: 'background-color 0.5s', boxShadow: '2px 2px 4px rgba(1, 1, 1, 1.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <ion-icon name="search-outline" style={{ width: '20px', height: '20px', fontWeight: 'bold', display: 'block' }}></ion-icon>
         </Button>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
