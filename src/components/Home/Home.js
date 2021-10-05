import { Col, Container, Image, Row,Button } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import img1 from '../../images/wepik-202194.png'
import Service from '../Service/Service';
import './home.css'
const Home = () => {
    // this is custom hook
    const [services] = useServices()
    return (
        <>
        <div className='header-section'>
            <div className='overlay'>
            <Container className='text-white'>
                <Row className='mt-5'>
                    <Col>
                    <h1 className='fw-bold'>Martial Arts</h1>
                    <h3 className='text-uppercase bg-danger px-3'>Traning With best legend</h3>
                    <p>Every day we bring hope to millions of chidren in the world's hardes places as a sing of God's unconditonal love</p>
                    <Button variant="danger mt-3 ">BOOK NOW</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
        </div>
        <div className='home-section'>
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
            {/* review section  */}
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
        </div>
        </>
    );
};

export default Home;