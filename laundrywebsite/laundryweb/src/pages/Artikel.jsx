/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import informasi1 from '../assets/informasi1.png'; 
import { dataDigitalBestSeller } from '../data/Bloginfo';

const Artikel = () => {
  const { slug } = useParams();
  const article = dataDigitalBestSeller.find(article => article.slug === slug);

  return (
    <>
      <Navbar />
      <div>
        <h1 className="font-bold text-2x2" style={{ color: 'black', marginLeft: '5%', marginTop: '5%' }}>
          { article.title }
        </h1>
        <h1 style={{ fontSize: '16pt', color: 'black', marginLeft: '5%', marginTop: '2%' }}>
          { article.tanggal }
        </h1>
        <img
          src={ article.Img }
          alt="sepatu"
          className="text-center flex justify-center items-center"
          style={{ width: '60%', height: 'auto', margin: '0 auto', display: 'block', borderRadius:'20px', marginTop:'5%' }}/>
          <div className='mx-auto max-w-screen-2xl' style={{ textAlign: 'justify', marginTop:'5%', fontSize:'18pt'}}>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
      </div>
      <div className='pt-20'>
      <Footer />
      </div>
    </>
  );
};

export default Artikel;
