/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards'
import SearchButton from '../components/SearchButton'
import new_cards from '../data/dataToko';
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Layanan = () => {


    useEffect(() =>{
      AOS.init({
        once: true,
        duration : 1000
      }) 
    }, [])

  return (
    <div>
      <Navbar />
      <SearchButton data-aos="fade-up"/>
      <h1 data-aos="fade-up" className="text-center" style={{ marginTop: "5%", color: 'black', fontSize: '24pt', fontWeight: 'bold' }}>Layanan Laundry yang Tersedia</h1>
      <div data-aos="fade-up" className='grid grid-cols-3 place-items-center gap-y-14 pt-20'>
          {new_cards.map(cards => (
            // eslint-disable-next-line react/jsx-key
            <Link style={{textDecoration: 'none'}} to={`/Toko/${cards.url}`}><Cards data-aos="fade-up"
              key={cards.id}
              image={cards.image}
              name={cards.name}
              locate={cards.locate}
              price={cards.price}
              transaction={cards.transaction}
              rate={cards.rate}
            /></Link>
          ))}
        </div>
        <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Layanan;