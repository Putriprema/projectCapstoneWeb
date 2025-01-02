/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import promo1 from '../assets/Promo1.png';
import promo2 from '../assets/Promo2.png';
import promo3 from '../assets/Promo3.png';
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import { useEffect } from "react";

const Promobulan = () => {

  useEffect(() =>{
    AOS.init({
      once: true,
      duration : 1000
    }) 
  }, [])

  return (
    <div>
      <h1
        data-aos="fade-up"
        className="text-center font-bold"
        style={{
          color: 'black',
          fontSize: '16pt',
          marginTop: '100px',
          marginBottom: '50px',
        }}
      >
        Dapatkan Promo Bulan Ini!
      </h1>
      <Carousel data-aos="fade-up" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={promo1}
              alt="First slide"
              style={{
                objectFit: 'contain',
                maxHeight: '500px',
                maxWidth: '100%',
                width: 'auto',
              }}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={promo2}
              alt="Second slide"
              style={{
                objectFit: 'contain',
                maxHeight: '500px',
                maxWidth: '100%',
                width: 'auto',
              }}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={promo3}
              alt="Third slide"
              style={{
                objectFit: 'contain',
                maxHeight: '500px',
                maxWidth: '100%',
                width: 'auto',
              }}
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );  
};

export default Promobulan;
