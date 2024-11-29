import React, { useState } from "react";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  let Links = [
    { name: "Beranda", link: "/home" },
    {
      name: "Artikel",
      link: "/blog",
      dropdown: [
        { subName: "Informasi", subLink: "/Informasi" },
        { subName: "FA&Q", subLink: "/FAQ" },
      ],
    },
    { name: "Layanan", link: "/layanan" },
    { name: "Tentang Kami", link: "/tentangkami" },
  ];

  return (
    <Navbar
      expand="lg"
      style={{ color: "white", backgroundColor: "#327094", height: "100px" }}
    >
      <Container fluid>
        <div className="flex items-center cursor-pointer font-[poppins] text-white">
          <img
            src={logo}
            alt="Logo"
            className="h-16 mr-2"
            style={{ height: "150px", marginLeft: "30px" }}
          />
        </div>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="ml-auto" style={{ gap: "40px", fontSize: "16pt" }}>
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
                    }}
                  >
                    {link.name}
                    {showDropdown && (
                      <ul
                        style={{
                          position: "absolute",
                          backgroundColor: "#D9EAF4",
                          padding: "30px",
                          zIndex: 1,
                          marginTop: "10%",
                          borderRadius: "10%",
                        }}
                      >
                        {link.dropdown.map((subLink) => (
                          <li key={subLink.subName}>
                            <Link
                              to={subLink.subLink}
                              style={{
                                textDecoration: "none",
                                color: "black",
                                display: "block",
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
                  <Nav.Link
                    href={link.link}
                    className="text-white navbar-link  mb-1"
                    style={{
                      color: "black",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "cyan";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "white";
                    }}
                  >
                    {link.name}
                  </Nav.Link>
                )}
              </React.Fragment>
            ))}
            <Nav.Link className="text-white">
              <ion-icon
                name="notifications-outline"
                style={{ fontSize: "24pt" }}
              ></ion-icon>
            </Nav.Link>
            <Link to="/Loginpelangganmintra"></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
