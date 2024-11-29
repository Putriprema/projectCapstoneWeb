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
     <h1 data-aos="fade-up" className="text-center flex justify-center items-center" style={{ marginTop: "10%", color: 'black', fontSize: '24pt', fontWeight: 'bold' }}>Alasan mengapa memilih kami</h1>
     <p data-aos="fade-up" className="text-center flex justify-center items-center" style={{ marginTop: "1%", fontSize: '16pt', fontWeight: 'normal'}}>Kami bekerja sama dengan penyedia jasa laundry yang telah teruji dan terpercaya, memastikan kualitas layanan yang dijamin untuk setiap pengguna</p>
      {/* bagian card kelebihan kami */}
      <div data-aos="fade-up"
        className="d-flex justify-content-around"
        style={{ marginTop: "5%" }}>
        {/* layanan 1 */}
        <Card data-aos="fade-up"
          style={{
            width: "18rem",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "20px",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}>
            <Card.Img
              variant="top"
              src={fitur1}
              alt="Fitur1"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "20px",
              }}/>
          </div>
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ fontWeight: "bold" }}>
              Fitur Kemudahan Penggunaan
            </Card.Title>
            <Card.Text>
              Platform kami di desain untuk memudahkan pengguna dalam melakukan
              pemesanan, pembayaran, serta melacak status laundry secara efisien
              dan cepat.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* kelebihan 2 */}
        <Card data-aos="fade-up"
          style={{
            width: "18rem",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "20px",
            margin: "0 10px",
          }}>
          {" "}
          {/* editing margin disini */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}>
            <Card.Img
              variant="top"
              src={fitur2}
              alt="Fitur1"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "20px",
              }}/>
          </div>
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ fontWeight: "bold" }}>
              Pilihan Fleksibilitas
            </Card.Title>
            <Card.Text>
              Menyediakan beragam opsi layanan laundry, termasuk jenis layanan,
              waktu pengantaran, dan pilihan pembayaran yang dapat disesuaikan
              dengan kebutuhan pengguna.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* kelebihan 3 */}
        <Card data-aos="fade-up"
          style={{
            width: "18rem",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "20px",
            margin: "0 10px",
          }}>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}>
            <Card.Img
              variant="top"
              src={fitur3}
              alt="Fitur1"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "20px",
              }}/>
          </div>
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ fontWeight: "bold" }}>
              Kemitraan dengan Penyedia Laundry Terpercaya
            </Card.Title>
            <Card.Text>
              Kami bekerja sama dengan penyedia jasa laundry yang telah teruji
              dan terpercaya, memastikan kualitas layanan yang dijamin untuk
              setiap pengguna.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home1;
