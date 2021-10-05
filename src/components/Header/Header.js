import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="md" sticky="top" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>Martial Arts</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">

            <NavLink className='nav-link' to="/home">Home</NavLink>

            <NavLink className='nav-link' to="/services">Services</NavLink>

            <NavLink className='nav-link' to="/about">About</NavLink>

            <NavLink className='nav-link' to="/signin">SignIn</NavLink>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;