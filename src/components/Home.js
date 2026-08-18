import React from 'react';
import './home.css';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <Element name="home">
      <div className="home-page">
        <div className="home-page-image">
          <img src={process.env.PUBLIC_URL + '/mypic2.png'} alt="Diani Dickovita" />
        </div>

        <div className="home-page-name">
          <span className="home-page-name-hello">Hello, I'm</span>
          <span className="home-page-name-name">Diani Dickovita</span>
          <span className="home-page-name-position">Full-Stack Software Engineer</span>

          <a
            href={process.env.PUBLIC_URL + '/cv.pdf'}
            download="Diani_Dickovita_CV.pdf"
            className="cv-button"
          >
            Download CV
          </a>

          <div className="home-page-social-icons">
            <a
              href="https://www.linkedin.com/in/DianiDickovita"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/DianiDickovita"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
}