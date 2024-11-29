 /* eslint-disable no-unused-vars */
 import React, { useState }from 'react'
 import {Box, TextField} from '@mui/material'
 import { Button } from 'react-bootstrap';
 import axios from 'axios'
 import Navbar from './components/Navbar';
 import Footer from './components/Footer';
 import { useEffect } from 'react';
 import AOS from 'aos'; //aos link untuk animation
 import 'aos/dist/aos.css'; 

 const Payment = () => {
     const [name, setName] = useState("");
     const [order_id, setOrder_id] = useState("");
     const [total, setTotal] = useState();
     const [token, setToken] = useState("")
 
 
     const process = async () => {
         const data = {
             name: name,
             order_id: order_id,
             total: total
         }
         
         const config = {
             Headers: {
               "Content-Type" : "application/json"
             }
           }
     
           const response = await axios.post(
             "http://localhost:1000/api/payment/process-transaction", 
             data, 
             config
             );
     
           setToken(response.data.token);
           
    
   };
 
   useEffect(() => {
     if(token){
         window.snap.pay(token, {
             onSuccess: (result) => {
                 localStorage.setItem("Pembayaran", JSON.stringify(result))
                 setToken("")
             },
             onPending: (result) => {
                 localStorage.setItem("Pembayaran", JSON.stringify(result))
                 setToken("");
             },
             onError: (error) => {
                 console.log(error)
                 setToken("");
             },
             onClose: () => {
                 console.log("Anda belum menyelesaikan pembayaran")
                 setToken("");
             }
         })
 
         setName("")
         setOrder_id("")
         setTotal("")
     }
   },[token])
 
   useEffect(() =>{
     const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js"
 
     let scriptTag = document.createElement("script")
     scriptTag.src = midtransUrl
 
     const midtransClientKey = 'SB-Mid-client-T-ym424AVDAr3dAm';
     scriptTag.setAttribute("data-client-key", midtransClientKey)
 
     document.body.appendChild(scriptTag)
 
     return () => {
         document.body.removeChild(scriptTag)
     }
   }, [])
 
   // bagian inisialisasi
   useEffect(() =>{
    AOS.init({
      once: true,
      duration : 1000
    }) 
  }, [])
 

   return (
     <>
     <Navbar/>
     <div data-aos="fade-up">
     <Box sx={{display: 'flex', flexDirection:'column', height:'100vh', width: '190vh', p: 4, marginBottom:'5%', fontSize:'16pt' }}>Silahkan di isi sesuai data pembayaran
     <TextField type="text" label='nama' value={name} onChange={(e) => setName(e.target.value)} sx={{mb: 2}}/>
     <TextField type="text" label="order ID"  value={order_id} onChange={(e) => setOrder_id(e.target.value)} sx={{mb: 2}}/>
     <TextField type="number" label='Total' value={total} onChange={(e) => setTotal(e.target.value)}  />
     <Box>
         <Button onClick={process} style={{ marginTop:'2%', background: "#3579F6", border: "none", padding: "10px 25px"}}>Proses</Button>
         </Box>
     </Box>
     <Footer/>
     </div>
     </>
   )
 }
 
 
 export default Payment
 