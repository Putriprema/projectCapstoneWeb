import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';  // Import useNavigate
import axios from "axios";

const Bayar = () => {
  // State untuk data yang dibutuhkan
  const [name, setName] = useState('');
  const [order_id, setOrder_id] = useState('');
  const [total, setTotal] = useState('0');
  const [token, setToken] = useState(""); // Added state for token
  const [isNameEditable, setIsNameEditable] = useState(true); // State to control if name is editable
  const [buttonText, setButtonText] = useState('Bayar'); // State for button text

  // Mengambil data dari state yang diteruskan melalui routing
  const location = useLocation();
  const { orderId, subtotal, name: passedName } = location.state || {};
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    if (orderId && subtotal) {
      setOrder_id(orderId);
      setTotal(subtotal);
    }
    if (passedName) {
      setName(passedName);
      setIsNameEditable(false); // Disable editing after name is set
    }
  }, [orderId, subtotal, passedName]);

  const process = async () => {
    const data = {
      name: name,
      order_id: order_id,
      total: total,
    };

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const response = await axios.post("http://localhost:1000/api/payment/process-transaction", data, config);
      setToken(response.data.token); // Save the token received from API
      setButtonText('Menunggu Pembayaran...'); // Change button text while waiting for payment
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: (result) => {
          localStorage.setItem("Pembayaran", JSON.stringify(result));
          setToken(""); // Reset token after successful payment
          setButtonText('Pembayaran Selesai'); // Change button text to "Pembayaran Selesai"
          navigate('/kurir'); // Navigate to the Kurir page after payment is successful
        },
        onPending: (result) => {
          localStorage.setItem("Pembayaran", JSON.stringify(result));
          setToken(""); // Reset token if payment is pending
          setButtonText('Pembayaran Selesai'); // Optionally change the text if payment is pending
          navigate('/kurir'); // Navigate to Kurir page in pending state as well
        },
        onError: (error) => {
          console.log(error);
          setToken(""); // Reset token on error
          setButtonText('Bayar'); // Reset button text on error
        },
        onClose: () => {
          console.log("Anda belum menyelesaikan pembayaran");
          setToken(""); // Reset token if payment is closed without finishing
          setButtonText('Bayar'); // Reset button text
        }
      });

      // Reset fields after payment process
      setName("");
      setOrder_id("");
      setTotal("");
    }
  }, [token, navigate]); // Added navigate to dependencies

  useEffect(() => {
    const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransUrl;

    const midtransClientKey = 'SB-Mid-client-kuKtTg-Qh-z-zA1a';
    scriptTag.setAttribute("data-client-key", midtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        width: '100%', 
        maxWidth: '600px', 
        p: 4, 
        marginLeft: 0, 
        fontSize: '16pt' 
      }}
    >
      {/* Order ID - read-only */}
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

      {/* Total - read-only */}
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

      {/* Nama - editable only when not set */}
      <TextField 
        type="text" 
        label="Nama" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        sx={{ mb: 1.5 }}
        InputProps={{
          readOnly: !isNameEditable,  // Make the field read-only after name is set
        }} 
      />

      {/* Button untuk memproses pembayaran */}
      <Box sx={{ mt: 2 }}>
        <Button 
          onClick={process} 
          variant="contained"
          sx={{ 
            backgroundColor: '#3579F6', 
            border: 'none', 
            padding: '10px 25px',
            '&:hover': {
              backgroundColor: '#255bc3' 
            }
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default Bayar;
