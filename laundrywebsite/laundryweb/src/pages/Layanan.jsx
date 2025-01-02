/* eslint-disable no-unused-vars */
// EROR MIDTRANS DISINI
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards'
import new_cards from '../data/dataToko';
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Layanan = () => {


    useEffect(() =>{
      AOS.init({
        once: true,
        duration : 1000
      }) 
    }, [])

    return (
      <div>
        <Navbar />
        <h1
          data-aos="fade-up"
          className="text-center"
          style={{ marginTop: "3%", color: "black", fontSize: "18pt", fontWeight: "bold" }}
        >
          Layanan Laundry yang Tersedia
        </h1>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-y-12 pt-12"
          style={{ padding: "0 5%" }}
        >
          {new_cards.map((cards) => (
            <Link
              key={cards.id}
              style={{ textDecoration: "none", width: "100%" }}
              to={`/Toko/${cards.url}`}
            >
              <div
                className="shadow-lg rounded-lg transition-transform transform hover:scale-105"
                style={{
                  width: "300px",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                {/* Bagian Gambar */}
                <div style={{ backgroundColor: "#327094", padding: "20px" }}>
                  <img
                    src={cards.image}
                    alt={cards.name}
                    style={{
                      width: "60%",
                      height: "auto",
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                </div>
    
                {/* Bagian Informasi */}
                <div style={{ padding: "15px" }}>
                  <h2 style={{ fontWeight: "bold", fontSize: "16pt", margin: "10px 0", color: "black" }}>
                    {cards.name}
                  </h2>
                  <p style={{ fontSize: "12pt", color: "black", marginBottom: "10px" }}>
                    {cards.locate}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "13pt",
                      marginTop: "15px",
                      color: "black",
                    }}
                  >
                    <div>
                      <p style={{ fontWeight: "bold", color: "black" }}>Harga Mulai</p>
                      <p style={{ color: "green" }}>{cards.price}</p>
                    </div>
                    <div>
                      <p style={{ fontWeight: "bold", color: "black" }}>Transaksi</p>
                      <p style={{ color: "black" }}>{cards.transaction}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: "10px", textAlign: "right" }}>
                    <p style={{ fontSize: "12pt", color: "black" }}>
                      ⭐ {cards.rate}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="pt-12">
          <Footer />
        </div>
      </div>
    );        
};

export default Layanan;