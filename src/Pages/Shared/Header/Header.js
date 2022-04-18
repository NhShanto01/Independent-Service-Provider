import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <Navbar sticky='top' bg="light" expand="lg" >
      <Container>
        <Navbar.Brand as={Link} to="home" className='text-success fw-bold'>Edu-Pi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={CustomLink} to="home">Home</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link as={CustomLink} to="blog">Blog</Nav.Link>
            <Nav.Link as={CustomLink} to="about">About Me</Nav.Link>
          </Nav>
          
          {user ? <p className='mt-3 text-success fw-bold me-4'>User name : {user?.displayName}</p> : ""}

          {
            user ?
              <button className='btn btn-link text-success fw-bold text-decoration-none' onClick={handleSignOut}>sign out</button>
              :
              <Nav.Link className='text-success fw-bold' as={Link} to="login">
                Login
              </Nav.Link>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;