import React from 'react';
import { Container, Nav, NavLink } from 'react-bootstrap';
import "./ThirdMenu.css";

const ThirdMenu = () => {
    return (
       <Container className='p-0'>
           <Nav className='customMenu'><NavLink className='customMenuField notMargin'>Home</NavLink>
                <NavLink className='customMenuField'>About</NavLink>
                <NavLink className='customMenuField'>Help</NavLink>
                <NavLink className='customMenuField'>Blog</NavLink>
                <NavLink className='customMenuField'>Contact Us</NavLink>
           </Nav>
       </Container>
    );
};

export default ThirdMenu;