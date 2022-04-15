import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

export default function NavBarr(){

    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="#home">React Pub</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </Link>
                            <NavDropdown title="Categorys" id="basic-nav-dropdown">
                                <Link to='/category/ipa'>
                                    <NavDropdown.Item href="#action/3.1">IPA</NavDropdown.Item>
                                </Link>
                                <Link to='/category/amber'>
                                    <NavDropdown.Item href="#action/3.2">Amber</NavDropdown.Item>
                                </Link>
                                <Link to='/category/porter'>
                                    <NavDropdown.Item href="#action/3.3">Porter</NavDropdown.Item>
                                </Link>
                                <Link to='/category/honey'>
                                    <NavDropdown.Item href="#action/3.4">Honey</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                            <Nav.Link><CartWidget/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </>
    );
}