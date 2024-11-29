/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbar3 = () => {
  let Links = [
    { name: "Beranda", link: "/home" },
    { name: "Rekap Transaksi", link: "/UserList" },
  ];

  return (
    <Navbar expand="lg" style={{ color:'white', backgroundColor: '#327094', height: '100px' }}>
      <Container fluid>
        <div className="flex items-center cursor-pointer font-[poppins] text-white">
          <img src={logo} alt="Logo" className="h-16 mr-2" style={{ height: '150px', marginLeft: '30px' }} />
        </div>     
        <h2 className="navbar-title" style={{ marginLeft: '7%', fontWeight:'bold' }} >Dashboard</h2>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="ml-auto" style={{ gap: '40px', fontSize:'16pt', marginRight:'9%'}}>
            {Links.map((link, index) => (
              <Nav.Link
                key={index}
                href={link.link} 
                className="text-white navbar-link"
                style={{ color: link.name === 'Layanan' ? 'black' : 'white', transition: 'color 0.3s' }}
                onMouseEnter={(e) => {
                  e.target.style.color = "cyan";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = link.name === 'Layanan' ? 'black' : 'white';
                }}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar3;
