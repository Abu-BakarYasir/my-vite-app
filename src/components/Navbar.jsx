import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // You can rename this to navbar.css for better organization


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="address">
                <a 
                    href="https://www.google.com/maps/dir//31.396608,74.22987/@31.3964728,74.1473737,12z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    _      A L  K H A N  R E S T U R A N T
                </a>
            </div>
            <div className="menu">
                <Link to="/home">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/ReservationPage">Reservation Page</Link>
            </div>
        </div>
    );
};

export default Navbar;
