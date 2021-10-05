import React from 'react';
import { Container , Col, Image, Row} from 'react-bootstrap';
import img1 from '../../images/wepik-202194.png'
const Intro = () => {
    return (
        <Container>
            <Row className='d-flex align-items-center'>
                <Col md={7} >
                    <h2 className='fw-bold'>Welcome To Our<span className='text-danger'>Martial</span> Art</h2>
                    <h6 className='text-secondary'>This is best club for learning martial arts. Fill free to contact us.</h6>
                    <p className='text-secondary mt-3'> The consistent practice has shown to increase overall mobility, improve your body's pressure response, and increase muscle. Because so many martial arts involve repeat muscular actions over time you'll build strength and burn fat.</p>
                </Col>
                <Col md={5}>
                 <Image src={img1} fluid/>
                </Col>
            </Row>
        </Container>
    );
};

export default Intro;