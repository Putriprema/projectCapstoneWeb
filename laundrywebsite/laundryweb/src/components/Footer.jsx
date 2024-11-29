/* eslint-disable no-unused-vars */
import React from 'react';
import logo from "../assets/logo.png";
import GooglePlay from '../assets/GooglePlay.png';
import { Link } from 'react-router-dom';
import '../components/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className="logo-container">
            <img src={logo} alt="Logo" /> 
          </div>
          <div className='sb_footer_nav'>
          <h1>Navigasi</h1>
            <a href='/home'><p>Beranda</p></a>
            <a href='/informasi'><p>Artikel</p></a>
            <a href='/layanan'><p>Layanan</p></a>
            <a href='/tentang-kami'><p>Tentang Kami</p></a>
          </div>
        </div>
        <div className='sb_footer-links_div'>
          <h2>Layanan Kami</h2>
          <div className='sb_footer-links-content'>
            <a href='/Layanan'><p>Cuci Kering</p></a>
            <a href='/Layanan'><p>Cuci Setrika</p></a>
            <a href='/Layanan'><p>Cuci Kilat</p></a>
          </div>
        </div>
        <div className='sb_footer-links_divv'>
          <h1>Kontak Kami</h1>
          <div className='sb_footer-links-contentt'>
            <a href='/facebook'><ion-icon name="logo-facebook"></ion-icon></a>
            <a href='/ig'><ion-icon name="logo-instagram"></ion-icon></a>
            <a href='/gmail'><ion-icon name="mail-outline"></ion-icon></a>
            <a href='/wa'><ion-icon name="logo-whatsapp"></ion-icon></a>
          </div>
          <div className='headline'>
          <h4>Download aplikasi kami</h4>
        </div>
        <div className='contact-photo'>
          <img src={GooglePlay} alt='Google Play' />
        </div>
        </div>
        </div>
      <hr></hr>
      <div className='sb_footer-below'>
        <div className='sb_footer-copyright'>
          <p>Copyright@2023LaundryEaseDevTeam</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;