import { useState } from 'react';
//import React from 'react';
import './AboutUs.css';
import './header';
import Footer from './Footer';
import Header from './header';
import Navbar from './Navbar';

function Aboutus() {
    const [showMore, setShowMore] = useState(false);
    const toggleContent = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='about-content'>
              <Header/>
              <Navbar/>
     
            <div>
            </div>
            <div className="container">
              <br/><br/>
                <h1>OUR STORY</h1>
                <br />
                <div className="second">
                    <img id="img1" src="src\pictures\monaal.png" alt="monal" />
                    <p id="para">
                     A L - K H A N  R E S T A U R A N T strives to source local, sustainable, and organic when possible. 
                        We work hard to source premium ingredients and we cook everything from scratch with love.
                        We also do our best to pay our employees living wages (tips are shared with all employees, including kitchen staff)
                        and to reduce our environmental footprint wherever we can. Overall, these factors translate to higher menu prices, 
                        but we hope that you find value and feel a sense of comfort in knowing 
                        that we aim to get better every day at doing what is important to us.
                    </p>
                </div>
                <button className="show-more" onClick={toggleContent}>
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
                {showMore && (
                    <div className="additional-info">
                        <h3>Looking Towards the Future</h3>
                        <p id="para2">
                            At A L - K H A N  R E S T A U R A N T, we are always looking ahead. As we continue to grow, our focus remains on 
                            enhancing our community, expanding our sustainability efforts, and bringing even more authentic, 
                            high-quality dishes to your table. We are committed to staying true to our roots while embracing 
                            new ideas and techniques to create an unforgettable dining experience.
                        </p>
                    </div>
                )}
                <hr />
                <div className="choose-values">
                    <div className="choose-us">
                        <h2>Why Choose Us</h2>
                        <br />
                        <ul>
                            <li>
                                <b>Fresh, Local Ingredients:</b> We source the finest ingredients, supporting local farmers and
                                ensuring every bite is bursting with flavor.
                            </li>
                            <li>
                                <b>Authentic Recipes:</b> Each dish tells a story, with recipes passed down through 
                                the Yang family and refined to perfection.
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <hr />
                    <br/>
                    <div className="values">
                        <h2>Our Values</h2>
                        <ul>
                            <li><b>Quality:</b> From farm to table, we are committed to excellence.</li>
                            <li><b>Tradition:</b> Honoring our roots while embracing innovation.</li>
                            <li><b>Community:</b> Bringing people together, one plate at a time.</li>
                        </ul>
                    </div>
                </div>
                <br />
                <hr />
            </div>
        
            <br />
            <div className="journey">
                <h2>Join Us on a Culinary Journey</h2>
                <p>
                    Whether you’re here for a quick bite, a special celebration, or simply to 
                    savor the flavors of home, AL-Khan Restaurant promises a feast for the senses.<br/><br/>
                    <div id="visit-line">
                   <b> Come visit us and be part of the<br/><h4><a href="#"> A L - K H A N  R E S T A U R A N T family!</a></h4></b>
                   </div>
                </p>
                <hr/>
                </div><br/>
                <div class="loc-hr-cont">
    <div class="loc-cont">
        <div class="loc">
            <h4>Location</h4>
            <p>AC63H+6V6 AlKhan, 8 KM Raiwind Rd, adjacent to Defence Rd</p>
        </div>
        <div class="cont">
            <h4>Contact</h4>
            <p>
                (202) 518-7926<br />
                <a href="#">hello@alkhanrestaurant.com</a>
            </p>
        </div>
    </div>
    <div class="hr">
        <h4>Hours</h4>
        <p>
            Wednesday & Thursday: 5:30 PM - 9:30 PM<br />
            Friday & Saturday: 5:00 PM - 10:00 PM<br />
            Sunday: 5:00 PM - 9:30 PM<br />
            Closed Monday & Tuesday<br />
        </p>
    </div>
</div>

            
            <hr />
            <br/>
            <div className="pic-des">
                <div className='first'>
                    <img id="img2" src="src\pictures\monal3.webp" alt="image shot at Yang's Kitchen" />
                    <p>Image shot on location at A L - K H A N  R E S T A U R A N T</p>
                </div>
            </div>
            <br/>
            <hr/>
                <Footer />
            </div>
         
    );
}

export default Aboutus;