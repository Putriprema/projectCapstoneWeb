/* eslint-disable no-unused-vars */
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cucikering from '../assets/cucikering.png';
import cucisetrika from '../assets/cucisetrika.png';
import cucikilat from '../assets/cucikilat.png';
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import { useEffect } from "react";
import { Link } from 'react-router-dom';
const LayananKami = () => {
  

   useEffect(() =>{
    AOS.init({
      once: true,
      duration : 1000
    }) 
  }, [])

  return (
    <div>
      <h1 data-aos="fade-up" className="text-center font-bold" style={{ color: 'black', marginTop: '200px', fontSize:'24pt' }}>Layanan Kami</h1>
      <p  data-aos="fade-up" className="text-center" style={{ marginTop: '20px', fontSize:'18pt' }}>Silahkan Pilih layanan yang Dibutuhkan</p>
      <div data-aos="fade-up"  className="d-flex justify-content-around align-items-center" style={{ marginTop: '70px' }}>
            {/* layanan cuci kering*/}
            <Card data-aos="fade-up"  style={{ width: '30rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '20px', margin: '0 10px' }}>
          <div data-aos="fade-up" style={{ display: 'flex', justifyContent: 'center' }}>
            <Card.Img variant="top" src={cucikering} alt="cucikering" style={{
              width: '500px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '20px 20px 0 0',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
            }} />
          </div>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title style={{ fontWeight: 'bold' }}>Cuci Kering</Card.Title>
            <Button variant="primary" className="btn-lg">
            <a style={{ color: 'white', textDecoration:'none'}} href="/Layanan">Pilih</a>
            </Button>
          </Card.Body>
        </Card>
   
        {/* layanan cuci setrika*/}
        <Card data-aos="fade-up" style={{ width: '30rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '20px', margin: '0 10px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card.Img variant="top" src={cucisetrika} alt="cucisetrika" style={{
              width: '500px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '20px 20px 0 0',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
            }} />
          </div>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title style={{ fontWeight: 'bold' }}>Cuci Setrika</Card.Title>
            <Button variant="primary" className="btn-lg">
            <a style={{ color: 'white', textDecoration:'none'}} href="/Layanan">Pilih</a>
            </Button>
          </Card.Body>
        </Card>
  
            {/* layanan cuci kilat*/}
            <Card data-aos="fade-up" style={{ width: '30rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '20px', margin: '0 10px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card.Img variant="top" src={cucikilat} alt="cucisetrika" style={{
              width: '500px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '20px 20px 0 0',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
            }} />
          </div>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title style={{ fontWeight: 'bold' }}>Cuci Kilat</Card.Title>
            <Button variant="primary" className="btn-lg">
            <a style={{ color: 'white', textDecoration:'none'}} href="/Layanan">Pilih</a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
          }  

export default LayananKami