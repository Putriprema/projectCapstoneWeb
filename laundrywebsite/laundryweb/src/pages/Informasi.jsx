/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from '../data/Bloginfo';
import './Informasi.css';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import Promobulan from '../components/Promobulan'; 
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import { useEffect } from "react";

function Informasi() {
    // bagian inisialisasi
    useEffect(() =>{
      AOS.init({
        once: true,
        duration : 1000
      }) 
    }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 
  return (
    <>
      <Navbar/>
      <div data-aos="fade-up" className='Headline' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '70px' }}>
        <h1 style={{ fontWeight: 'bold', fontSize:'24pt' }}>Temukan Informasi Yang Anda Cari Seputar Laundry</h1>
      </div>
      <div data-aos="fade-up"className='App'>
      <Slider  {...settings}>
  {dataDigitalBestSeller.map((item) => (
    <div className='card' key={item.id}>
      <div className='card-top'>
        <img src={item.Img} alt={item.title}/>
        <h1>{item.title}</h1>
      </div>
      <div className='card-bottom'>
        <h3>{item.capt}</h3>
        <Link to={`/Artikel/${item.slug}`}>{item.category}</Link>
      </div>
    </div>
  ))}
</Slider>

      <Promobulan/>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
}

export default Informasi;
