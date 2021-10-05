import React from 'react';
import { Container , Button, Row, Col, Form } from 'react-bootstrap';
const SignIn = () => {
    return (
        <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Sign In</h1>
        <Row className="mt-5">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="outline-success mt-4 btn-block" type="">
                        SUBMIT
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
    );
};

export default SignIn;