import Intro from '../Intro/Intro';
import ReviewSection from '../ReviewSection/ReviewSection';
import TopCourses from '../TopCourses/TopCourses';
import TopSection from '../TopSection/TopSection';
import './home.css'
const Home = () => {
    // this is custom hook

    return (
        <>
        <TopSection></TopSection>
        <div className='home-section'>
            <Intro></Intro>
            <TopCourses></TopCourses>
            {/* review section  */}
            <ReviewSection></ReviewSection>
        </div>
        </>
    );
};

export default Home;