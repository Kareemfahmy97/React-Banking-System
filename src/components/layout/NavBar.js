import React from "react";
import {  Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from './Layout.module.css';

const NavBar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/Home">
              💰Minimalist Bank
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link as={Link} to="/Home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/AllUsers">
                  All Users
                </Nav.Link>
                <Nav.Link as={Link} eventKey={2} to="/History-Trans">
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
