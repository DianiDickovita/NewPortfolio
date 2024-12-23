import React from 'react'
import './experience.css'
import { Element } from 'react-scroll';

export default function Experience() {
  return (
    <Element name='experience'>
        <div className="experience-page">
            <div className="experience-page-topic">
                <b>Experience</b>
            </div>

            {/* <div style={{ padding: '10px',paddingLeft:'200px', paddingRight:'200px' }}>

                <span style={{ fontSize: '20px'}}><b><i>One Year Industrial Experience</i></b></span>
                <span style={{ fontSize: '20px'}}><b><i> at  Ceylon Linux (Pvt) Ltd</i></b></span>

                <p style={{ fontSize: '18px'}}>
                During my internship as a Software Engineer at Ceylon Linux (Pvt) Ltd, 
                a product-based software company specializing in Sales Force Automation Systems (SFA), 
                I worked extensively on several projects including Darley Butler, 
                Lakmee, Suwanda, NBC, JAT, and CW Mackie PLC. I demonstrated proficiency in 
                full-stack software development, creating new reports and features to enhance 
                data analysis capabilities. My contributions also included fixing issues, developing and 
                optimizing report exports, and improving functionality across various projects, showcasing 
                my dedication to delivering high-quality software solutions.</p>
                <p style={{ fontSize: '18px'}}>
                Technologies Used:<b> Laravel, CodeIgniter, MySQL, Vue.js, Postman, GitLab, Linux environment</b>.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <img src={process.env.PUBLIC_URL + '/of.png'} alt='image' style={{ width:'200px'}}/>
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt='image' style={{ height:'150px'}}/>
                </div>

            </div> */}

            
            <div className='experience-page-body'>
                <span style={{ fontSize: '18px' }}>
                    <b><i>One Year Industrial Experience</i></b>
                    <b><i>at Ceylon Linux (Pvt) Ltd</i></b>
                </span>

                <p style={{ fontSize: '18px', marginTop: '10px' }}>
                    During my one year at Ceylon Linux (Pvt) Ltd, I contributed as a Software Engineer Intern and subsequently as a Software Developer. 
                    The company specializes in Sales Force Automation Systems (SFA), and I actively worked on projects for clients like Darley Butler, Lakmee, 
                    Suwanda, Siddhalepa, Maliban, Emerchemie, NBC, JAT, and CW Mackie PLC. My role involved full-stack development, where I:
                    <ul style={{ marginLeft: '20px' }}>
                        <li>Developed and optimized complex reports, improving their accuracy and performance.</li>
                        <li>Designed and implemented database structures and CRUD operations for efficient data management.</li>
                        <li>Developed several APIs for GET and POST requests to retrieve data from the database and insert data into the database for the app.</li>
                        <li>Resolved critical software issues, ensuring system reliability and stability.</li>
                        <li>Enhanced application performance by reducing report load times and improving processing efficiency.</li>
                    </ul>
                </p>
                <p style={{ fontSize: '18px', marginTop: '10px' }}>
                    <b>Technologies Used:</b> Laravel, CodeIgniter, MySQL, Vue.js, Postman, GitLab, and Linux environment.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                    <img src={process.env.PUBLIC_URL + '/of.png'} alt="Project Image 1" style={{ width: '200px' }} />
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Project Image 2" style={{ height: '150px' }} />
                </div>
            </div> 
           




            <span style={{paddingTop:'50px'}} className="experience-page-topic" ><b>Experience with Languages</b></span>
            <div className="experience-page-content">
                <div className="experience-frontend-development">
                    <span>Frontend Development</span>
                    <ul>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Vue.js</li>

                    </ul>
                </div>
                <div className="experience-backend-development">
                    <span>Backend Development</span>
                    <ul>
                        <li>Java</li>
                        <li>PHP</li>
                        <li>Springboot</li>
                        <li>Laravel</li>
                        <li>CodeIgniter</li>
                    </ul>
                </div>
                <div className="experience-backend-development">
                    <span>Database</span>
                    <ul>
                        <li>MySQL</li>

                    </ul>
                </div>
            </div>
            <span >
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" className='images'/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" className='images'/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" className='images'/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" className='images'/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" className='images'/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" className='images'/>
                <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" className='images'/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" className='images'/>
            </span>
            <span>
                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" className='images'/>
                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" className='images'/>
            </span>
        </div>
      
    </Element>
  )
}
