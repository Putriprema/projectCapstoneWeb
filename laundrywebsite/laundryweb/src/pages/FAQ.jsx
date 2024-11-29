/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import { useEffect } from "react";

const FAQ = () => {
   

    useEffect(() =>{
      AOS.init({
        once: true,
        duration : 1000
      }) 
    }, [])

  const [text, setText] = useState('');
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  return (
    <div>
      <Navbar />
      <div data-aos="fade-up" className='Search' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '70px' }}>
        <h1 data-aos="fade-up">Frequently asked questions</h1>
        <div className="form-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Cari..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              width: '1500px',
              height: '50px',
              padding: '10px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              border: 'none',
              outline: 'none',
              borderRadius: '20px',
              marginRight: '10px',
              marginTop: '70px'
            }}
          />
          <Button data-aos="fade-up" className="ml-2 text-white" style={{ marginTop: '70px', width: '50px', height: '50px', backgroundColor: '#327094', transition: 'background-color 0.5s', boxShadow: '2px 2px 4px rgba(1, 1, 1, 1.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ion-icon data-aos="fade-up" name="search-outline" style={{ width: '20px', height: '20px', fontWeight: 'bold', display: 'block' }}></ion-icon>
          </Button>
        </div>
          {/* FAQ 1 */}
          <button data-aos="fade-up"
          onClick={() => setIsOpen1(prev => !prev)}
          className='bg-white p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
          style={{ justifyContent: 'space-between', marginTop:'80px', marginRight:'5%' }}
        >
          Apa itu laundry ease ?
          {!isOpen1 ? (
            <AiOutlineCaretDown className='h-8'/>
          ) : (
            <AiOutlineCaretUp className='h-8' />
          )}
        </button>
        {isOpen1 && (
          <div className='bg-gray-100 p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
          style={{ justifyContent: 'space-between', marginRight:'5%' }}>
            <div>
              <h3 className='ml-1 text-black' style={{fontSize:'14pt'}}>
                Kami menawarkan berbagai jenis layanan, seperti cuci kilat, cuci kiloan, cuci kering, cuci setrika dll.
              </h3>
            </div>
          </div>
        )}

        {/* FAQ 2 */}
        <button data-aos="fade-up"
        onClick={() => setIsOpen2(prev => !prev)}
        className='bg-white p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
        style={{ justifyContent: 'space-between',  marginRight:'5%', marginTop: '20px' }}>
        Layanan laundry apa saja yang ditawarkan laundry ease ?
          {!isOpen2 ? (
            <AiOutlineCaretDown className='h-8'/>
          ) : (
            <AiOutlineCaretUp className='h-8' />
          )}
        </button>
        {isOpen2 && (
          <div className='bg-gray-100 p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
          style={{ justifyContent: 'space-between', marginRight:'5%' }}>
            <div>
              <h3 className='ml-1 text-black' style={{fontSize:'14pt'}}>
             Layanan laundry termasuk pencucian, setrika, dry clean, packing, penyimpanan, antar-jemput, cuci karpet, dan barang pelengkap.
              </h3>
            </div>
          </div>
        )}

         {/* FAQ 3 */}
         <button data-aos="fade-up"
          onClick={() => setIsOpen3(prev => !prev)}
          className='bg-white p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
          style={{ justifyContent: 'space-between', marginTop:'20px', marginRight:'5%' }}
        >
          Sabun apa saja yang biasa digunakan untuk laundry ease ?
          {!isOpen3 ? (
            <AiOutlineCaretDown className='h-8'/>
          ) : (
            <AiOutlineCaretUp className='h-8' />
          )}
        </button>
        {isOpen3 && (
          <div className='bg-gray-100 p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
          style={{ justifyContent: 'space-between', marginRight:'5%' }}>
            <div>
              <h3 className='ml-1 text-black' style={{fontSize:'14pt'}}>
              Deterjen Cair (Liquid Detergent), Deterjen Bubuk (Powder Detergent), Deterjen Tanpa Pewangi (Fragrance-Free Detergent), Deterjen Khusus (Specialty Detergent).
              </h3>
            </div>
          </div>
        )}

         {/* FAQ 4 */}
         <button data-aos="fade-up"
          onClick={() => setIsOpen4(prev => !prev)}
          className='bg-white p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
          style={{ justifyContent: 'space-between', marginTop:'20px', marginRight:'5%' }}
        >
          Bagaimana saya bisa membayar pesanan saya ?
          {!isOpen4 ? (
            <AiOutlineCaretDown className='h-8'/>
          ) : (
            <AiOutlineCaretUp className='h-8' />
          )}
        </button>
        {isOpen4 && (
          <div className='bg-gray-100 p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
          style={{ justifyContent: 'space-between', marginRight:'5%' }}>
            <div>
              <h3 className='ml-1 text-black' style={{fontSize:'14pt'}}>
              Pilih layanan , Keranjang belanja atau Checkout , Rincian Pesanan , Pilih Metode pembayaran , Input Informasi Pembayaran , Konfirmasi Pembayaran , dan Konfirmasi Pesanan.
              </h3>
            </div>
          </div>
        )}

         {/* FAQ 5 */}
         <button data-aos="fade-up"
          onClick={() => setIsOpen5(prev => !prev)}
          className='bg-white p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
          style={{ justifyContent: 'space-between', marginTop:'20px', marginRight:'5%' }}
        >
          Apa sistem informasi yang dapat digunakan untuk mengelola jasa laundry Ease?
          {!isOpen5 ? (
            <AiOutlineCaretDown className='h-8'/>
          ) : (
            <AiOutlineCaretUp className='h-8' />
          )}
        </button>
        {isOpen5 && (
          <div className='bg-gray-100 p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
          style={{ justifyContent: 'space-between', marginRight:'5%' }}>
            <div>
              <h3 className='ml-1 text-black' style={{fontSize:'14pt'}}>
              Sistem informasi berbasis web, seperti Aplikasi web pelayanan jasa laundry, untuk melacak 
              dan manajemen pemesanan, proses cuci, dan pengembalian pakaian.
              </h3>
            </div>
          </div>
        )}

         {/* FAQ 6 */}
         <button data-aos="fade-up"
          onClick={() => setIsOpen6(prev => !prev)}
          className='bg-white p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
          style={{ justifyContent: 'space-between', marginTop:'20px', marginRight:'5%' }}
        >
          Berapa lama proses pembersihan laundry?
          {!isOpen6 ? (
            <AiOutlineCaretDown className='h-8'/>
          ) : (
            <AiOutlineCaretUp className='h-8' />
          )}
        </button>
        {isOpen6 && (
          <div className='bg-gray-100 p-4 w-10/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
          style={{ justifyContent: 'space-between', marginRight:'5%' }}>
            <div>
              <h3 className='ml-1 text-black' style={{fontSize:'14pt'}}>
                Proses pembersihan laundry umumnya berlangsung selama 2-3 jam, tergantung pada tingkat kebersihan yang diminta.
              </h3>
            </div>
          </div>
        )}
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;