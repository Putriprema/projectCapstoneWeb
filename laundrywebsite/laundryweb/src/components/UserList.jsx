/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Navbar3 from "../components/Navbar3";
import Footer from '../components/Footer';
const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar3/>
      <h1 style={{ marginLeft: '20%', marginTop:'5%', fontSize:'20pt' }}>Rekap Transaksi</h1>
      <div className="columns mt-5 is-centered">
        <div className="column is-half" >
          <Link to={`/AddUser`} className="btn btn-success" style={{ marginLeft: '20%', marginBottom:'2%' }}>
            Add New
          </Link>
          <Table striped bordered hover style={{ width: '75%', height: '75%', marginLeft:"20%", marginBottom:'5%'}}>
            <thead>
              <tr>
                <th>No</th>
                <th>Id order</th>
                <th>Nama</th>
                <th>Layanan</th>
                <th>Harga</th>
                <th>Durasi</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.idOrder}</td>
                  <td>{user.name}</td>
                  <td>{user.service}</td>
                  <td>{user.harga}</td>
                  <td>{user.durasi}</td>
                  <td>
                    <Link
                      to={`/EditUser/${user.id}`}
                      className="btn btn-info mr-2"
                    >
                      Edit
                    </Link>
                    <Button
                      variant="danger"
                      size="mr-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default UserList;
