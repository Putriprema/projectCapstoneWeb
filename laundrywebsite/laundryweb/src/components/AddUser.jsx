import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom"; // to get location.state
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; // Import UUID

const AddUser = () => {
  const location = useLocation(); // Access location to get state
  const { orderId, subtotal } = location.state || {}; // Destructure orderId and subtotal if they exist

  // State initialization
  const [name, setName] = useState("");
  const [order_id, setOrder_id] = useState(orderId || ""); // default to orderId from location.state
  const [total, setTotal] = useState(subtotal || ""); // default to subtotal from location.state
  const [transactionDate, setTransactionDate] = useState("");
  const [orderTime, setOrderTime] = useState(""); 
  const [estimatedCompletionTime, setEstimatedCompletionTime] = useState(""); 
  const [courier, setCourier] = useState(""); 
  const [address, setAddress] = useState(""); 
  const [statusMessage, setStatusMessage] = useState(""); // Add status message for feedback

  const navigate = useNavigate();

  // Handle form submission
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

    // Debug: print the data you're about to send
    console.log(data);

    try {
      const response = await axios.post("http://localhost:2000/users", data);
      console.log("Response from server:", response.data); // Debug: check server response
      setStatusMessage("Data berhasil disimpan!");
      navigate("/"); // Redirect after successful submit
    } catch (error) {
      console.error("Error details:", error.response ? error.response.data : error.message); // Debug error
      setStatusMessage("Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '190vh', p: 4, marginBottom: '5%', fontSize: '16pt' }}>
      <form onSubmit={saveUser}>
        <TextField
          type="text"
          label="Order ID"
          value={order_id}
          onChange={(e) => setOrder_id(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          type="number"
          label="Total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          sx={{ mb: 2 }}
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
        />
        <TextField
          type="text"
          label="Tanggal transaksi"
          value={transactionDate}
          onChange={(e) => setTransactionDate(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          type="text"
          label="Jam Pemesanan"
          value={orderTime}
          onChange={(e) => setOrderTime(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          type="text"
          label="Waktu Perkiraan Laundry Selesai"
          value={estimatedCompletionTime}
          onChange={(e) => setEstimatedCompletionTime(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Typography sx={{ color: '#3D3BF3', marginTop: '8px' }}>
          Estimasi selesai selama 5 sampai 7 jam pengerjaan
        </Typography>

        {statusMessage && (
          <Typography sx={{ color: statusMessage.includes("berhasil") ? "green" : "red", marginTop: '10px' }}>
            {statusMessage}
          </Typography>
        )}

        <Box sx={{ display: 'flex', mt: 2 }}>
          <Button
            type="submit"
            style={{ background: "#399918", border: "none", padding: "10px 25px" }}
          >
            Simpan Data
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddUser;
