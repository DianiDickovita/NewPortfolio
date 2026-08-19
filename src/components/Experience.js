import React from 'react';
import './experience.css';
import { Element } from 'react-scroll';

export default function Experience() {
  return (
    <Element name="experience">
      <div className="experience-page">
        <div className="experience-page-topic">Work Experience (2.5+ Years)</div>

        {/* Elevex Technologies */}
        <div className="experience-card">
          <div className="experience-header">
            <h3>Software Engineer - Full Stack</h3>
            <span className="experience-company">Elevex Technologies Pvt Ltd | Jun 2024 – Present</span>
          </div>

          <ul className="experience-list">
            <li>Independently designed, developed, tested, and deployed 500+ RESTful APIs and full-stack feature modules applying OOP/SOLID principles, design patterns, and MVC architecture.</li>
            <li>Conducted root cause analysis to independently resolve 800+ production incidents across live client environments serving 20+ corporate clients.</li>
            <li>Built and maintained real-time system integration APIs to synchronize data between two business platforms in production.</li>
            <li>Optimized MySQL queries and indexing, improving report-generation performance by 75% (reducing execution time from 12s to under 3s).</li>
            <li>Wrote unit tests and collaborated closely with QA on integration testing to maintain code quality and coverage.</li>
            <li>Managed code delivery via Git-based branching workflows and GitLab CI/CD pipelines across Dev, QA, and Production environments.</li>
            <li>Mentored junior engineers on established development and support practices, participating in code reviews to uphold quality standards.</li>
          </ul>

          <p className="tech-stack-p">
            <strong>Technologies:</strong> Laravel, Vue.js, PHP, MySQL, RESTful APIs, Git, GitLab CI/CD, Agile/Scrum
          </p>
        </div>

        {/* Ceylon Linux */}
        <div className="experience-card">
          <div className="experience-header">
            <h3>Software Engineer Intern</h3>
            <span className="experience-company">Ceylon Linux (Pvt) Ltd | Dec 2023 – May 2024</span>
          </div>

          <ul className="experience-list">
            <li>Built software modules for internal web applications using PHP, applying MVC principles to reporting dashboards and data entry features.</li>
            <li>Analyzed and optimized complex SQL queries across application modules to improve production database performance.</li>
            <li>Collaborated with senior engineers on debugging and root cause analysis, participating in Git-based code reviews.</li>
          </ul>

          <p className="tech-stack-p">
            <strong>Technologies:</strong> PHP, MySQL, MVC Architecture, Git, Web Application Development
          </p>
        </div>

        {/* Academic & Personal Projects */}
        {/* <div className="experience-page-topic">Featured Projects</div>

        <div className="projects-grid">
          <div className="project-card">
            <h4>Band Artist Management System</h4>
            <p className="project-tech">Spring Boot · React.js · MySQL</p>
            <p>Architected a full-stack system end-to-end, applying OOP/MVC design principles with secure, role-based session authentication and a normalized MySQL schema.</p>
          </div>

          <div className="project-card">
            <h4>Gym Social Media Platform</h4>
            <p className="project-tech">Java Spring Boot · React.js · MySQL</p>
            <p>Independently designed and built a full-stack social platform, implementing authentication, relational data modeling, and REST APIs for client-server communication.</p>
          </div>

          <div className="project-card">
            <h4>Library Management System</h4>
            <p className="project-tech">Java · MySQL</p>
            <p>Collaborated in a 5-person team, contributing to a secure authentication module and a request-management workflow via an admin dashboard.</p>
          </div>
        </div> */}

        {/* Technical Skills */}
        <div className="experience-page-topic">Technical Skills</div>

        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages & Frameworks</h4>
            <ul>
              <li>PHP (Laravel)</li>
              <li>Java (Spring Boot)</li>
              <li>JavaScript (ES6+)</li>
              <li>Vue.js</li>
              <li>React.js</li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Engineering & Practice</h4>
            <ul>
              <li>OOP & SOLID Principles</li>
              <li>Design Patterns & MVC</li>
              <li>RESTful API Design</li>
              <li>Unit Testing & QA</li>
              <li>Root Cause Analysis</li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>Databases & DevOps</h4>
            <ul>
              <li>MySQL (Schema & Indexing)</li>
              <li>Git / GitLab / GitHub</li>
              <li>GitLab CI/CD</li>
              <li>Agile / Scrum</li>
            </ul>
          </div>
        </div>

        <div className="tech-icons-container">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="tech-icon" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="tech-icon" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-icon" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP" className="tech-icon" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg" alt="Laravel" className="tech-icon" />
          <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Spring" className="tech-icon" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" className="tech-icon" />
          <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" className="tech-icon" />
        </div>
      </div>
    </Element>
  );
}