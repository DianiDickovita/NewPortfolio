import React from 'react';
import './aboutme.css';
import { Element } from 'react-scroll';

export default function AboutMe() {
  return (
    <Element name="about">
      <div className="about-page">
        <div className="about-page-text">
          <div className="about-page-text-topic">About Me</div>
          
          <div className="about-page-text-description">
            <p>
              Software Engineer with 2.5+ years of hands-on experience independently delivering well-engineered code across the full software development lifecycle - from design, implementation, and testing through deployment and production support for enterprise platforms serving 20+ corporate clients.
            </p>
          </div>

          <div className="about-page-text-education">
            <h3>Education</h3>
            <ul className="education-list">
              <li className="education-item">
                <h4>Master of Computer Technology</h4>
                <p>University of Colombo School of Computing (UCSC) - In Progress</p>
                <p className="sub-text">Pursuing part-time alongside full-time work; focused on software engineering and systems fundamentals.</p>
              </li>

              <li className="education-item">
                <h4>B.Sc. in Information Systems</h4>
                <p>University of Colombo School of Computing (UCSC) | 2021 – 2024</p>
                <p className="sub-text">Second Class Lower Division. Coursework: Database Systems, Software Engineering, Systems Analysis, Computer Networks, Software Project Management.</p>
              </li>

              <li className="education-item">
                <h4>Diploma in Information and Communication Technology (ICT)</h4>
                <p>ICBT Campus | 2020</p>
                <p className="sub-text">Foundational studies in computing, programming fundamentals, networking, and digital systems.</p>
              </li>

              <li className="education-item">
                <h4>GCE A/L - Physical Science</h4>
                <p>Combined Maths: A | Chemistry: B | Physics: C (2019)</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-page-image">
          <img src={process.env.PUBLIC_URL + '/anpic.jpg'} alt="Diani Dickovita" />
        </div>
      </div>
    </Element>
  );
}