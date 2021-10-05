
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css'
const Footer = () => {
    return (
        <div className='footer-section'>
            <Container className='text-white'>
            <Row xs={1} md={2}>
                <Col className='p-5'>
                    <h3>About Us</h3>

                    <div className='mt-3'>
                        <p>Learning martial arts is an extremely rewarding journey that we want to support you through. Take advantage of our special offer -- try a martial art through a free beginner’s course! </p>
                    </div>
                    <div className="icon-container">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                    </div>
                </Col>
                <Col className='p-5'>
                    <h3>Contact Us</h3>
                    <ul className='mt-3 info'>
                        <li><i className="fas fa-phone-volume me-2"></i> +1000053434</li>
                        <li><i className="fas fa-envelope me-2"></i>  tusharkrs2018@gmail.com</li>
                        <li><i className="fas fa-map-marker-alt me-2"></i>  Chittagong,Bangladesh</li>
                    </ul>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Footer;