import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./assets/logo.png";

function App() {
  const navData = [
    { path: "#home", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#skills", name: "Skills" },
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact" },
  ];

  return (
    <div>
      <header>
        <Navbar expand="lg" bg="light" variant="light" className="shadow">
          <Container className="w-75">
            <Navbar.Brand href="#home" className="kanit">
              <img
                alt="Logo"
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Kyle
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {navData.map((item) => (
                  <Nav.Link href={item.path} className="px-4 poppins-nav">
                    {item.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
