import React from 'react';
import { Container, Image } from 'react-bootstrap';
import img2 from '../../images/2411-removebg-preview.png'

const About = () => {
    return (
        <Container>
            <div style={{width:'250px'}} className=' mx-auto mb-5'>
            <Image className='w-100' src={img2}/>
            </div>
            <div>
                <h5>What makes Martial Art at Home courses better?</h5>
                <ul className='mt-5'>
                    <li><span className='fw-bold'>Comprehensive White to Black Belt Curriculum</span>-<p className='text-secondary'>Your course will include a common sense, comprehensive, and chronological curriculum covering everything that you would learn in a local dojo for the art of your choice.</p></li>
                    <li><span className='fw-bold'>Follow Along Classes and Workouts </span>-<p className='text-secondary'> Instead of just teaching the techniques, many of our Black Belt at Home courses include follow along classes, as well as workouts, to round out your at-home training regimen.</p></li>
                    <li><span className='fw-bold'>The Ability to Earn Rank </span>-<p className='text-secondary'>Once you get comfortable with the training, and want to go even deeper, and get credit for your training - you can enroll into the Global Martial Arts University course that corresponds to the style that you are studying. You can earn internationally accredited rank, get instructor support, interact with your peers, get new training content every month, and much more.</p></li>
                    <li><span className='fw-bold'>Instant Access with the Digital Edition</span>-<p className='text-secondary'>This lets you immediately start your training by streaming on any device, or you can download the videos for offline viewing.</p></li>

                </ul>
            </div>
        </Container>
    );
};

export default About;