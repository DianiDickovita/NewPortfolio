import React from 'react';
import './home.css';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    return (
        <Element name="home">
            <div className="home-page">
                {/* Profile Image */}
                <div className="home-page-image">
                    <img src={process.env.PUBLIC_URL + '/mypic2.png'} alt="Diani Dickovita" />
                </div>

                {/* Name and Details */}
                <div className="home-page-name">
                    <span className="home-page-name-hello">Hello, I'm</span>
                    <span className="home-page-name-name">Diani Dickovita</span>
                    <span className="home-page-name-position">Software Engineer</span>

                    {/* Download CV Button */}
                    <a
                        href={process.env.PUBLIC_URL + '/cv.pdf'}
                        download="DianiDickovita_CV.pdf"
                    >
                        <button>Download CV</button>
                    </a>

                    {/* Social Icons */}
                    <div className="home-page-social-icons">
                        <a
                            href="https://www.linkedin.com/in/diani-dickovita-a47380221"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href="https://github.com/DianiDickovita"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
        </Element>
    );
}