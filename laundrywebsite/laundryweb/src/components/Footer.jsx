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
          <div className='sb_footer_nav hidden md:block'>
          <h1>Navigasi</h1>
          {/* Mengganti tag <a> dengan <Link> untuk navigasi internal */}
          <Link to='/home'>
            <p>Beranda</p>
          </Link>
          <Link to='/informasi'>
            <p>Artikel</p>
          </Link>
          <Link to='/layanan'>
            <p>Layanan</p>
          </Link>
          <Link to='/tentang-kami'>
            <p>Tentang Kami</p>
          </Link>
        </div>
        </div>
        <div className='sb_footer-links_div'>
          <h2>Layanan Kami</h2>
          <div className='sb_footer-links-content'>
            <Link to='/Layanan'>
              <p>Cuci Kering</p>
            </Link>
            <Link to='/Layanan'>
              <p>Cuci Setrika</p>
            </Link>
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
          <div className='headline hidden md:block'>
          <h4>Download aplikasi kami</h4>
        </div>
        <div className='contact-photo hidden md:block' >
          <img src={GooglePlay} alt='Google Play' />
        </div>
        </div>
        </div>
      <hr></hr>
      <div className='sb_footer-below'>
        <div className='flex ml-2 sb_footer-copyright'>
          <p>Copyright@2023LaundryEaseDevTeam</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;