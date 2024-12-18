import React from 'react';
import './home.css'
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <Element name="home">
        <div className="home-page">
            <div className="home-page-image">
                <img src={process.env.PUBLIC_URL + '/mypic2.png'} alt='image'/>
            </div>
            <div className="home-page-name">
                <span className='home-page-name-hello'>
                    Hi, I'm
                </span>
                <span className='home-page-name-name'>
                    <b>Diani Dickovita</b>
                </span>
                <span className='home-page-name-position'>
                    Software Engineer

                </span>
                <a
                    href={process.env.PUBLIC_URL + '/cv.pdf'}
                    download="DianiDickovita_CV.pdf"
                >
                    <button>Download CV</button>
                </a>

                <div className="home-page-social-icons">
                    <a
                    href="https://www.linkedin.com/in/diani-dickovita-a47380221"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon icon={faLinkedin}  style={{color:'black', marginRight:'10px'}}/>
                    </a>

                    <a
                    href="https://github.com/DianiDickovita"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon icon={faGithub} style={{color:'black', marginRight:'10px'}} />
                    </a>
                </div>

            </div>

        </div>
    </Element>
  );
}

