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
                <h2 style={{ fontSize: '1rem', margin: '0', color: 'black' }}>{toko.name}</h2>
                <img className="w-8 h-8" src={like} alt="like" />
              </div>
              <div><p style={{ fontSize: '0.875rem', margin: '5px 0' }}>{toko.locate}</p></div>
              <div className="flex justify-between items-center pb-3">
                <p style={{ background: "#D23D3D", color: "white", width: "60px", padding: "6px", borderRadius: "5px", marginLeft: "10px", fontSize: '0.875rem' }}>TUTUP</p>
                <Link to="/">
                  <Button style={{ background: "#D9EAF4", border: "none", color: "black", margin: "0 15px 12px", fontSize: '0.875rem' }}>Info Outlet</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px 40px" }}>
                <h4 className="mb-4" style={{ fontSize: '1rem' }}>Rating Outlet</h4>
                <p style={{ fontSize: '1rem' }}><b>{toko.rate}</b></p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px 40px" }}>
                <h4 className="mb-4" style={{ fontSize: '1rem' }}>Mulai Dari</h4>
                <p style={{ fontSize: '1rem' }}><b>{toko.price}</b></p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px 40px" }}>
                <h4 className="mb-4" style={{ fontSize: '1rem' }}>Transaksi Berhasil</h4>
                <p style={{ fontSize: '1rem' }}><b>{toko.transaction}</b> Transaksi</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px", height: "200vh" }}>
          <div style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)", borderRadius: "10px", width: "67%", height: "33vh" }}>
      
      
    {/* Cuci Kering */}
    <div>
        <h5 className="ml-10 mb-3" style={{ fontSize: '2rem' }}>Layanan Outlet <span className="ml-5"></span></h5>
      </div>
<Accordion style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)", width: "100%", margin: "20px 0" }}>
  <Accordion.Header>
    <h5 style={{ margin: "10px 0", color: "black" }}>Cuci Kering</h5>
  </Accordion.Header>
  <div style={{ padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
    {/* Item 1: Kemeja */}
    <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <div className="flex justify-between items-center" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h5 style={{ margin: "0", color: "black" }}>Kemeja</h5>
          <p style={{ margin: "5px 0", color: "green", fontSize: "12pt" }}>Rp2.000/pcs</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button 
            onClick={() => handleServiceSelection('Kemeja (Cuci Kering)', 2000)}
            style={{
              marginLeft: "10px",
              backgroundColor: "#2B6CB0",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
          </button>
          <button 
            onClick={() => handleServiceDecrease('Kemeja (Cuci Kering)')} 
            style={{
              marginLeft: "10px",
              backgroundColor: "#E53E3E",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
          </button>
        </div>
      </div>
    </div>

    {/* Item 2: Baju Kaos */}
    <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <div className="flex justify-between items-center" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h5 style={{ margin: "0", color: "black" }}>Baju Kaos</h5>
          <p style={{ margin: "5px 0", color: "green", fontSize: "12pt" }}>Rp1.500/pcs</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button 
            onClick={() => handleServiceSelection('Baju Kaos (Cuci Kering)', 1500)} 
            style={{
              marginLeft: "10px",
              backgroundColor: "#2B6CB0",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
          </button>
          <button 
            onClick={() => handleServiceDecrease('Baju Kaos (Cuci Kering)')} 
            style={{
              marginLeft: "10px",
              backgroundColor: "#E53E3E",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
          </button>
        </div>
      </div>
    </div>

    {/* Item 3: Celana */}
    <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <div className="flex justify-between items-center" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h5 style={{ margin: "0", color: "black" }}>Celana</h5>
          <p style={{ margin: "5px 0", color: "green", fontSize: "12pt" }}>Rp2.000/pcs</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button 
            onClick={() => handleServiceSelection('Celana Kain (Cuci Kering)', 2000)} 
            style={{
              marginLeft: "10px",
              backgroundColor: "#2B6CB0",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
          </button>
          <button 
            onClick={() => handleServiceDecrease('Celana Kain (Cuci Kering)')} 
            style={{
              marginLeft: "10px",
              backgroundColor: "#E53E3E",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
          </button>
        </div>
      </div>
    </div>
  </div>
</Accordion>


{/* Cuci Setrika */}
<Accordion style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)", width: "100%", margin: "20px 0" }}>
  <Accordion.Header>
    <h5 style={{ margin: "10px 0", color: "black" }}>Cuci Setrika</h5>
  </Accordion.Header>
  <div style={{ padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
    {/* Item 1: Kemeja */}
    <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <div className="flex justify-between items-center" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h5 style={{ margin: "0", color: "black" }}>Kemeja</h5>
          <p style={{ margin: "5px 0", color: "green", fontSize: "12pt" }}>Rp2.000/pcs</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button 
            onClick={() => handleServiceSelection('Kemeja (Cuci Setrika)', 2000)} 
            style={{
              marginLeft: "10px",
              backgroundColor: "#2B6CB0",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
          </button>
          <button 
            onClick={() => handleServiceDecrease('Kemeja (Cuci Setrika)')} 
            style={{
              marginLeft: "10px",
              backgroundColor: "#E53E3E",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
          </button>
        </div>
      </div>
    </div>

    {/* Item 2: Baju Kaos */}
    <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <div className="flex justify-between items-center" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h5 style={{ margin: "0", color: "black" }}>Baju Kaos</h5>
          <p style={{ margin: "5px 0", color: "green", fontSize: "12pt" }}>Rp1.500/pcs</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button 
            onClick={() => handleServiceSelection('Baju Kaos (Cuci Setrika)', 1500)} 
            style={{
              marginLeft: "10px",
              backgroundColor: "#2B6CB0",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
          </button>
          <button 
            onClick={() => handleServiceDecrease('Baju Kaos (Cuci Setrika)')} 
            style={{
              marginLeft: "10px",
              backgroundColor: "#E53E3E",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
          </button>
        </div>
      </div>
    </div>

    {/* Item 3: Celana */}
    <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <div className="flex justify-between items-center" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h5 style={{ margin: "0", color: "black" }}>Celana</h5>
          <p style={{ margin: "5px 0", color: "green", fontSize: "12pt" }}>Rp2.000/pcs</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button 
            onClick={() => handleServiceSelection('Celana/Rok Kain (Cuci Setrika)', 2000)} 
            style={{
              marginLeft: "10px",
              backgroundColor: "#2B6CB0",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={plus} alt="plus" style={{ width: "15px", height: "15px" }} />
          </button>
          <button 
            onClick={() => handleServiceDecrease('Celana/Rok Kain (Cuci Setrika)')} 
            style={{
              marginLeft: "10px",
              backgroundColor: "#E53E3E",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            <img src={minus} alt="minus" style={{ width: "15px", height: "15px" }} />
          </button>
        </div>
      </div>
    </div>
  </div>
</Accordion>
</div> 

<div style={{ width: "50%", margin: "0 auto" }}>
  <div
    style={{
      borderRadius: "10px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      padding: "10px 20px",
      marginBottom: "30px",
      backgroundColor: "#fff",
    }}
  >
    <div className="flex justify-between items-center pb-4">
      <h3 style={{ fontSize: "1.25rem" }}>Layanan Terpilih</h3>
    </div>
    <div className="flex justify-between items-center pb-4">
      <h5 style={{ fontSize: "1rem", fontWeight: "600" }}>Kode Order</h5>
      <h3 style={{ fontSize: "1.2rem", color: "#3579F6" }}>{orderId}</h3>
    </div>
    <div className="flex justify-between items-center pb-4">
      <h5 style={{ fontSize: "1rem", fontWeight: "600" }}>Pakaian Terpilih</h5>
      <div>
        {selectedServices.map((service, index) => (
          <div key={index}>
            <p style={{ fontSize: "1rem", marginBottom: "8px" }}>
              {service.name} ({service.quantity} pcs) + Rp{service.price} x {service.quantity} = Rp{service.totalPrice}
              <button
                onClick={() => handleServiceDecrease(service.name)}
                style={{
                  marginLeft: "10px",
                  color: "red",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                -  
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-between items-center pb-4">
      <h5 style={{ fontSize: "1rem", fontWeight: "600" }}>Sub Total</h5>
      <h3 style={{ fontSize: "1.2rem", color: "#3579F6" }}>{`Rp${subtotal}`}</h3>
    </div>
    <div className="flex justify-center">
      <Link to="/Payment" style={{ textDecoration: "none" }} state={{ orderId, subtotal }}>
        <button
          style={{
            borderRadius: "15px",
            background: "#3579F6",
            border: "none",
            padding: "12px 30px",
            cursor: "pointer",
            color: "#fff",
            fontSize: "1rem",
          }}
        >
                  Pesan
                </button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="pt-1">
        <Footer />
      </div>
    </div>
  );
};

export default Toko;