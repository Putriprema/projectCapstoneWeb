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
  const [selectedServices, setSelectedServices] = useState([]);
  const [orderId, setOrderId] = useState("");

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

  useEffect(() => {
    const newOrderId = generateRandomOrderId();
    setOrderId(newOrderId);
  }, []);
  
  
  const handleServiceSelection = (serviceName, price) => {
    const quantity = parseInt(prompt("Berapa banyak pakaian?"), 10);
    if (quantity > 0) {
      setSelectedServices((prev) => {
        const existingService = prev.find(item => item.name === serviceName);
        if (existingService) {
          const updatedServices = prev.map(item =>
            item.name === serviceName
              ? { ...item, quantity: item.quantity + quantity, totalPrice: (item.quantity + quantity) * item.price }
              : item
          );
          // Update subtotal
          const newSubtotal = updatedServices.reduce((acc, curr) => acc + curr.totalPrice, 0);
          setSubtotal(newSubtotal);
          return updatedServices;
        } else {
          const newService = { name: serviceName, price, quantity, totalPrice: quantity * price };
          const updatedServices = [...prev, newService];
          // Update subtotal
          const newSubtotal = updatedServices.reduce((acc, curr) => acc + curr.totalPrice, 0);
          setSubtotal(newSubtotal);
          return updatedServices;
        }
      });
    }
  };
  
  const handleServiceDecrease = (serviceName) => {
    setSelectedServices((prev) => {
      const updatedServices = prev.map(item => {
        if (item.name === serviceName && item.quantity > 0) {
          const updatedService = {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: (item.quantity - 1) * item.price
          };
          return updatedService;
        }
        return item;
      }).filter(item => item.quantity > 0); // Filter out items with 0 quantity
      // Update subtotal
      const newSubtotal = updatedServices.reduce((acc, curr) => acc + curr.totalPrice, 0);
      setSubtotal(newSubtotal);
      return updatedServices;
    });
  };
  
  // Fungsi untuk mereset data
  const resetData = () => {
    setLayananDipilih([]); // Reset layanan yang dipilih
    // Tambahkan reset lainnya jika perlu
  };  

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div data-aos="fade-up">
        <SearchButton />
      </div>
      <div data-aos="fade-up" className="mx-20">
        <div style={{ boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.2)", borderRadius: "10px", border: "none" }} className="flex justify-between mt-10">
          <div className="flex">
            <div style={{ margin: "10px" }}>
              <img style={{ width: "150px", height: "150px", objectFit: "cover" }} src={toko.image} alt="picture" />
            </div>
            <div className="flex flex-col justify-between pl-5">
              <div style={{ display: "flex", justifyContent: "space-between", width: "300px", paddingTop: "10px" }}>
                <h2>{toko.name}</h2>
                <img className="w-8 h-8" src={like} alt="like" />
              </div>
              <div><p>{toko.locate}</p></div>
              <div className="flex justify-between items-center pb-3">
                <p style={{ background: "#D23D3D", color: "white", width: "60px", padding: "6px", borderRadius: "5px", marginLeft: "10px" }}>TUTUP</p>
                <Link to="/">
                  <Button style={{ background: "#D9EAF4", border: "none", color: "black", margin: "0 15px 12px" }}>Info Outlet</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px 40px" }}>
                <h4 className="mb-4">Rating Outlet</h4>
                <p><b>{toko.rate}</b></p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px 40px" }}>
                <h4 className="mb-4">Mulai Dari</h4>
                <p><b>{toko.price}</b></p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px 40px" }}>
                <h4 className="mb-4">Transaksi Berhasil</h4>
                <p><b>{toko.transaction}</b> Transaksi</p>
              </div>
            </div>
            <div>
              <h5 className="ml-10 mb-3">Layanan Outlet <span className="ml-5"></span></h5>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px", height: "200vh" }}>
          <div style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)", borderRadius: "10px", width: "67%", height: "33vh" }}>
          <Accordion>
             {/* Daftar Layanan */}
          </Accordion>
            <h3 className="pl-5 pb-5 pt-4">Daftar Layanan</h3>
            <Accordion>

               {/* Cuci Kering */}
               <Accordion.Item style={{ border: "none" }}>
                <Accordion.Header style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}>
                  <h5>Cuci Kering</h5>
                </Accordion.Header>
                <Accordion.Body style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}>
                <div className="flex justify-between items-center">
                <div>
                  <h5>Kemeja</h5>
                  <p>Rp2.000/pcs</p>
                </div>
                <button 
                onClick={() => handleServiceSelection('Kemeja (Cuci Kering)', 2000)} 
                style={{ marginLeft: "10px" }}
              >
                <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
              </button>
              <button 
                onClick={() => handleServiceDecrease('Kemeja (Cuci Kering)')} 
                style={{ marginLeft: "10px" }}
              >
                <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
              </button>
              </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Baju kaos</h5>
                      <p>Rp1.500/pcs</p>
                    </div>
                    <button 
                onClick={() => handleServiceSelection('Baju kaos (Cuci Kering)', 1500)} 
                style={{ marginLeft: "10px" }}
              >
                <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
              </button>
              <button 
                onClick={() => handleServiceDecrease('Baju kaos (Cuci Kering)')} 
                style={{ marginLeft: "10px" }}
              >
                <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
              </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Celana</h5>
                      <p>Rp2.000/pcs</p>
                    </div>
                    <button 
                onClick={() => handleServiceSelection('Celana Kain (Cuci Kering)', 2000)} 
                style={{ marginLeft: "10px" }}
              >
                <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
              </button>
              <button 
                onClick={() => handleServiceDecrease('Celana Kain (Cuci Kering)')} 
                style={{ marginLeft: "10px" }}
              >
                <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
              </button>
              </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ border: "none" }} eventKey="1">
              <Accordion.Header style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}>
                 {/* Cuci Setrika */}
                 <h5>Cuci Setrika</h5>
                </Accordion.Header>
                <Accordion.Body style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Kemeja</h5>
                      <p>Rp2.000/pcs</p>
                    </div>
                    <button 
                onClick={() => handleServiceSelection('Kemeja (Cuci Setrika)', 2000)} 
                style={{ marginLeft: "10px" }}
              >
                <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
              </button>
              <button 
                onClick={() => handleServiceDecrease('Kemeja (Cuci Setrika)')} 
                style={{ marginLeft: "10px" }}
              >
                <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
              </button>
              </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Baju kaos</h5>
                      <p>Rp1.500/pcs</p>
                    </div>
                    <button 
                onClick={() => handleServiceSelection('Baju Kaos (Cuci Setrika)', 1500)} 
                style={{ marginLeft: "10px" }}
              >
                <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
              </button>
              <button 
                onClick={() => handleServiceDecrease('Baju Kaos (Cuci Setrika)')} 
                style={{ marginLeft: "10px" }}
              >
                <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
              </button>
              </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h5>Celana</h5>
                      <p>Rp2.000/pcs</p>
                    </div>
                    <button 
                onClick={() => handleServiceSelection('Celana/Rok Kain (Cuci Setrika)', 2000)} 
                style={{ marginLeft: "10px" }}
              >
                <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
              </button>
              <button 
                onClick={() => handleServiceDecrease('Celana/Rok Kain (Cuci Setrika)')} 
                style={{ marginLeft: "10px" }}
              >
                <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
              </button>
              </div>
                </Accordion.Body>
              </Accordion.Item>
              
</Accordion> 
            </div> 
            <div style={{ width: "30%" }}>
  <div style={{ borderRadius: "10px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)", padding: "40px 25px", marginBottom: "40px" }}>
    <div className="flex justify-between items-center pb-4">
      <h3>Layanan Terpilih</h3>
    </div>
    <div className="flex justify-between items-center pb-4">
      <h5>Kode Order</h5>
      <h3>{orderId}</h3>
    </div>
    <div className="flex justify-between items-center pb-4">
      <h5>Pakaian Terpilih</h5>
      <div>
        {selectedServices.map((service, index) => (
          <div key={index}>
            <p>
              {service.name} ({service.quantity} pcs) + Rp{service.price} x {service.quantity} = Rp{service.totalPrice}
              <button
                onClick={() => handleServiceDecrease(service.name)}
                style={{ marginLeft: "10px", color: "red" }}
              >
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-between items-center pb-4">
      <h5>Sub Total</h5>
      <h3>{`Rp${subtotal}`}</h3>
    </div>
            <div className="flex justify-around">
             
              <Link to="/Payment" style={{ textDecoration: "none" }} state={{ orderId, subtotal }}>
                <button style={{ borderRadius: "15px", background: "#3579F6", border: "none", padding: "10px 25px", cursor: "pointer", color: "#fff" }}>Pesan</button>
              </Link>
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