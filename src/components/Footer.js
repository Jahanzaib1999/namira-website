import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">Namira Saloon</div>
      <div className="footer-contact-container">
        <div className="footer-shop-hours-container">
          <h2>Shop Hours</h2>
          <div>Everyday</div>
          <div>9AM - 11PM</div>
        </div>
        <div className="footer-contact-info-container">
          <h2>Contact</h2>
          <div>
            <a href="mailto:namirasaloon1986@gmail.com">
              namirasaloon1986@gmail.com
            </a>
          </div>
          <div>Phone: 555-1234</div>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; 2023 Namira Saloon. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
