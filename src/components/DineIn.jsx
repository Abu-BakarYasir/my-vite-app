import React from 'react';
import './DineIn.css';

const DineIn = () => {
    return (
        <div className="dine-in-container">
            <h2 className="dine-in-title">Dine In</h2>
            <ul className="dine-in-timings">
                <li>Wednesday & Thursday: 5:30 PM - 9:30 PM</li>
                <li>Friday & Saturday: 5:00 PM - 10:00 PM</li>
                <li>Sunday: 5:00 PM - 9:30 PM</li>
                <li>Closed Monday & Tuesday</li>
            </ul>
        </div>
    );
};

export default DineIn;
