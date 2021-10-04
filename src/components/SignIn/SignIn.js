import React from 'react';
import { Container , Button } from 'react-bootstrap';
import './signin.css'

const SignIn = () => {
    return (
        <Container>
            <div className='text-center w-50 mx-auto signIn'>
                <h3 className='fw-bold'>Sign In</h3>
               <input className='input' type="email" placeholder='Your Email' /><br/>
              <input className='input' type="password" name="" id=""  placeholder='Your Password'/> <br />
              <Button variant="outline-secondary mt-3">Submit</Button>
            </div>
        </Container>
    );
};

export default SignIn;