
import ImgSlider from './HomeComponent/Slider/ImgSlider';
import Notice from './HomeComponent/Notice/Notice';
import MentorsCard from './HomeComponent/MentorsCard/MentorsCard';
import Gallery from './HomeComponent/Gallery/Gallery';
import line from "../../assets/Img/line.png"
import { Link } from 'react-router-dom';
import StudentComment from './HomeComponent/StudentComment/StudentComment';

import LatestBlogsSlider from './HomeComponent/LatestBlogsSlider/LatestBlogsSlider';

const Home = () => {
    
    return (
        <div>
            <ImgSlider/>
         
            <Notice/>
            <StudentComment/>
           
  {/* title  */}
  <div className="text-center mx-4 lg:mx-0 mb-12  mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Calculate CGPA </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        <p className="text-[18px] font-lato  dark:text-gray-200">Say goodbye to the days of tedious calculations and messy spreadsheets! UniVerse takes the hassle out of monitoring your academic progress with its lightning-fast CGPA calculation tool. Simply input your grades and credits, and watch as UniVerse instantly delivers your accurate CGPA, saving you precious time and stress. <Link to='/cgpa' className=' text-blue-600 hover:underline'> Calculate Your CGPA</Link></p>
        </div>

<LatestBlogsSlider/>
            <Gallery/>

            <MentorsCard/>
            <div className='mt-40 text-center'>
            <h2 className=' text-4xl font-semibold text-white'>Student Special: Discounted rates on tropical getaways!</h2>
            <p className='p-8 text-gray-100'>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
        </div>
        </div>

    );
};

export default Home;