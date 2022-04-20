import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

export default function NavBarr(){

    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" as={Link} to='/'>React Pub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">                           
                            <Nav.Link href="#home" as={Link} to='/'>Home</Nav.Link>
                            <NavDropdown title="Categorys" id="basic-nav-dropdown">                               
                                <NavDropdown.Item href="#action/3.1" as={Link} to='/category/ipa'>IPA</NavDropdown.Item>                                                             
                                <NavDropdown.Item href="#action/3.2" as={Link} to='/category/amber'>Amber</NavDropdown.Item>                                                                
                                <NavDropdown.Item href="#action/3.3" as={Link} to='/category/porter'>Porter</NavDropdown.Item>                                                             
                                <NavDropdown.Item href="#action/3.4" as={Link} to='/category/honey'>Honey</NavDropdown.Item>                               
                            </NavDropdown>
                            <Nav.Link><CartWidget/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </>
    );
}