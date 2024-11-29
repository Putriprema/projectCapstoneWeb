/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import AOS from "aos"; //aos link untuk animation
import "aos/dist/aos.css"; //aos link untuk animation
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Loginoption = () => {
  const zoomInButton = (e) => {
    e.target.style.transform = "scale(1.1)";
  };

  const zoomOutButton = (e) => {
    e.target.style.transform = "scale(1)";
  };

 
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        data-aos="fade-up"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10vh",
        }}
      >
        <div
          data-aos="fade-up"
          style={{
            color: "black",
            backgroundColor: "#D9EAF4",
            width: "50vw",
            height: "70vh",
            borderRadius: "10%",
            boxShadow: "0px 4px 8px rgba(0.3, 0.3, 0.3, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            data-aos="fade-up"
            style={{
              fontSize: "18pt",
              position: "absolute",
              top: "10%",
              marginLeft: "180%",
              transform: "translateX(-50%)",
              width: "100%",
            }}
          >
            Masuk Sebagai
          </span>

          {/* pelanggan */}
          <div data-aos="zoom-in">
            <Link to="/regis-pelanggan"><Button
              variant="outline-info"
              className="ml-2 text-white"
              data-aos="zoom-in"
              style={{
                marginBottom: "20px", 
                backgroundColor: "#3579F6",
                width: "600px",
                height: "100px",
                borderRadius: "20px",
                transition: "background-color 0.3s",
                overflow: "hidden",
                position: "relative",
                fontSize: "18pt",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#3579F6";
                zoomInButton(e);
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#00BEFF";
                zoomOutButton(e);
              }}
            >
              Pelanggan
            </Button></Link>
          </div>

          {/* mitra */}
          <div data-aos="zoom-in">
            <Link to='/regis-mitra'><Button
              className="ml-2 text-white"
              variant="outline-warning"
              style={{
                marginTop: "10%",
                backgroundColor: "#B31312",
                width: "600px",
                height: "100px",
                borderRadius: "20px",
                transition: "background-color 0.3s",
                position: "relative",
                fontSize: "18pt",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#F96030";
                zoomInButton(e);
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#B31312";
                zoomOutButton(e);
              }}
            >
              Mitra
            </Button></Link>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
};

export default Loginoption;