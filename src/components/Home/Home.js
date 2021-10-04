import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img1 from '../../images/wepik-202194.png'
import './home.css'
const Home = () => {
    return (
        <div className='home-section'>
            <Container>
                <Row className='d-flex align-items-center'>
                <Col md={7} >
                    <h2 className='fw-bold'>Welcome To Our<span className='text-danger'>Martial</span> Art</h2>
                    <h6 className='text-secondary'>This is best club for learning martial arts. Fill free to contact us.</h6>
                    <p className='text-secondary mt-3'> The consistent practice has shown to increase overall mobility, improve your body's pressure response, and increase muscle. Because so many martial arts involve repeat muscular actions over time you'll build strength and burn fat.</p>
                </Col>
                <Col md={5}>
                <Image src={img1} rounded/>
                </Col>
                </Row>
                <div className='text-center my-5'>
                    <h3 className='fw-bold'>Our <span className='text-danger'>Classes</span></h3>
                    <h5 className='text-secondary'><i>Join our martial art club and be healthy</i></h5>
                </div>
            </Container>
        </div>
    );
};

export default Home;