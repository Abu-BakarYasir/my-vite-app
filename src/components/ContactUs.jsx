import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from './Navbar';
import Header from './header';
import Footer from './Footer';


function ContactUs() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ firstName, lastName, email, subject, message });
        alert('Form submitted!');
    };

    return (
        <>
        <Header/>
        <Navbar/>
        <div className="contact-content">
        
            <br /><br/>
            <h1>CONTACT US</h1>
            <form onSubmit={handleSubmit} className="submit-form">
                
                <p>Please complete the form below.</p>
                <label>First Name*</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label>Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label>Email *</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Subject*</label>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <label>Message*</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br/>
                <button type="submit">SUBMIT</button>
                <br/>
            </form>
            
        </div>
        <Footer/>
        </>
    );
}

export default ContactUs;