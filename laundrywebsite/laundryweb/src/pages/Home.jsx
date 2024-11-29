/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home1 from "../components/Home1";
import LayananKami from "../components/LayananKami";
import Promobulan from "../components/Promobulan";
import Slickreview from "../components/Slickreview";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import AOS from 'aos'; //aos link buat animation
import 'aos/dist/aos.css'; //aos link buat animation

const Home = () => {
    const [getNavbarValue, setNavbarValue] = useState("");
  
    useEffect(() => {
      // Kode chat Crisp yang baru
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "d583988c-da94-4e03-a7aa-0d4faea374f3";
      (function () {
        let d = document;
        let s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
      
      // Inisialisasi AOS
      AOS.init({
        once: true,
        duration: 1000
      });
  
    
      setNavbarValue("nilai default"); 
    }, []);
  

    const changeNavbarValue = () => {
      setNavbarValue("profile");
    }

  return (
    <>
      <Navbar navValue={getNavbarValue} />
      <div data-aos="fade-right" id="Home" className="h-auto px-10 lg:px-[200px] flex items-center">
        <div className="h-screen max-w-[700px] flex flex-col justify-center gap-y-5">
          <h1 data-aos="fade-up" className="font-bold text-[20px]" style={{ color: "#4784A8" }} >
            GET BETTER SERVICE
          </h1>
          <h1
            data-aos="fade-up"
            className="font-bold text-5xl transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;"
            style={{ color: "#4784A8" }}>
            Laundry Berkualitas Hidup Tanpa Beban
          </h1>
          <p
            data-aos="fade-up"
            className="text-text max-w-[600px]"
            style={{ fontSize: "14pt", fontWeight: "normal" }}>
            Kami menyediakan layanan pengambilan dan pengantaran laundry secara
            gratis demi mempermudah Anda, dengan jaminan waktu tepat.
          </p>
          <div>
          <button
            data-aos="fade-right"
            className="px-6 lg:px-8 py-3 text-white rounded-full mt-4 bg-blue-600 transition duration-500"
            style={{ backgroundColor: '#3579F6', ':hover': { backgroundColor: '#00FFFF' } }}>
            <Link
              to="/layanan"
              data-aos="fade-up"
              style={{ textDecoration: "none", color: "white" }}>
              Laundry Sekarang
            </Link>
          </button>
          </div>
        </div>
      </div>
      <div>
        <Home1 />
      </div>
      <div>
        <LayananKami />
      </div>
      <div>
        <Promobulan />
      </div>
      <div>
        <Slickreview/>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
};

export default Home;
