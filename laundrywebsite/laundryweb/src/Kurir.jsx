import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk navigasi
import kurirGif from './assets/kurir.gif'; // Ganti dengan path gif yang sesuai

const Kurir = () => {
  const navigate = useNavigate(); // Inisialisasi hook navigasi

  return (
    <div 
      style={{
        display: 'flex',             // Gunakan flexbox untuk layout
        justifyContent: 'center',    // Pusatkan secara horizontal
        alignItems: 'center',        // Pusatkan secara vertikal
        height: '100vh',             // Tinggi penuh viewport
        textAlign: 'center',         // Teks rata tengah
        flexDirection: 'column',     // Konten ditumpuk secara vertikal
      }}
    >
      {/* Tampilkan gif */}
      <img 
        src={kurirGif} // Menggunakan gif kurir yang diimport
        alt="Kurir Sedang Mengantar"
        style={{ width: '800px', height: 'auto', marginBottom: '20px' }}
      />
      
      {/* Tampilkan teks di bawah gif */}
      <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Kurir sedang bersiap dan berangkat menjemput pakaian Anda 
      </p>

      {/* Tambahkan tombol untuk kembali ke halaman toko/den-gebol */}
      <button
        onClick={() => navigate('/toko/den-gebol')} // Navigasi ke path toko/den-gebol
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#0A5EB0',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Kembali
      </button>
    </div>
  );
};

export default Kurir;
