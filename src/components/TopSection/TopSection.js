import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
const TopSection = () => {
    return (
        <div className='header-section'>
            <div className='overlay'>
            <Container className='text-white'>
                <Row className='mt-5'>
                    <Col xs={10}md={7} lg={6}>
                    <h1 className='fw-bold'>Martial Arts</h1>
                    <h3 className='text-uppercase bg-danger px-3'>Traning With best legend</h3>
                    <p>Every day we bring hope to millions of chidren in the world's hardes places as a sing of God's unconditonal love</p>
                    <Button variant="danger mt-3 ">BOOK NOW</Button>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default TopSection;