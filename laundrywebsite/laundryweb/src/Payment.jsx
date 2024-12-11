import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { v4 as uuidv4 } from 'uuid'; // Import UUID

const Payment = () => {
  const location = useLocation(); // Get the passed state data
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { orderId, subtotal } = location.state || {}; // Destructure the orderId and subtotal

  const [name, setName] = useState("");
  const [order_id, setOrder_id] = useState(orderId || "");
  const [total, setTotal] = useState(subtotal || "");
  const [token, setToken] = useState("");

  const [transactionDate, setTransactionDate] = useState("");
  const [orderTime, setOrderTime] = useState("");
  const [estimatedCompletionTime, setEstimatedCompletionTime] = useState("");
  const [courier, setCourier] = useState("");
  const [address, setAddress] = useState("");

  const [statusMessage, setStatusMessage] = useState(""); // State for status message
  const [isDataSaved, setIsDataSaved] = useState(false); // State untuk memantau apakah data telah disimpan

  const selectRandomCourier = () => {
    const couriers = ["udin siap!", "agus siap!", "riski siap!"];
    const randomCourier = couriers[Math.floor(Math.random() * couriers.length)];
    setCourier(randomCourier);
  };

  useEffect(() => {
    const currentDate = new Date(); // Ambil tanggal dan waktu dari perangkat
    setTransactionDate(currentDate.toLocaleDateString("id-ID")); // Format tanggal dalam bentuk lokal Indonesia
    
    const currentTime = currentDate.toLocaleTimeString("id-ID"); // Format waktu
    setOrderTime(currentTime);
  
    const estimatedTime = new Date();
    estimatedTime.setHours(estimatedTime.getHours() + 5); // Tambahkan 5 jam untuk estimasi waktu selesai
    setEstimatedCompletionTime(estimatedTime.toLocaleTimeString("id-ID")); // Format waktu perkiraan selesai
  
    selectRandomCourier(); // Pilih kurir secara acak
  }, []);

  const saveUser = async (e) => {
    e.preventDefault();

    // Generate unique ID
    const userId = uuidv4(); // Generate a unique ID

    // Prepare the data with generated userId
    const data = {
      id: userId, // Automatically generated ID
      order_id,
      name,
      total,
      courier,
      address,
      transactionDate,
      orderTime,
      estimatedCompletionTime,
    };

    try {
      const response = await axios.post("http://localhost:2000/users", data);
      console.log("Response from server:", response.data); // Cek respons dari server
      setStatusMessage("Data berhasil disimpan!"); // Pesan sukses
      setIsDataSaved(true); // Tandai bahwa data telah disimpan
    } catch (error) {
      console.error("Error details:", error.response ? error.response.data : error.message); // Debug error
      setStatusMessage("Terjadi kesalahan, coba lagi."); // Pesan error
      setIsDataSaved(false); // Tandai bahwa data belum disimpan
    }
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
      <div data-aos="fade-up">
        <h3 style={{ marginLeft: '35px', marginTop: '16px' }}>
          Silahkan Mengisi data dengan benar terlebih dahulu
        </h3>
        <Box
          sx={{
            padding: '20px', // Padding di sekitar form
            margin: 'auto', // Tengah kan form di layar
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Tambahkan shadow untuk tampilan
            borderRadius: '8px', // Membuat sudut form melengkung
            backgroundColor: '#f9f9f9', // Memberikan background warna pada form
          }}
        >
          <form onSubmit={saveUser} style={{ width: '60%', display: 'flex', flexDirection: 'column' }}>
            <TextField
              type="text"
              label="Order ID"
              value={order_id}
              onChange={(e) => setOrder_id(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{ readOnly: true }}
            />
            <TextField
              type="number"
              label="Total"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{ readOnly: true }}
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
              InputProps={{ readOnly: true }}
            />
            <TextField
              type="text"
              label="Tanggal transaksi"
              value={transactionDate}
              onChange={(e) => setTransactionDate(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{ readOnly: true }}
            />
            <TextField
              type="text"
              label="Jam Pemesanan"
              value={orderTime}
              onChange={(e) => setOrderTime(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{ readOnly: true }}
            />
            <TextField
              type="text"
              label="Waktu Perkiraan Laundry Selesai"
              value={estimatedCompletionTime}
              onChange={(e) => setEstimatedCompletionTime(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{ readOnly: true }}
            />
            <Typography sx={{ color: '#3D3BF3', marginTop: '8px' }}>
              Estimasi selesai selama 5 sampai 7 jam pengerjaan
            </Typography>

            {statusMessage && (
              <Typography
                sx={{
                  color: statusMessage.includes('berhasil') ? 'green' : 'red',
                  marginTop: '10px',
                }}
              >
                {statusMessage}
              </Typography>
            )}

            <Box sx={{ display: 'flex', mt: 2 }}>
              <Button
                type="submit"
                style={{ background: '#399918', border: 'none', padding: '10px 25px' }}
              >
                Simpan Data
              </Button>

              <Button
                onClick={() =>
                  navigate('/bayar', { state: { orderId, subtotal, name } })
                }
                style={{
                  background: isDataSaved ? '#0A5EB0' : '#CCCCCC',
                  border: 'none',
                  padding: '10px 25px',
                  marginLeft: '25px',
                  pointerEvents: isDataSaved ? 'auto' : 'none',
                }}
              >
                Proses Pembayaran
              </Button>
            </Box>
          </form>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
