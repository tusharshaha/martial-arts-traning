import React from 'react';
import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div className='header-section'>
            <div className='overlay'>
            <Navbar bg="light" variant="light">
                <Container>
                <h4 className='fw-bold'>Martial Arts</h4>
                <Nav className="ms-auto">

                <NavLink className='nav-link' to="/home">Home</NavLink>

                <NavLink className='nav-link' to="/services">Services</NavLink>

                <NavLink className='nav-link' to="/about">About</NavLink>

                <NavLink className='nav-link' to="/signin">SignIn</NavLink>
                </Nav>

                </Container>
            </Navbar>
            <Container className='text-white'>
                <Row className='mt-5'>
                    <Col>
                    <h1 className='fw-bold'>Martial Arts</h1>
                    <h3 className='text-uppercase bg-danger px-3'>Traning With best legend</h3>
                    <p>Every day we bring hope to millions of chidren in the world's hardes places as a sing of God's unconditonal love</p>
                    <Button variant="danger mt-3 ">BOOK NOW</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default Header;