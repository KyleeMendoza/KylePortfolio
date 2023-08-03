import React from "react";

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "./assets/logo.png";

function NavBar() {
  const navData = [
    { path: "#home", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#skills", name: "Skills" },
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact" },
  ];
  return (
    <Navbar expand="lg" bg="light" variant="light" className="shadow">
      <Container className="border border-info">
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center kanit fs-1"
        >
          <img
            alt="Logo"
            src={Logo}
            width="65"
            height="65"
            className="d-inline-block align-top"
          />
          Kyle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navData.map((item) => (
              <Nav.Link href={item.path} className="px-3 bo btn-hover">
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
