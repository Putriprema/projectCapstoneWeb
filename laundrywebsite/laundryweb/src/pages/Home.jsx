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
        <div
          data-aos="fade-right"
          id="Home"
          className="h-auto px-10 lg:px-[100px] flex items-center"
          style={{ paddingLeft: "50px" }} // Tambahan padding agar lebih ke kiri
        >
          <div className="h-screen max-w-[600px] flex flex-col justify-center gap-y-4">
            <h1
              data-aos="fade-up"
              className="font-bold text-[16px]" // Ukuran font lebih kecil
              style={{ color: "#4784A8" }}
            >
              GET BETTER SERVICE
            </h1>
            <h1
              data-aos="fade-up"
              className="font-bold text-4xl" // Ukuran font lebih kecil dari sebelumnya
              style={{
                color: "#4784A8",
                lineHeight: "1.4", // Tambahkan line-height agar lebih rapi
              }}
            >
              Laundry Berkualitas Hidup Tanpa Beban
            </h1>
            <p
              data-aos="fade-up"
              className="text-text max-w-[500px]" // Batas maksimal lebar lebih kecil
              style={{
                fontSize: "12pt", // Ukuran font lebih kecil
                fontWeight: "normal",
                textAlign: "justify", // Menambahkan justify untuk kesan rapi
              }}
            >
              Kami menyediakan layanan pengambilan dan pengantaran laundry secara
              gratis demi mempermudah Anda, dengan jaminan waktu tepat.
            </p>
            <div>
              <button
                data-aos="fade-right"
                className="px-6 lg:px-8 py-2 text-white rounded-full mt-4 transition duration-500"
                style={{
                  backgroundColor: "#3579F6",
                  fontSize: "14pt", // Ukuran font tombol
                }}
              >
                <Link
                  to="/layanan"
                  data-aos="fade-up"
                  style={{ textDecoration: "none", color: "white" }}
                >
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
      <div className="pt-10">
        <Footer />
      </div>
    </>
  );
};

export default Home;
