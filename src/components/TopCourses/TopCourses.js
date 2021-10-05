import React from 'react';
import {Container,Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
const TopCourses = () => {
    const [services] = useServices()
    return (
        <Container>
            <div className='text-center my-5'>
                <h3 className='fw-bold'>Top <span className='text-danger'>Courses</span></h3>
                <h5 className='text-secondary'><i>Join our martial art club and be healthy</i></h5>
            </div>
            <Row xs={1} md={4} className="g-4 pb-5">
                {/* this is top trending courses  */}
                {
                    services?.slice(0,4).map(service => <Service key={service.id} services={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default TopCourses;