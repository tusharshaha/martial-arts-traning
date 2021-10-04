import React from 'react';
import { Image,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img3 from '../../images/error.png'
const Error = () => {
    const history = useHistory()
    const handelError = ()=> {
        history.push('/home')
    }
    return (
        <div className='text-center'>
            <div style={{width:'50%',margin:'0 auto', marginBottom:'90px'}}>
            <Image className='mx-auto' style={{height:'350px'}} src={img3}/> <br/>
            <Button onClick={handelError} variant="danger mt-2">Back To Home</Button>
            </div>
        </div>
    );
};

export default Error;