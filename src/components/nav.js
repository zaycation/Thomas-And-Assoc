/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from "react";
import Flip from "react-reveal/Flip";
//import { FaRegSun } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";

const nav = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      style={{
        transition: "1s ease",
        background: navBackground
          ? "linear-gradient(to right, #734b6d, #42275a)"
          : "transparent",
      }}
      variant="dark"
      expand="sm"
      fixed="top"
      id="nav-clr"
    >
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <Flip bottom>Thomas &amp; Assoc.</Flip>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() =>
          (document.getElementById("nav-clr").style.backgroundColor = "#734b6d")
        }
      />
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
