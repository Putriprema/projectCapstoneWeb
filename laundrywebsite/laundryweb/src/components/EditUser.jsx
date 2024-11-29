/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar3 from "../components/Navbar3";
import Footer from '../components/Footer';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const EditUser = () => {
  const [idOrder, setIdOrder] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [harga, setHarga] = useState("");
  const [durasi, setDurasi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, [id]);

  const UpdateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:4000/users/${id}`, {
        idOrder,
        name,
        service,
        harga,
        durasi,
      });
      navigate("/UserList");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/users/${id}`);
      if (response.data && response.data.idOrder !== null) {
        setIdOrder(response.data.idOrder);
        setName(response.data.name);
        setService(response.data.service);
        setHarga(response.data.harga);
        setDurasi(response.data.durasi);
      } 
    } catch (error) {
      console.error("Error fetching user data:", error);
      //perbaikan
    }
  };

  return (
    <>
      <Navbar3/>
      <h1 style={{ marginLeft: '20%', marginTop:'5%', fontSize:'20pt' }}>Rekap Transaksi</h1>
      <div className="columns mt-5 is-centered">
      <div className="column is-half" style={{ width: '70%', height: '50%', marginLeft:"20%" }}>
          <form onSubmit={UpdateUser}>
            <FloatingLabel controlId="idOrder" label="Id Order">
              <Form.Control
                type="text"
                className="input"
                value={idOrder}
                onChange={(e) => setIdOrder(e.target.value)}
                placeholder="Id Order"
                style={{ marginTop: '3%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}
              />
            </FloatingLabel>
            <FloatingLabel controlId="name" label="Nama">
              <Form.Control
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama"
                style={{ marginTop: '3%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}
              />
            </FloatingLabel>
            <FloatingLabel controlId="service" label="Layanan">
              <Form.Select
                value={service}
                onChange={(e) => setService(e.target.value)}
                style={{ marginTop: '3%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}
              >
                <option value="Cuci Kering">Cuci Kering</option>
                <option value="Cuci Setrika">Cuci Setrika</option>
                <option value="Cuci Kilat">Cuci Kilat</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="harga" label="Harga">
              <Form.Control
                type="text"
                className="input"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                placeholder="Harga"
                style={{ marginTop: '3%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}
              />
            </FloatingLabel>
            <FloatingLabel controlId="durasi" label="Durasi">
              <Form.Control
                type="text"
                className="input"
                value={durasi}
                onChange={(e) => setDurasi(e.target.value)}
                placeholder="Durasi"
                style={{ marginTop: '3%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}
              />
            </FloatingLabel>
            <Button type="submit" variant="success" style={{ width:'15vh', marginBottom:'3%', marginTop:'3%'}}>Update</Button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};


export default EditUser;
