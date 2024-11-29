/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import notification from '../data/Notif';
import Footer from '../components/Footer';
import { Button } from 'react-bootstrap';

function Informasi() {

  return (
    <>
      <Navbar/>
      <div className='p-10'>
        <h1>NOTIFIKASI</h1>
      </div>
      <div className='flex flex-col-reverse'>
        {notification.map((item) => (
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#327094', color: 'white', padding: '20px 20px', margin: '10px 40px', borderRadius: '10px'}} key={item.id}>
            <div className='flex'>
              <img className='w-20 h-20' src={item.img} alt=''/>
              <div className='pt-3 pl-9'>
                <h3>{item.title}</h3>
                <p>{item.capt}</p>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100px'}}>
              <Button style={{background: '#D9EAF4', border: '1px solid', color: 'black'}}>Rincian</Button>
              <p className='pt-10'>{item.tanggal}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-40">
        <Footer />
      </div>
    </>
  );
}

export default Informasi;
