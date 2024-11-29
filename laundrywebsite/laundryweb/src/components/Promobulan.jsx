/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import promo1 from '../assets/promo1.png';
import promo2 from '../assets/promo2.png';
import promo3 from '../assets/promo3.png';
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
      <h1 data-aos="fade-up" className=" justify-center text-center font-bold text-[300px]" style={{ color: 'black', fontSize: '24pt',  marginTop: '200px', marginBottom: '100px'}}>Dapatkan Promo Bulan Ini!</h1>
      <Carousel data-aos="fade-up">
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={promo1} alt="First slide" style={{ objectFit: 'contain', maxHeight: '900px' ,maxWeight: '900px'}} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={promo2} alt="Second slide" style={{ objectFit: 'contain', maxHeight: '600px' }} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={promo3} alt="Third slide" style={{ objectFit: 'contain', maxHeight: '600px' }} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Promobulan;
