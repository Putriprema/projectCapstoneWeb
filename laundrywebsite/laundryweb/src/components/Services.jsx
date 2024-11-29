/* eslint-disable no-unused-vars */
import React from 'react';
import logo from "../assets/logo.jpeg";
import AOS from 'aos'; // aos link untuk animation
import 'aos/dist/aos.css'; // aos link untuk animation
import { useEffect } from "react";

function Services() { 

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000
    }); 
  }, []);

  return (
    <>
      {/* baris ke 1 */}
      <section data-aos="fade-up" className='section-white' style={{ marginTop: '5%' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
