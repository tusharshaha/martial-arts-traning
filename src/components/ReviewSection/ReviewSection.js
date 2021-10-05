import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const ReviewSection = () => {
    return (
        <div className="bg-danger my-5 px-4 py-5 text-white">
            <Container>
                <Row xs={2} md={4} className='text-center g-4'>
                    <Col>
                    <i className="far fa-smile icon"></i>
                    <h3>754</h3>
                    <small>HAPPY STUDENT</small>
                    </Col>
                    <Col>
                    <i className="fas fa-rocket icon"></i>
                    <h3>375</h3>
                    <small>SUCCESS SPORTS</small>
                    </Col>
                    <Col>
                    <i className="fas fa-user-plus icon"></i>
                    <h3>124</h3>
                    <small>OUR TRANINER</small>
                    </Col>
                    <Col>
                    <i className="fas fa-medal icon"></i>
                    <h3>24</h3>
                    <small>AWARD WON</small>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ReviewSection;