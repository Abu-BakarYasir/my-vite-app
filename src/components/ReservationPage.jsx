import React, { useState } from "react";
import "./ReservationPage.css";
import Footer from './Footer';
import Header from './header';
import Navbar from './Navbar';

function ReservationPage() { 
  // State to store form inputs and reservation slip
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
  });
  const [reservationSlip, setReservationSlip] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate reservation slip
    setReservationSlip({
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
    });
  };

  return (
    <div className="reservation-container">
      {/* Header */}
      <Header/>
      <Navbar/>
      <header className="header">
        <div className="rating">
          <br/>
          <h1>A L - K H A N  R E S T A U R A N T</h1>
          ★★★★☆ <span className="review-count">4.5 (567 reviews)</span>
        </div>
        <p className="cuisine-info">$$ - Asian Fusion, New American, Breakfast & Brunch</p>
      </header>
  <div className="whole-form">
      {/* Reservation Form */}
      <div className="reservation-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" onChange={handleChange} required />

          <label htmlFor="time">Time:</label>
          <select id="time" name="time" onChange={handleChange} required>
            <option value="">Select a time</option>
            <option value="6:15 PM">6:15 PM</option>
            <option value="6:30 PM">6:30 PM</option>
            <option value="6:45 PM">6:45 PM</option>
            <option value="7:00 PM">7:00 PM</option>
            <option value="7:15 PM">7:15 PM</option>
            <option value="7:30 PM">7:30 PM</option>
          </select>

          <label htmlFor="guests">Guests:</label>
          <select id="guests" name="guests" onChange={handleChange} required>
            <option value="">Select number of guests</option>
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            <option value="4">4 people</option>
            <option value="5">5 people</option>
            <option value="6">6 people</option>
          </select>

          <button type="submit" className="reserve-button">Reserve Now</button>
        </form>
      </div>

      {/* Display Reservation Slip */}
      {reservationSlip && (
        <div className="reservation-slip">
          <h2>Reservation Confirmation</h2>
          <p><strong>Date:</strong> {reservationSlip.date}</p>
          <p><strong>Time:</strong> {reservationSlip.time}</p>
          <p><strong>Guests:</strong> {reservationSlip.guests}</p>
          <p>Thank you for reserving with A L - K H A N  R E S T A U R A N T! We look forward to serving you.</p>
        </div>
      )}

      {/* Notes Section */}
      <section className="notes-section">
        <h3>Notes from the Business</h3>
        <p>
          We accept walk-ins whenever we can, but reservations are strongly encouraged! We have Burger Nights on the 1st
          and 3rd Mondays of each month! We hope to see you soon!
        </p>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h3>About</h3>
        <p>
          Centering around Asian American comfort food, A L - K H A N  R E S T A U R A N T sources seasonal produce from local farmers' markets.
          Our menu includes rice bowls, noodles, seasonal specials, and more, cooked with a modern take and high-quality ingredients.
        </p>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h3>Find Us</h3>
        <iframe
          title="Yang's Kitchen Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151..."
          width="100%"
          height="40"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Photos Section */}
      <section className="photos-section">
        <h3>Photos</h3>
        <div className="photo-gallery">
        <img src="src/pictures/pic1.jpg" alt="image shot at Yang's Kitchen" />
        <img src="src/pictures/pic4.jpg" alt="image shot at Yang's Kitchen" />
        <img src="src/pictures/pic6.jpg" alt="image shot at Yang's Kitchen" />
        <img src="src/pictures/pic5.jpg" alt="image shot at Yang's Kitchen" />
        </div>
      </section>
      </div>
    <Footer/>
    </div>
  );
}

export default ReservationPage;
