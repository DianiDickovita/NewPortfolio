import React from 'react';
import './aboutme.css';
import { Element } from 'react-scroll';

export default function AboutMe() {
  return (
    <Element name="about">
    <div className='about-page'>
      <div className='about-page-text'>
        <div className='about-page-text-topic'>
          <b>About Me</b>
        </div>
        <div className='about-page-text-education'>
          <span>Education</span>
          <div>
          <ul style={{ listStyleType: 'square' }}>
            <li>
              B.Sc Information Systems
              <br />
              University of Colombo School of Computing (2021-2024)
              <br />
              GPA- 3.05

            </li>
            <li>
              Diploma in Information and Communication Technology (2020)
            </li>
            <li>
              GCE A.L - Maths(2019)
              <br />
              (Combined Maths-A, Chemistry-B, Physics-C)
            </li>
          </ul>
          </div>
        </div>
        <div className='about-page-text-description'>
          <p><i>
          "I'm D.K. Diani Anjalika. I have completed a degree in 
          Information Systems at the University of Colombo School of Computing. 
          From back-end databases to front-end user interfaces, 
          I thrive in the entire software development life cycle. 
          I enjoy unraveling complex challenges and turning them into elegant and scalable solutions."
          </i></p>
        </div>
      </div>
      <div className='about-page-image'>
        <img src={process.env.PUBLIC_URL + '/image.jpeg'} alt='image' />
      </div>
    </div>
    </Element>
  );
}
