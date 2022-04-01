import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget";

export default function NavBarr(){

    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React Pub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">WhatsApp</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><CartWidget/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </>
    );
}