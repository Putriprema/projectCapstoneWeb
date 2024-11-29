/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProgressBar from "react-bootstrap/ProgressBar";

const Newpass = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    let count = 0;
    const interval = setInterval(() => {
      count += 10;
      if (count > 100) {
        clearInterval(interval);
      } else {
        setProgress(count);
      }
    }, 1000);
  };

  return (
    <>
      {/* Bagian Navbar */}
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100 position-relative">
        {/* Form Pemulihan Akun */}
        <div className="flex justify-center items-center pt-40 pb-20">
          <Card
            style={{
              width: "50rem",
              height: "60vh",
              background: "#D9EAF4",
              border: "none",
              boxShadow: "0px -3px 4px grey",
              paddingTop: "80px",
            }}
          >
            <Card.Body>
              <Card.Title>
                <h2>Pemulihan Akun</h2>
              </Card.Title>
              <Card.Text className="px-32 pt-4">
                Masukkan kata sandi baru anda.
              </Card.Text>
              {/* Form untuk kata sandi */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                  paddingLeft: "20%",
                  paddingBottom: "40px",
                  paddingTop: "20px",
                }}
              >
                <label className="flex justify-start">
                  Masukkan kata sandi baru Anda
                </label>
                <input
                  style={{
                    border: "1px solid",
                    borderRadius: "10px",
                    height: "40px",
                  }}
                  type="password"
                  placeholder="Masukkan kata sandi baru"
                />
              </div>
              {/* Form untuk konfirmasi kata sandi */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                  paddingLeft: "20%",
                  paddingBottom: "40px",
                  paddingTop: "20px",
                }}
              >
                <label className="flex justify-start">
                  Konfirmasi kata sandi baru Anda
                </label>
                <input
                  style={{
                    border: "1px solid",
                    borderRadius: "10px",
                    height: "40px",
                  }}
                  type="password"
                  placeholder="Konfirmasi kata sandi baru"
                />
              </div>
              {/* Tombol 'Selesai' */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <ProgressBar
                  now={progress}
                  style={{ width: "50%", marginBottom: "20px" }}
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/Login-mitra">
                    <Button variant="primary" onClick={updateProgress}>
                      Selesai
                    </Button>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* Bagian Footer */}
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
};

export default Newpass;
