import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";

const UserList = () => {
  const [users, setUsers] = useState([]); // Memperbaiki setUser menjadi setUsers

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:2000/users");
      setUsers(response.data); // Memperbarui state dengan data dari API
    } catch (error) {
      console.error("Error fetching users:", error); // Menangani error pengambilan data
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/users/${id}`); // Perbaiki URL delete dengan backticks
      getUsers(); // Memanggil getUsers untuk mendapatkan data terbaru setelah delete
    } catch (error) {
      console.error("Error deleting user:", error); // Menangani error saat menghapus data
    }
  };

  return (
    <>
      <Navbar3 />
      <div
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          paddingTop: "100px",
        }}
      >
        <div className="d-flex justify-content-center">
          <div className="w-75">
            <Table striped bordered hover>
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-center">No</th>
                  <th className="text-center">ID</th>
                  <th className="text-center">Order ID</th>
                  <th className="text-center">Nama</th>
                  <th className="text-center">Alamat</th>
                  <th className="text-center">Total</th>
                  <th className="text-center">Kurir</th>
                  <th className="text-center">Tanggal Transaksi</th>
                  <th className="text-center">Waktu Mulai Laundry</th>
                  <th className="text-center">Waktu Selesai Laundry</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{user.id}</td>
                    <td className="text-center">{user.order_id}</td>
                    <td className="text-center">{user.name}</td>
                    <td className="text-center">{user.address}</td>
                    <td className="text-center">{user.total}</td>
                    <td className="text-center">{user.courier}</td>
                    <td className="text-center">{user.transactionDate}</td>
                    <td className="text-center">{user.orderTime}</td>
                    <td className="text-center">{user.estimatedCompletionTime}</td>
                    <td className="text-center">
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserList;
