/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const Layanan = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      {/* editing button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className='bg-white p-4 w-11/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'
        style={{ justifyContent: 'space-between' }}
      >
        Apa itu laundry ease ?
        {!isOpen ? (
          <AiOutlineCaretDown className='h-8'/>
        ) : (
          <AiOutlineCaretUp className='h-8' />
        )}
      </button>
      {isOpen && (
        <div className='bg-white p-4 w-11/12 flex ml-20 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white shadow-md'>
          {/* tambahin shadow */}
          <div>
            <h3 className='ml-1 text-black' style={{fontSize:'14pt'}}>
              Kami menawarkan berbagai jenis layanan, seperti cuci kilat, cuci kiloan, cuci kering, cuci setrika dll.
            </h3>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Layanan;
