import React from 'react';
import { Element } from 'react-scroll';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <Element name="contact">
      <div className="contact-page">
        <div className="contact-page-topic">Get In Touch</div>

        <div className="contact-page-content">
          <a href="mailto:dianianjalika2000@gmail.com" className="contact-card">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div className="contact-title">Email</div>
            <div className="contact-detail">dianianjalika2000@gmail.com</div>
          </a>

          <a href="tel:+94717371316" className="contact-card">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div className="contact-title">Call</div>
            <div className="contact-detail">+94 71 737 1316</div>
          </a>

          <a 
            href="https://www.linkedin.com/in/diani-dickovita-a47380221" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
          >
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            <div className="contact-title">LinkedIn</div>
            <div className="contact-detail">Diani Dickovita</div>
          </a>
        </div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Diani Dickovita. All rights reserved.
      </footer>
    </Element>
  );
}