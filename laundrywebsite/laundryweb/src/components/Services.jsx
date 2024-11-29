/* eslint-disable no-unused-vars */
import React from 'react';
// import '../components/Service.css'; 
import logo from "../assets/logo.jpeg";
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import { useEffect } from "react";

function Services() { 


   useEffect(() =>{
    AOS.init({
      once: true,
      duration : 1000
    }) 
  }, [])

  return (
    <>
    {/* baris ke 1 */}
    <section data-aos="fade-up" className='section-white' style={{ marginTop: '5%' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2 data-aos="fade-up" className='section-title'style={{fontSize:'27pt',fontWeight:'bold'}} >
             Anggota Tim Kami
            </h2>
            <p data-aos="fade-up" className='section-subtitle'style={{ marginTop: '3%', fontSize:'16pt' }}>
            Tim LaundryEasey, tim bersemangat yang bertekad untuk menghadirkan layanan laundry yang terjangkau, handal, dan nyaman bagi pelanggan kami.
            Setiap anggota tim kami berdedikasi untuk memberikan layanan yang berkualitas tinggi dan memastikan setiap pakaian Anda dirawat dengan baik.
            </p>
          </div>
          {/* ridho */}
          <div data-aos="fade-up"  className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img src={ridho} className='item-img' alt="pict" />
            <h3 data-aos="fade-up"> Ridho</h3>
            <div className='team-info'>
              <p data-aos="fade-up">  Hustler</p>
              <p data-aos="fade-up">Bertanggung jawab untuk mengembangkan Laundryease dan Berkolaborasi dengan tim untuk memperbaiki atau mengembangkan produk dan layanan yang lebih baik sesuai dengan kebutuhan pasar</p>
              <ul className='team-icon'>
                  <li><a href='#' data-aos="fade-up" className='ig'><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/_neonea_/?hl=id' data-aos="fade-up" className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-email'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>

          {/* wanda */}
          <div data-aos="fade-up" className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img src={wanda} className='item-img' alt="pict" />
            <h3 data-aos="fade-up">Wanda</h3>
            <div className='team-info'>
              <p data-aos="fade-up">Hipster</p>
              <p data-aos="fade-up">Berkontribusi pada pengembangan produk laundryease yang unik dan menarik bagi pasar, membangun identitas merek , mencakup desain, estetika, dan fokus pada pengalaman pengguna yang inovatif</p>
              <ul className='team-icon'>
                  <li><a href='#' className='ig' data-aos="fade-up"><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/wndty__/' data-aos="fade-up" className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-email'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>

          {/* farida */}
          <div data-aos="fade-up" className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img  src={farida} className='item-img' alt="pict" />
            <h3 data-aos="fade-up">Farida</h3>
            <div className='team-info'>
              <p data-aos="fade-up">Hispter</p>
              <p data-aos="fade-up">Berkontribusi pada pengembangan produk laundryease yang unik dan menarik bagi pasar, membangun identitas merek , mencakup desain, estetika, dan fokus pada pengalaman pengguna yang inovatif.</p>
              <ul className='team-icon'>
                  <li><a href='#' className='ig'><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/anisa27616' className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* baris ke 2 */}
    <section data-aos="fade-up" className='section-white'>
      <div className='container'>
        <div className='row'>
          {/* kurniawan */}
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img src={kurniawan} className='item-img' alt="pict" />
            <h3 data-aos="fade-up">Kurniawan</h3>
            <div className='team-info'>
              <p data-aos="fade-up">Hacker</p>
              <p data-aos="fade-up">Berkontribusi dalam pengembangan perangkat lunak, termasuk mengidentifikasi bug, menyusun kode, dan mengevaluasi keamanan sistem.
              Memastikan perlindungan data pengguna dengan menerapkan enkripsi yang kuat untuk data sensitif
              </p>
              <ul className='team-icon'>
                  <li><a href='#' className='ig'><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/wann.monn/' className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-email'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>

          {/* Putri */}
          <div data-aos="fade-up" className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img src={putri} className='item-img' alt="pict" />
            <h3 data-aos="fade-up">Putri</h3>
            <div className='team-info'>
              <p data-aos="fade-up">Hacker</p>
              <p data-aos="fade-up">Berkontribusi dalam pengembangan perangkat lunak, termasuk mengidentifikasi bug, menyusun kode, dan mengevaluasi keamanan sistem.
              Memastikan perlindungan data pengguna dengan menerapkan enkripsi yang kuat untuk data sensitif
              </p>
              <ul className='team-icon'>
                  <li><a href='' className='ig'><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-email'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/putriwirawaan/' className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>

          {/* Arif */}
          <div data-aos="fade-up" className='col-sm-6 col-md-4'>
            <div className='team-item'>
            <img src={arif} className='item-img' alt="pict" />
            <h3 data-aos="fade-up">Arif</h3>
            <div className='team-info'>
              <p data-aos="fade-up" >Hacker</p>
              <p data-aos="fade-up">Berkontribusi dalam pengembangan perangkat lunak, termasuk mengidentifikasi bug, menyusun kode, dan mengevaluasi keamanan sistem.
              Memastikan perlindungan data pengguna dengan menerapkan enkripsi yang kuat untuk data sensitif</p>
              <ul className='team-icon'>
                  <li><a href='#' className='ig'><ion-icon name="mail-outline"></ion-icon>
                  <i className='fa fa-email'></i>
                  </a></li>
                  <li><a href='https://www.instagram.com/muhammad._arif_/' className='email'><ion-icon name="logo-instagram"></ion-icon>
                  <i className='fa fa-ig'></i>
                  </a></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Services; 
