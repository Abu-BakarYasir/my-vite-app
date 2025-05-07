import React from "react";
import MenuItem from "./MenuItem";
import { useCart } from "./Cart";
import { useNavigate } from "react-router-dom";
import menuData from "../data/MenuData";
//import Footer from "./Footer";
import './header';
import HeaderBanner from './header';
import "./Menu.css";
import Navbar from './Navbar';

const Menu = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    // Group items by category
    const categories = menuData.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className="whole-page">
            <HeaderBanner/>
            <Navbar/><br/>
            <h1 className="menu-heading">MENU</h1>
            <div className="cart-icon" onClick={() => navigate("/view-cart")}>
                🛒
            </div>

            <div className="menu-container">
                {Object.keys(categories).map((category) => (
                    <div key={category}>
                        <h2 className="category-heading">{category}</h2>
                        <div className="category-items">
                            {categories[category].map((item) => (
                                <MenuItem
                                    key={item.id}
                                    item={item}
                                    handleItemSelect={addToCart}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            <br/><hr/><br/>
            <footer className="footer">
    <div className="footer-content">
        {/* Location Section */}
        <div className="footer-section">
            <i className="fas fa-map-marker-alt"></i>
            <p>AC63H+6V6 Al Khan, 8 KM Raiwind Rd, Adjacent to Defence</p>
        </div>

        {/* Restaurant Info Section */}
        <div className="footer-section">
            <i className="fas fa-utensils"></i>
            <p>Fine Dining Experience | Open Mon-Sun: 12 PM - 11 PM</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
            <i className="fas fa-phone-alt"></i>
            <p>+92 300 1234567</p>
            <button 
                className="contact-us-button" 
                onClick={() => window.location.href = '/contact-us'}
            >
                Contact Us
            </button>
        </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="footer-bottom">
        <p>© 2024 Al Khan. All rights reserved.</p>
        <div className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
            </a>
        </div>
    </div>
</footer>
        </div>
    );
};

export default Menu;
