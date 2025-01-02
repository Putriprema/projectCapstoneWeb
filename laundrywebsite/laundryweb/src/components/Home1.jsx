// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "react-bootstrap/Card";
import fitur1 from "../assets/fitur1.png";
import fitur2 from "../assets/fitur2.png";
import fitur3 from "../assets/fitur3.png";
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; //aos link untuk animation
import { useEffect } from "react";

const Home1 = () => {

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
        className="text-center"
        style={{
          marginTop: "5%", // Kurangi margin untuk menghindari efek terlalu besar
          color: "black",
          fontSize: "20px", // Ukuran font lebih kecil agar proporsional
          fontWeight: "bold",
        }}
      >
        Alasan mengapa memilih kami
      </h1>
      <p
        data-aos="fade-up"
        className="text-center"
        style={{
          marginTop: "1%",
          fontSize: "14px", // Ukuran font lebih kecil
          fontWeight: "normal",
          maxWidth: "700px", // Batas lebar teks agar tidak melebar
          margin: "1% auto", // Posisi tengah dengan margin auto
        }}
      >
        Penyedia jasa laundry yang telah teruji dan terpercaya, memastikan kualitas layanan yang dijamin untuk setiap pengguna.
      </p>
      {/* Bagian card kelebihan kami */}
      <div
        data-aos="fade-up"
        className="d-flex justify-content-around flex-wrap" // Tambahkan flex-wrap untuk responsif
        style={{
          marginTop: "3%", // Kurangi jarak
          gap: "20px", // Beri jarak antar kartu
        }}
      >
        {/* layanan 1 */}
        <Card
          data-aos="fade-up"
          style={{
            width: "16rem", // Ukuran kartu lebih kecil
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "15px", // Kurangi radius agar lebih halus
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px", // Margin lebih kecil
            }}
          >
            <Card.Img
              variant="top"
              src={fitur1}
              alt="Fitur1"
              style={{
                width: "180px", // Ukuran gambar lebih kecil
                height: "180px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </div>
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "14px" }}>
              Fitur Kemudahan Penggunaan
            </Card.Title>
            <Card.Text style={{ fontSize: "12px" }}>
              Platform kami di desain untuk memudahkan pengguna dalam melakukan
              pemesanan, pembayaran, secara efisien.
            </Card.Text>
          </Card.Body>
        </Card>
  
        {/* layanan 2 */}
        <Card
          data-aos="fade-up"
          style={{
            width: "16rem",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "15px",
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
              src={fitur2}
              alt="Fitur2"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </div>
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "14px" }}>
              Pilihan Fleksibilitas
            </Card.Title>
            <Card.Text style={{ fontSize: "12px" }}>
              Menyediakan beragam opsi layanan laundry, termasuk jenis layanan,
              waktu pengantaran, dan pilihan pembayaran yang dapat disesuaikan
              dengan kebutuhan pengguna.
            </Card.Text>
          </Card.Body>
        </Card>
  
        {/* layanan 3 */}
        <Card
          data-aos="fade-up"
          style={{
            width: "16rem",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "15px",
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
              src={fitur3}
              alt="Fitur3"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </div>
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ fontWeight: "bold", fontSize: "14px" }}>
              Penyedia Laundry Anda yang Terpercaya
            </Card.Title>
            <Card.Text style={{ fontSize: "12px" }}>
              Jasa laundry yang telah teruji dan terpercaya, memastikan kualitas
              layanan yang dijamin untuk setiap pengguna.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
  export default Home1;
  