/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import vector_2 from '../assets/vector_mitra_2.png'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Signupmitra() {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Form className='flex flex-col justify-center items-center w-1/2'>
          <div className='flex justify-start w-3/4 mb-20'>
            <h2>Lengkapi Data Diri</h2>
          </div>
          <Form.Group style={{marginBottom: '12px', width: '75%'}} controlId="formBasicName">
          <Form.Label>Nama Lengkap Pemilik (Owner)</Form.Label>
            <Form.Control style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}} type="text" placeholder="Nama Lengkap" />
          </Form.Group>
          <Form.Group className="mt-4 mb-2 w-3/4" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}} type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mt-4 mb-2 w-3/4" controlId="formBasicNumber">
            <Form.Label>No. Telephone</Form.Label>
            <Form.Control style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}} type="number" placeholder="No. Telephone" />
          </Form.Group>
          <Form.Group className="mt-4 mb-2 w-3/4" controlId="formBasicPassword">
            <Form.Label>Buat Kata Sandi</Form.Label>
            <Form.Control style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}} type="password" placeholder="Kata Sandi" />
          </Form.Group>
          <Form.Group className="mt-4 mb-2 w-3/4" controlId="formBasicPassword">
            <Form.Label>Ulangi Kata Sandi</Form.Label>
            <Form.Control style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}} type="password" placeholder="Konfirmasi Kata Sandi" />
          </Form.Group>
          <Form.Group className="mt-4 mb-2 w-3/4" controlId="formBasicCode">
            <Form.Label>Kode Affiliate (Jika Ada)</Form.Label>
            <Form.Control style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}} type="email" placeholder="Kode Affiliate" />
          </Form.Group>
          <Form.Group className="flex mb-5 w-3/4" controlId="formBasicCheck">
            <Form.Check type="checkbox" label="Saya setuju dengan syarat Dan Ketentuan serta kebijakan privasi" />
          </Form.Group>
          <Form.Group>
            <Link to='/Login-mitra'><Button style={{padding: '8px 35px', borderRadius: '13px', boxShadow: '1px 3px 4px grey', marginBottom: '20px'}} variant="primary" type="submit">
              Daftar
            </Button></Link>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <p>Sudah Punya Akun? <Link style={{textDecoration: 'none'}} to="/Login-mitra"><span style={{color: 'black'}}>Masuk</span></Link></p>
          </Form.Group>
        </Form>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', height: '130vh'}} >
          <img src={vector_2} alt="image" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signupmitra;