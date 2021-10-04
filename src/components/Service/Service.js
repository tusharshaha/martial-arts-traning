import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';

const Service = (props) => {
    const {img, name,price}= props.services
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} style={{height:'150px'}}/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <h5>${price}</h5>
                    <Button variant="outline-danger mt-3">BOOK NOW</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;