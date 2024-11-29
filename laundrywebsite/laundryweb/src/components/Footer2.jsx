/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Navbar } from 'react-bootstrap'; //link dari boostrap


const Footer2 = () => {
  return (
    <Navbar expand="lg" style={{ color:'white', backgroundColor: '#327094', height: '60px' }}>
      <Container fluid>
        <div className="flex items-center cursor-pointer font-[poppins] text-white">
        </div>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer2;

