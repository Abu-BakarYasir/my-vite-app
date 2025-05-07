function Footer(){
    return(
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
    );
}
export default Footer;