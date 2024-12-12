import React, { useState, useEffect } from "react"; 
import axios from "axios";
import Table from "react-bootstrap/Table";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [statusTime, setStatusTime] = useState({});
  const [searchTerm, setSearchTerm] = useState(""); // State untuk menyimpan kata kunci pencarian

  useEffect(() => {
    // Integrasi Crisp Chat
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "d583988c-da94-4e03-a7aa-0d4faea374f3";
    (function () {
      let d = document;
      let s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();

    // Polling data pengguna
    getUsers();
    const pollingInterval = setInterval(() => {
      getUsers();
    }, 5000);

    // Membersihkan interval ketika komponen unmount
    return () => {
      clearInterval(pollingInterval);
    };
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:2000/users");
      const newUsers = response.data;

      // Memperbarui pengguna tanpa menghapus status yang sudah ada
      setUsers(newUsers);

      // Inisialisasi status hanya jika status belum ada, status tetap pada yang sebelumnya
      setStatusTime((prevStatusTime) => {
        const updatedStatusTime = { ...prevStatusTime };
        newUsers.forEach((user) => {
          if (!updatedStatusTime[user.id]) {
            updatedStatusTime[user.id] = { status: "inProgress" }; // Default status adalah "inProgress"
          }
        });
        return updatedStatusTime;
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/users/${id}`);
      getUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleStatusClick = (id) => {
    setStatusTime((prevStatusTime) => {
      const updatedStatusTime = { ...prevStatusTime };

      // Ubah status menjadi "completed" hanya jika statusnya bukan "completed"
      if (updatedStatusTime[id]?.status !== "completed") {
        updatedStatusTime[id].status = "completed"; // Status jadi "completed"
      }

      return updatedStatusTime;
    });
  };

  // Fungsi untuk menangani pencarian
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter data berdasarkan pencarian Nama dan Order ID
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.id && user.id.toString().toLowerCase().includes(searchTerm.toLowerCase())) // Pastikan ID menjadi string sebelum diproses
  );

  // Styling untuk tabel
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    backgroundColor: "white"
  };

  // Styling untuk sel
  const cellStyle = {
    border: "1px solid black", // Membuat garis hitam tebal
    padding: "8px",
    textAlign: "left" // Mengubah align teks menjadi kiri
  };

  // Styling untuk header
  const headerStyle = {
    ...cellStyle,
    backgroundColor: "#327094", // Background warna #327094 untuk header
    color: "white", // Teks berwarna putih
    fontWeight: "bold" // Teks tebal (bold)
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
          <div className="w-100" style={{ marginLeft: "1%", marginRight: "1%" }}>
            {/* Search Bar */}
            <div className="mb-3 d-flex justify-content-center">
              <input
                type="text"
                placeholder="Cari Nama atau ID"
                value={searchTerm}
                onChange={handleSearch}
                style={{
                  padding: "10px",
                  width: "50%",  // Mengubah ukuran search bar menjadi setengah layar
                  marginBottom: "20px",
                  borderRadius: "5px",
                  border: "1px solid #327094"  // Menebalkan border dan memberi warna
                }}
              />
            </div>

            <h3 style={{ marginLeft: '30px', marginTop: '1px', marginBottom: '20px' }}>
              Data Rekap Transaksi LaundryEase
            </h3>
            <Table striped bordered hover style={tableStyle}>
              <thead>
                <tr>
                  <th style={headerStyle}>No</th>
                  <th style={headerStyle}>ID</th>
                  <th style={headerStyle}>Order ID</th>
                  <th style={headerStyle}>Nama</th>
                  <th style={headerStyle}>Alamat</th>
                  <th style={headerStyle}>Total</th>
                  <th style={headerStyle}>Kurir</th>
                  <th style={headerStyle}>Tanggal Transaksi</th>
                  <th style={headerStyle}>Waktu Mulai Laundry</th>
                  <th style={headerStyle}>Waktu Selesai Laundry</th>
                  <th style={headerStyle}>Status Cucian</th>
                  <th style={headerStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td style={cellStyle}>{index + 1}</td>
                    <td style={cellStyle}>{user.id}</td>
                    <td style={cellStyle}>{user.order_id}</td>
                    <td style={cellStyle}>{user.name}</td>
                    <td style={cellStyle}>{user.address}</td>
                    <td style={cellStyle}>{user.total}</td>
                    <td style={cellStyle}>{user.courier}</td>
                    <td style={cellStyle}>{user.transactionDate}</td>
                    <td style={cellStyle}>{user.orderTime}</td>
                    <td style={cellStyle}>{user.estimatedCompletionTime}</td>
                    <td style={cellStyle}>
                      <button
                        onClick={() => handleStatusClick(user.id)}
                        className={`btn ${statusTime[user.id]?.status === "completed" ? 'btn-success' : 'btn-warning'}`}
                      >
                        {statusTime[user.id]?.status === "completed" ? 'Selesai' : 'Proses'}
                      </button>
                    </td>
                    <td style={cellStyle}>
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
