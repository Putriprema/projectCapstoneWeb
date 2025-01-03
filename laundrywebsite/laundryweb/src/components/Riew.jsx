/* eslint-disable no-unused-vars */
import React from "react";
import Card from "react-bootstrap/Card";
import Larasati from "../assets/Larasati.png";
import Rangga from "../assets/rangga.png";
import Sarah from "../assets/sarah.png";
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import { useEffect } from "react";

const Riew = () => {
     useEffect(() =>{
      AOS.init({
        once: true,
        duration : 1000
      }) 
    }, [])

    return (
      <div>
        <h1
          data-aos="fade-up"
          className="text-center font-bold"
          style={{
            color: "black",
            fontSize: "pt",
            fontWeight: "bold",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          Review Pelanggan Kami
        </h1>
        <div data-aos="fade-up" className="d-flex justify-content-around flex-wrap">
          {/* Review 1 */}
          <Card
            data-aos="fade-up"
            style={{
              backgroundColor: "#D9EAF4",
              width: "16rem",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              borderRadius: "15px",
              margin: "20px 10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <Card.Img
                variant="top"
                src={Larasati}
                alt="larasati"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title style={{ fontWeight: "bold", fontSize: "12pt" }}>Larasati</Card.Title>
              <Card.Text style={{ fontSize: "9pt" }}>
                Aplikasi laundry ini bener-bener nyelamatkan hidupku, tinggal pilih
                layanan, jemput, dan hasilnya bersih banget!
              </Card.Text>
            </Card.Body>
          </Card>
    
          {/* Review 2 */}
          <Card
            data-aos="fade-up"
            style={{
              backgroundColor: "#D9EAF4",
              width: "16rem",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              borderRadius: "15px",
              margin: "20px 10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <Card.Img
                variant="top"
                src={Rangga}
                alt="rangga"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title style={{ fontWeight: "bold", fontSize: "12pt" }}>Rangga</Card.Title>
              <Card.Text style={{ fontSize: "9pt" }}>
                Puas banget pake aplikasi laundry ini, cepet, simpel, dan harganya
                juga oke. No more ribet cari tempat cuci!
              </Card.Text>
            </Card.Body>
          </Card>
    
          {/* Review 3 */}
          <Card
            data-aos="fade-up"
            style={{
              backgroundColor: "#D9EAF4",
              width: "16rem",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              borderRadius: "15px",
              margin: "20px 10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <Card.Img
                variant="top"
                src={Sarah}
                alt="sarah"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title style={{ fontWeight: "bold", fontSize: "12pt" }}>Sarah</Card.Title>
              <Card.Text style={{ fontSize: "9pt" }}>
                Layanan pelanggan laundry ramah banget, selalu siap bantu. Pakaian
                ku juga selalu wangi dan rapi setiap kali diantar kembali.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );    
};

export default Riew;
