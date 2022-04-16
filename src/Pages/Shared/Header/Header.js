import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
  return (
    <Navbar sticky='top' bg="light" expand="lg" >
        <Container>
          <Navbar.Brand href="#home" className='text-success fw-bold'>Edu-Pi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={CustomLink} to="home">Home</Nav.Link>
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link as={CustomLink} to="blogs">Blogs</Nav.Link>
              <Nav.Link as={CustomLink} to="about">About Me</Nav.Link>
              <Nav.Link as={CustomLink} to="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;