import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import OrderPage from './components/OrderPage';
import Menu from './components/Menu';
import { CartProvider } from "./components/Cart";
import ReservationPage from "./components/ReservationPage";
import './App.css';

function App() {
    return (
        <CartProvider> {/* Global cart state provider */}
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/menu" element={<Menu />} /> {/* Menu page with item selection */}
                    <Route path="/view-cart" element={<OrderPage />} /> {/* Order summary */}
                    <Route path="/ReservationPage" element={<ReservationPage />} /> 
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
