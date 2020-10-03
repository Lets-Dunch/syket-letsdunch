import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/logo.png';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">
      <img className="logo" src={logo} alt=""/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="nav-link" href="/registration">Registration</Nav.Link>
      <Nav.Link className="nav-link" href="/login">Login</Nav.Link>
      <Nav.Link className="nav-link" href="/verify-email">Verify Email</Nav.Link>
      <Nav.Link className="nav-link" href="/profile">Profile</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
};

export default NavigationBar;
