// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import SearchButton from "../components/SearchButton";
import Footer from "../components/Footer";
import { Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import plus from "../assets/plus_circle.png";
import minus from "../assets/minus.png";
import like from "../assets/like.png";
import new_cards from "../data/dataToko";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from 'aos'; //aos link untuk animation
import 'aos/dist/aos.css'; 

const Toko = () => {
  const { url } = useParams();
  const toko = new_cards.find((cards) => cards.url === url);

  const [subtotal, setSubtotal] = useState(0);

  const generateRandomOrderId = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    let randomLetters = "";
    let randomNumbers = "";

    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      randomLetters += letters.charAt(randomIndex);
    }

    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      randomNumbers += numbers.charAt(randomIndex);
    }

    return randomLetters + randomNumbers;
  };

  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const newOrderId = generateRandomOrderId();
    setOrderId(newOrderId);
  }, []);

  const handlePlusClick = (harga) => {
    const newSubtotal = subtotal + harga;
    console.log("New Subtotal:", newSubtotal); 
    setSubtotal(newSubtotal);
  };
   // bagian inisialisasi
   useEffect(() =>{
    AOS.init({
      once: true,
      duration : 1000
    }) 
  }, [])

  return (
    <div>
      <Navbar />
      <div data-aos="fade-up">
      <SearchButton  />
      </div>
      <div data-aos="fade-up" className="mx-20">
        <div 
          style={{
            boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            border: "none",
          }}
          className="flex justify-between mt-10"
        >
          <div  className="flex">
            <div style={{ margin: "10px" }}>
              <img
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                src={toko.image}
                alt="picture"
              />
            </div>
            <div className="flex flex-col justify-between pl-5">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "300px",
                  paddingTop: "10px",
                }}
              >
                <h2>{toko.name}</h2>
                <img className="w-8 h-8" src={like} alt="like" />
              </div>
              <div>
                <p>{toko.locate}</p>
              </div>
              <div className="flex justify-between items-center pb-3">
                <p
                  style={{
                    background: "#D23D3D",
                    color: "white",
                    width: "60px",
                    padding: "6px",
                    borderRadius: "5px",
                    marginLeft: "10px",
                  }}
                >
                  TUTUP
                </p>
                <Link to="/">
                  <Button
                    style={{
                      background: "#D9EAF4",
                      border: "none",
                      color: "black",
                      margin: "0 15px 12px",
                    }}
                  >
                    Info Outlet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "15px 40px",
                }}
              >
                <h4 className="mb-4">Rating Outlet</h4>
                <p>
                  <b>{toko.rate}</b>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "15px 40px",
                }}
              >
                <h4 className="mb-4">Mulai Dari</h4>
                <p>
                  <b>{toko.price}</b>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "15px 40px",
                }}
              >
                <h4 className="mb-4">Transaksi Berhasil</h4>
                <p>
                  <b>{toko.transaction}</b> Transaksi
                </p>
              </div>
            </div>
            <div>
              <h5 className="ml-10 mb-3">
                Layanan Outlet: <span className="ml-5">Kurir Outlet</span>
              </h5>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
            height: "65vh",
          }}
        >
          <div
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              width: "67%",
              height: "33vh",
            }}
          >
            <h3 className="pl-5 pb-5 pt-4">Daftar Layanan</h3>
            <Accordion>
              <Accordion.Item  style={{ border: "none" }} eventKey="0">
                <Accordion.Header
                  style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}
                >
                  <h5>Cuci Kering - 3 jam</h5>
                </Accordion.Header>
                <Accordion.Body
                  style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 3 jam</h5>
                      <p>Rp8.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-8000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(8000)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 4 jam</h5>
                      <p>Rp6.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-6000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(6000)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 6 jam</h5>
                      <p>Rp5.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-5000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(5000)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 24 jam</h5>
                      <p>Rp3.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-3000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(3000)}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ border: "none" }} eventKey="1">
                <Accordion.Header
                  style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}
                >
                  <h5>Cuci Setrika - 3 Hari</h5>
                </Accordion.Header>
                <Accordion.Body
                  style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 3 jam</h5>
                      <p>Rp8.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-8000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(8000)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 4 jam</h5>
                      <p>Rp6.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-6000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(6000)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 6 jam</h5>
                      <p>Rp5.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-5000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(5000)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 24 jam</h5>
                      <p>Rp3.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-3000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(3000)}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ border: "none" }} eventKey="2">
                <Accordion.Header
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                  }}
                >
                  <h5>Cuci Kering - 1 Hari</h5>
                </Accordion.Header>
                <Accordion.Body
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 3 jam</h5>
                      <p>Rp8.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-8000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(8000)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 4 jam</h5>
                      <p>Rp6.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-6000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(6000)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 6 jam</h5>
                      <p>Rp5.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-5000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(5000)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Cuci Kering 24 jam</h5>
                      <p>Rp3.000/kg</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "25px", marginRight: "10px" }}
                        src={minus}
                        alt=""
                        onClick={() => handlePlusClick(-3000)}
                      />
                      <img
                        style={{ width: "25px" }}
                        src={plus}
                        alt=""
                        onClick={() => handlePlusClick(3000)}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div style={{ width: "30%" }}>
            <div
              style={{
                borderRadius: "10px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
                padding: "40px 25px",
                marginBottom: "40px",
              }}
            >
              <div className="flex justify-between items-center pb-4">
                <h3>Layanan Terpilih</h3>
              </div>
              <div className="flex justify-between items-center pb-4">
                <h5>order id</h5>
                <h3>{orderId}</h3>
              </div>
              <div className="flex justify-between items-center pb-4">
                <h5>Sub Total</h5>
                <h3>{`Rp${subtotal}`}</h3>
              </div>
              <div className="flex justify-around">
                <Link to="/SimpanKeranjang" style={{ textDecoration: "none" }}>
                  <Button
                    style={{
                      borderRadius: "15px",
                      color: "black",
                      background: "#D9EAF4",
                      border: "none",
                      padding: "10px 25px",
                    }}
                  >
                    Simpan Keranjang
                  </Button>
                </Link>
                <Link to="/Payment" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      borderRadius: "15px",
                      background: "#3579F6",
                      border: "none",
                      padding: "10px 25px",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  >
                    Lanjutkan
                  </button>
                </Link>
              </div>
            </div>
            <div
              style={{
                borderRadius: "10px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
                padding: "40px 25px",
              }}
            >
              <h3>Promo Outlet</h3>
              <div className="flex justify-center items-center m-5">
                <h4>Belum Ada Promo</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Toko;
