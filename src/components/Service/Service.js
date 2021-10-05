import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './service.css'
const Service = (props) => {
    const {img, name,price}= props.services
    const history = useHistory()
    const handleBook = () => {
        history.push('/signin')
    }
    return (
        <Col>
            <Card className='card-animation'>
                <Card.Img variant="top" src={img} style={{height:'250px', width:'100%'}}/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <h5>${price}</h5>
                    <Button onClick={handleBook} variant="outline-danger mt-3">BOOK NOW</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;