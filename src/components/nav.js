import React from "react";
import Flip from "react-reveal/Flip";
import { FaRegSun } from "react-icons/fa";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

const nav = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="nav__bg"
      fixed="top"
    >
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <Flip bottom>Thomas &amp; Assoc</Flip>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Flip bottom>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Flip>
        </Nav>
        <Nav className="ml-auto">
          <Flip bottom>
            <Nav.Link href="tel:773-268-4888" style={{ color: "white" }}>
              +1 (773) 268-4888
            </Nav.Link>
          </Flip>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default nav;
