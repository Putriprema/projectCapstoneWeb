import React, { useState } from "react";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CustomNavbar = ({ navValue }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [getNavbarValue, setNavbarValue] = useState(navValue);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const changeNavbarValue = () => {
    setNavbarValue(getNavbarValue === "Profile" ? "" : "Profile");
  };

  const Links = [
    { name: "Beranda", link: "/home" },
    {
      name: "Artikel",
      dropdown: [
        { subName: "Informasi", subLink: "/informasi" },
        { subName: "FAQ", subLink: "/faq" },
      ],
    },
    { name: "Layanan", link: "/layanan" },
    { name: "Tentang Kami", link: "/tentang-kami" },
  ];

  return (
    <Navbar expand="lg" style={{ color: "white", backgroundColor: "#327094", height: "80px" }}>
      <Container fluid>
        <div className="flex items-center cursor-pointer font-[poppins] text-white">
          <img src={logo} alt="Logo" className="h-16 mr-2" style={{ height: "130px", marginLeft: "20px" }} />
        </div>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar id="navbar-dark-example">
          <Nav className="ml-auto pt-2" style={{ gap: "30px", fontSize: "12pt" }}>
            {Links.map((link) => (
              <React.Fragment key={link.name}>
                {link.dropdown ? (
                  <li
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={closeDropdown}
                    style={{
                      position: "relative",
                      cursor: "pointer",
                      marginTop: "1%",
                      color: "white", // Set default color for dropdown
                    }}
                  >
                    <span>{link.name}</span>
                    {showDropdown && (
                      <ul
                        style={{
                          position: "absolute",
                          left: "-45px",
                          backgroundColor: "#D9EAF4",
                          padding: "15px",
                          zIndex: 1,
                          marginTop: "20px",
                          borderRadius: "10px",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {link.dropdown.map((subLink) => (
                          <li key={subLink.subName} style={{ padding: "5px 10px" }}>
                            <Link
                              to={subLink.subLink}
                              style={{
                                textDecoration: "none",
                                color: "black",
                                display: "block",
                                padding: "8px 0",
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.color = "#327094";
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.color = "black";
                              }}
                            >
                              {subLink.subName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <Link
                    to={link.link}
                    style={{
                      color: "white",
                      transition: "color 0.3s",
                      textDecoration: "none",
                      padding: "8px 10px", // Padding to make links more consistent
                      borderRadius: "5px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "cyan";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "white";
                    }}
                  >
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <Link style={{ color: 'white', paddingTop: '6px' }} to='/Notifikasi'>
              <ion-icon name="notifications-outline" style={{ fontSize: "24pt" }}></ion-icon>
            </Link>
            <Link style={{ color: 'white' }} to="/login-options">
              <Button
                style={{
                  padding: '8px 35px',
                  borderRadius: '13px',
                  marginBottom: '20px',
                }}
                variant='primary'
                type='submit'
              >
                Masuk
              </Button>
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
