/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import informasi1 from '../assets/informasi1.png'; 

const Artikel1 = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="font-bold text-2x2" style={{ color: 'black', marginLeft: '5%', marginTop: '5%' }}>
          Tips Perawatan Sepatu Tahan Lama
        </h1>
        <h1 style={{ fontSize: '16pt', color: 'black', marginLeft: '5%', marginTop: '2%' }}>
          08 November 2023
        </h1>
        <img
          src={informasi1}
          alt="sepatu"
          className="text-center flex justify-center items-center"
          style={{ width: '60%', height: 'auto', margin: '0 auto', display: 'block', borderRadius:'20px', marginTop:'5%' }}/>
          <div className='mx-auto max-w-screen-2xl' style={{ textAlign: 'justify', marginTop:'5%', fontSize:'18pt'}}>
              <p>Buat kamu pecinta sneakers dan suka menggunakan sepatu dalam aktivitas sehari-hari, pasti kamu ingin sepatu kamu tetap awet untuk dipakai. Namun, beberapa kebiasaan yang kita tidak sadari justru bisa membuat sepatu kita mengalami kerusakan yang cukup parah, seperti warna yang mulai pudar, kerusakan pada midsole sepatu, bahkan sampai jamuran. Makanya, sebelum semua koleksi sepatu kesayangan kamu rusak, sebaiknya kamu mulai memikirkan cara-cara untuk merawat sepatu kamu, biar awet dan warnanya tidak cepat pudar. Yuk, simak  tips ini.</p>
              <p>1. Jangan salah penyimpanan</p>
              <p>Salah satu penyebab utama sepatu kamu tidak awet dan warnanya cepat memudar adalah karena penyimpanan yang tidak benar. Hindari menyimpan sepatu dengan cara menumpuknya secara asal tanpa menggunakan rak atau kotak. Jangan lupa juga untuk menyimpan sepatu pada suhu ruangan yang stabil dan pastinya dalam keadaan yang bersih.</p>
              <p>2. Hindari menjemur sepatu di bawah matahari secara langsung</p>
              <p>Jika sepatu kamu berada dalam keadaan yang basah, hindari menjemurnya secara langsung di bawah sinar matahari. Sinar matahari akan menyebabkan pemudaran warna pada sepatu semakin cepat. Gak cuma itu saja, bahan dari sepatu kamu juga akan lebih cepat rusak, lho. Jadi mulai sekarang ketika ingin mengeringkan sepatu, cukup diangin-anginkan saja ya. Kamu juga bisa mengeringkannya dengan menggunakan kipas angin atau hair dryer bersuhu rendah.</p>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel1;
