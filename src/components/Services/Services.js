import { Container, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    // this is custom hook 
    const [services] = useServices()
    return (
        <Container>
            <div className='text-center my-5'>
                <h3 className='fw-bold'>Our <span className='text-danger'>Classes</span></h3>
                <h5 className='text-secondary'><i>Here are our available popular courses</i></h5>
            </div>
            <Row xs={1} md={3} className="g-4">
                {/* this is services section  */}
                {
                    services?.map(service => <Service key={service.id} services={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;