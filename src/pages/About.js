import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Banners from '../components/Banners';
import CategoryMain from '../components/CategoryMain';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Slider />
            <Banners />
            <CategoryMain />
            <Newsletter />
            {/* <Footer /> */}
        </div>
    )
}

export default About;