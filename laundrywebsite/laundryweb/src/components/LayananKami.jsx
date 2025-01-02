/* eslint-disable no-unused-vars */
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cucikering from '../assets/cucikering.png';
import cucisetrika from '../assets/cucisetrika.png';
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
      <h1
        data-aos="fade-up"
        className="text-center font-bold"
        style={{ color: 'black', marginTop: '100px', fontSize: '16pt' }}
      >
        Layanan Kami
      </h1>
      <p
        data-aos="fade-up"
        className="text-center"
        style={{ marginTop: '20px', fontSize: '12pt' }}
      >
        Silahkan Pilih layanan yang Dibutuhkan
      </p>
      <div
        data-aos="fade-up"
        className="d-flex justify-content-around align-items-center flex-wrap"
        style={{ marginTop: '50px', gap: '20px' }}
      >
        {/* layanan cuci kering */}
        <Card
          data-aos="fade-up"
          style={{
            width: '20rem',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            borderRadius: '15px',
          }}
        >
          <div
            data-aos="fade-up"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card.Img
              variant="top"
              src={cucikering}
              alt="cucikering"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '15px 15px 0 0',
              }}
            />
          </div>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title style={{ fontWeight: 'bold' }}>Cuci Kering</Card.Title>
            <Button variant="primary" className="btn-lg">
              <Link
                to="/layanan"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Pilih
              </Link>
            </Button>
          </Card.Body>
        </Card>
  
        {/* layanan cuci setrika */}
        <Card
          data-aos="fade-up"
          style={{
            width: '20rem',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            borderRadius: '15px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card.Img
              variant="top"
              src={cucisetrika}
              alt="cucisetrika"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '15px 15px 0 0',
              }}
            />
          </div>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title style={{ fontWeight: 'bold' }}>Cuci Setrika</Card.Title>
            <Button variant="primary" className="btn-lg">
              <Link
                to="/layanan"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Pilih
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default LayananKami