import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
               <Col lg={6}>
               <Navbar.Brand href="#home" >Zulzana</Navbar.Brand>
               </Col>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example" className="justify-content-end">
                    <Col lg={6}>
                        <Nav>
                            <NavLink>Home</NavLink>
                            <NavLink>About</NavLink>
                            <NavLink>BLog</NavLink>
                            <NavLink>Contact</NavLink>
                        </Nav>
                    </Col>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;