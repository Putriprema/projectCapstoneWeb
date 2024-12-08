import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from 'axios'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Payment = () => {
  const location = useLocation(); // Get the passed state data
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { orderId, subtotal } = location.state || {}; // Destructure the orderId and subtotal

  // State untuk data yang dibutuhkan
  const [name, setName] = useState("");
  const [order_id, setOrder_id] = useState(orderId || ""); // Set default value from state
  const [total, setTotal] = useState(subtotal || ""); // Set default value from state
  const [token, setToken] = useState("");
  
  // State untuk tanggal transaksi, waktu pesanan, dan perkiraan waktu selesai
  const [transactionDate, setTransactionDate] = useState("");
  const [orderTime, setOrderTime] = useState(""); // Order time
  const [estimatedCompletionTime, setEstimatedCompletionTime] = useState(""); // Estimated completion time
  const [courier, setCourier] = useState(""); // State for the courier name
  const [address, setAddress] = useState(""); // State for the address

  // Fungsi untuk memilih kurir secara acak
  const selectRandomCourier = () => {
    const couriers = ["udin siap!", "agus siap!", "riski siap!"];
    const randomCourier = couriers[Math.floor(Math.random() * couriers.length)];
    setCourier(randomCourier); // Set the selected courier name
  };

  // Set tanggal saat ini, waktu pesanan, dan perkiraan waktu selesai ketika komponen pertama kali dipasang
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString(); // Format current date
    const currentTime = new Date().toLocaleTimeString(); // Get current time
    setTransactionDate(currentDate); // Set the transaction date
    setOrderTime(currentTime); // Set the current time as order time

    // Hitung perkiraan waktu selesai (Tambah 7 jam)
    const estimatedTime = new Date();
    estimatedTime.setHours(estimatedTime.getHours() + 7);
    setEstimatedCompletionTime(estimatedTime.toLocaleTimeString()); // Set estimated completion time

    selectRandomCourier(); // Pilih kurir secara acak saat komponen pertama kali dipasang
  }, []);

  // Fungsi untuk memproses pembayaran
  const process = async () => {
    const data = {
      name: name,
      order_id: order_id,
      total: total,
      transaction_date: transactionDate, // Include the transaction date in the data
      order_time: orderTime, // Include the order time in the data
      estimated_completion_time: estimatedCompletionTime, // Include the estimated completion time
      address: address, // Include the address in the data
      courier: courier // Include the courier name in the data
    }

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {
      // Mengirim data ke server
      const response = await axios.post(
        "http://localhost:5173/api/payment/process-transaction", 
        data, 
        config
      );
      setToken(response.data.token); // Menyimpan token pembayaran yang diterima dari server
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  // Inisialisasi Midtrans dan pengaturan pembayaran ketika token tersedia
  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: (result) => {
          localStorage.setItem("Pembayaran", JSON.stringify(result));
          setToken(""); // Reset token setelah pembayaran berhasil
        },
        onPending: (result) => {
          localStorage.setItem("Pembayaran", JSON.stringify(result));
          setToken(""); // Reset token jika pembayaran masih pending
        },
        onError: (error) => {
          console.log(error);
          setToken(""); // Reset token jika terjadi kesalahan
        },
        onClose: () => {
          console.log("Anda belum menyelesaikan pembayaran");
          setToken(""); // Reset token jika pembayaran ditutup tanpa selesai
        }
      });

      // Reset form setelah token diproses
      setName("");
      setOrder_id("");
      setTotal("");
    }
  }, [token]);

  // Menambahkan skrip Midtrans ke halaman
  useEffect(() => {
    const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransUrl;

    const midtransClientKey = 'SB-Mid-client-kuKtTg-Qh-z-zA1a';
    scriptTag.setAttribute("data-client-key", midtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag); // Menghapus skrip saat komponen dibersihkan
    };
  }, []);

  // Inisialisasi AOS (Animation on Scroll)
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000
    });
  }, []);

  return (
    <>
      <Navbar />
      <div data-aos="fade-up">
        <h3 style={{ marginLeft: '35px' ,marginTop: '16px' }}>Silahkan Mengisi data dengan benar terlebih dahulu</h3>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '190vh', p: 4, marginBottom: '5%', fontSize: '16pt' }}>

          <TextField 
            type="text" 
            label="Order ID" 
            value={order_id} 
            onChange={(e) => setOrder_id(e.target.value)}
            sx={{ mb: 2 }} 
            InputProps={{
              readOnly: true,  // Make the field read-only
            }}
          />

          <TextField 
            type="number" 
            label="Total" 
            value={total} 
            onChange={(e) => setTotal(e.target.value)}
            sx={{ mb: 2 }} 
            InputProps={{
              readOnly: true,  // Make the field read-only
            }}
          />
          
          <TextField 
            type="text" 
            label="Nama" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            sx={{ mb: 1.5 }} 
          />
          
          <TextField 
            type="text" 
            label="Alamat atau link gmaps" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            sx={{ mb: 2 }} 
          />

          <TextField 
            type="text" 
            label="Kurir yang tersedia" 
            value={courier} 
            onChange={(e) => setCourier(e.target.value)} 
            sx={{ mb: 2 }} 
            InputProps={{
              readOnly: true, 
            }}
          />

          <TextField 
            type="text" 
            label="Tanggal transaksi" 
            value={transactionDate}  
            sx={{ mb: 2 }} 
            InputProps={{
              readOnly: true, 
            }}
          />

          <TextField 
            type="text" 
            label="Jam Pemesanan" 
            value={orderTime}  
            sx={{ mb: 2 }} 
            InputProps={{
              readOnly: true, 
            }}
          />

          <TextField 
            type="text" 
            label="Waktu Perkiraan Laundry Selesai" 
            value={estimatedCompletionTime}  
            sx={{ mb: 2 }} 
            InputProps={{
              readOnly: true, 
            }}
          />

          <Typography sx={{ color: 'red', marginTop: '8px' }}>
            Estimasi selesai selama 5 sampai 7 jam pengerjaan
          </Typography>
          
          <Box>
            {/* Button to navigate to bayar3.jsx */}
            <Button
  onClick={() => navigate('/bayar', { state: { orderId, subtotal, name } })} // Kirim data ke halaman Bayar
  style={{ marginTop: '2%', background: "#FF5722", border: "none", padding: "10px 25px" }}>
   Proses Pembayaran
</Button>

          </Box>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
