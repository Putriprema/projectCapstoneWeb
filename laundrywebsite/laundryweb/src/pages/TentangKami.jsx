/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../assets/logo.jpeg';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import Services from '../components/Services';
import cuci1 from '../assets/cuci1.png';
import cuci2 from '../assets/cuci2.png';
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import { useEffect } from "react";

const TentangKami = () => {

    // bagian inisialisasi
    useEffect(() =>{
      AOS.init({
        once: true,
        duration : 1000
      }) 
    }, [])

  return (
    <>
      <Navbar />
      <div>
        <h1 data-aos="fade-up" className="font-bold text-2x2" style={{ color: 'black', marginLeft: '7%', marginTop: '5%' }}>
          Laundry Ease
        </h1>
        <div data-aos="fade-up" className='d-flex justify-content-around' style={{ display: 'flex', alignItems: 'center', marginTop: '1%', fontSize: '18pt' }}>
          <p style={{ textAlign: 'justify', marginLeft: '5%', marginRight: '5%', flex: '1',  marginTop:'2%' }}>
          Laundry Ease adalah penyedia layanan laundry terpercaya yang tak hanya menawarkan cuci kering, cuci setrika, dan sebagainya. Melalui platform online yang mudah digunakan, kami tidak hanya mengambil dan membersihkan pakaian Anda dengan efisiensi tinggi, tetapi juga mengantarkannya kembali dengan kehandalan yang tak tertandingi. Dengan fokus pada kenyamanan pelanggan, kami berkomitmen untuk menjadi mitra yang dapat diandalkan dalam merawat pakaian Anda. Dari kebersihan hingga kenyamanan, kami berdedikasi untuk memberikan layanan berkualitas tinggi dengan kepuasan pelanggan sebagai prioritas utama kami. Kami melampaui sekadar mencuci dan menyetrika; kami berkomitmen untuk merawat pakaian Anda sebaik mungkin, memberikan ketenangan pikiran dan waktu luang tambahan untuk menikmati momen-momen penting dalam hidup Anda. Dalam dunia yang sibuk ini, percayakan pada kami untuk merawat pakaian Anda dengan cermat, memberikan hasil terbaik, dan membuat pengalaman laundry Anda lebih dari sekadar tugas rutin, tapi menjadi perawatan yang menyenangkan
          </p>
          <img data-aos="fade-up"
            src={Logo}
            alt="Logo Laundry Ease"
            style={{ width: '500px', height: 'auto', marginRight:'5%'}}
          />
        </div>

        {/* visi misi */}

          {/* Visi*/}
        <div>
          <div data-aos="fade-up" style={{marginRight:'25%'}}>
        <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "10%", marginLeft: '25%', backgroundColor: '#327094', width: '20%', height: '80px' }}>
        <span data-aos="fade-up" style={{ color: 'white', textAlign: 'center',fontSize:'24pt' }}>Visi</span>
          </div>
          </div>
          {/* bagian card kelebihan kami */}
          <div className="d-flex" style={{ marginTop: "3%", marginLeft:'10%' }}>
            <Card data-aos="fade-up"
              style={{
                width: "40rem",
                height: "30rem",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                borderRadius: "20px",
                border: '1px solid black',
                backgroundColor:'#327094'
              }}>
              <div data-aos="fade-up"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}>
              </div>
              <Card.Body style={{ textAlign: "justify", display: 'flex', justifyContent: 'center' }}>
                <Card.Title data-aos="fade-up" style={{ fontWeight: "normal", fontSize:'16pt', marginLeft:'3%', marginRight:'3%', marginTop:'6%',color:'white' }}>
                Menjadi platform terdepan dalam industri laundry, menyediakan solusi yang inovatif, efisien, dan ramah lingkungan untuk memenuhi kebutuhan pelanggan, sambil mendorong pertumbuhan berkelanjutan bagi mitra bisnis kami.kami di Laundry Ease adalah menjadi platform terdepan dalam industri laundry. Kami berkomitmen menyediakan solusi inovatif, efisien, dan ramah lingkungan yang tidak hanya memenuhi kebutuhan pelanggan, tetapi juga memberikan nilai tambah bagi lingkungan sekitar. Dalam upaya kami untuk mencapai tujuan ini, kami tidak hanya berfokus pada pelayanan pelanggan yang superior
                </Card.Title>
              </Card.Body>
            </Card>
            <Card.Img data-aos="fade-left" variant="bottom" src={cuci1} alt="Gambar" style={{ width: '50%', height: '50%' }} />
          </div>

          {/* misi */}
          
          <div data-aos="fade-up" style={{marginLeft:'55%'}}>
        <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "15%", right: '50%', backgroundColor: '#327094', width: '30%', height: '80px' }}>
        <span data-aos="fade-up" style={{ color: 'white', textAlign: 'center',fontSize:'24pt' }}>Misi</span>
          </div>
          </div>
          {/* bagian card misi*/}
          <div className="d-flex" style={{ marginTop: "3%", marginLeft:'10%' }}>
          <Card.Img data-aos="fade-right" variant="bottom" src={cuci2} alt="Gambar" style={{ width: '40%', height: '40%' }} />
            <Card data-aos="fade-up"
              style={{
                width: "40rem",
                height: "30rem",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                borderRadius: "20px",
                border: '1px solid black',
                backgroundColor:'#327094'
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}>
              </div>
              <Card.Body data-aos="fade-up" style={{ textAlign: "justify", display: 'flex', justifyContent: 'center' }}>
                <Card.Title style={{ fontWeight: "normal", fontSize:'16pt', marginLeft:'3%', marginRight:'3%', marginTop:'6%',color:'white' }}>
                Menjadi platform terdepan dalam industri laundry, menyediakan solusi yang inovatif, efisien, dan ramah lingkungan untuk memenuhi kebutuhan pelanggan, sambil mendorong pertumbuhan berkelanjutan bagi mitra bisnis kami.kami di Laundry Ease adalah menjadi platform terdepan dalam industri laundry. Kami berkomitmen menyediakan solusi inovatif, efisien, dan ramah lingkungan yang tidak hanya memenuhi kebutuhan pelanggan, tetapi juga memberikan nilai tambah bagi lingkungan sekitar. Dalam upaya kami untuk mencapai tujuan ini, kami tidak hanya berfokus pada pelayanan pelanggan yang superior
                </Card.Title>
              </Card.Body>
            </Card>
            
          </div>
      {/* akhir dari visi misi */}
          <Services/>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </>
  )
}

export default TentangKami;
