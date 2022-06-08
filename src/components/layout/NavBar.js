import React from "react";
import {  Nav, Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">Banking System</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Transfer</Nav.Link>
              <Nav.Link href="#pricing">History</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">All Users</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Transactions history
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
