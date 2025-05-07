import React from 'react';
//import { Link } from 'react-router-dom';
import './home.css'; 
import './header';
import DineIn from './DineIn';
import Footer from './Footer';
import HeaderBanner from './header';
import Navbar from './Navbar'; 

const Home = () => {
    return (
        <div>
            {/* Header */}
            <HeaderBanner />

            {/* Navbar */}
            <Navbar />

            {/* Carousel */}
            <div className="carousel">
                <img
                    src="src/pictures/resturant.jpg"
                    alt="Interior view of alkhan restaurant with a bar and seating area"
                />
            </div>
            <div>
                <DineIn />
            </div>
            <div className="carousel">
                <img
                    src="src/pictures/table4.jpg"
                    alt="Interior view of alkhan restaurant table"
                />
            </div>

            {/* Footer Section */}
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
