import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './project.css'

export default function Project() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const [isModalOpenT, setModalOpenT] = useState(false);

    const openModalT = () => setModalOpenT(true);
    const closeModalT = () => setModalOpenT(false)
  return (
    <Element name='project'>
    <div className="project-page">
        <div className="project-page-topic">
            <b>University Project</b>
        </div>

        <div className="project-page-content">
            <div className="project-one">
                <span>Information Management System For Apparel Factory</span>
                <img src={process.env.PUBLIC_URL + '/rlf-logo.png'} alt='logo'/>
                <ul>
                    <li>Technologies - PHP, HTML, CSS, MySql, JavaScript</li>
                </ul>
                <div className='project-button'>
                    <a href='https://github.com/DianiDickovita/rlf' target="_blank" rel="noopener noreferrer">                
                        Git Repo     
                    </a>
                    <button onClick={openModal}>More Info</button>
                </div>
            </div>

            {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal" style={{fontSize:'15px'}}>
                <h2>Information Management System for Apparel Factory</h2>
                <p>👗 Introducing the Information Management System for Apparel Factory, a cutting-edge solution designed to optimize and modernize operations at RLF Apparel Factory in Sri Lanka. Our system replaces traditional manual methods with an integrated, web-based approach to enhance inventory management, employee coordination, and supply chain operations.</p>

                <p>🧑‍💼 <strong>Manager Empowerment:</strong> The Manager acts as the system administrator, overseeing user roles, raw materials, costume designs, and employee hierarchy with ease.</p>

                <p>👗 <strong>Streamlined Design Process:</strong> Fashion Designers can efficiently create and manage costume designs using tools tailored to their creative needs.</p>

                <p>💼 <strong>Merchandiser Efficiency:</strong> Merchandisers can seamlessly handle quotations, orders, and payments, streamlining the entire workflow.</p>

                <p>👥 <strong>Customer Engagement:</strong> Customers can explore a wide range of costume designs, request customizations, and place orders based on real-time quotations provided through the platform.</p>

                <p>🔗 <strong>Supplier Collaboration:</strong> Suppliers can view raw material requirements, submit quotations, and process purchase requests, ensuring smooth supply chain coordination.</p>

                <p>🌟 The Information Management System fosters seamless communication, improves operational efficiency, and enhances satisfaction for all stakeholders in the apparel industry.</p>

                {/* <p>The "Information Management System for Apparel Factory" is a comprehensive web-based 
                    application designed to revolutionize and optimize the operational 
                    landscape of the apparel manufacturing industry, with a specific 
                    focus on the esteemed RLF Apparel Factory in Sri Lanka. At its core,
                    the project seeks to address the inefficiencies associated with 
                    traditional manual methods prevalent in garment factories. 
                    The system aims to introduce a sophisticated and integrated 
                    solution that spans the entire spectrum of apparel manufacturing,
                    encompassing crucial functionalities such as inventory management,
                    employee roles, customer interactions, and supply chain coordination.</p>
                <p>The system boasts a multifaceted set of functionalities
                    tailored to the diverse roles within the apparel factory.
                    Actors include the Manager, Fashion Designer, Merchandiser,
                    Customer, and Suppliers. The Manager, serving as the system
                    administrator, has the privilege of managing users, 
                    raw materials, costume designs, and overseeing the 
                    entire employee hierarchy. Fashion Designers can 
                    efficiently manage costume designs, while Merchandisers
                     handle quotations, orders, and payments. Customers, after 
                    signing up, can explore costume designs, request
                    customized designs, and place orders based on quotations
                    received. Suppliers, on the other hand, can view raw 
                    materials, send quotations, and handle purchase requests.
                    The system's architecture facilitates seamless 
                    communication and coordination among these actors,
                    enhancing overall operational efficiency and customer
                    satisfaction.</p> */}
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
            )}

            <div className="project-two">
                <span> Event Music Booking and Artist Management Platform</span>
                <img src={process.env.PUBLIC_URL + '/mhunter-logo.png'} alt='logo'/>
                <ul>
                    <li>Technologies - Java, React, Springboot, MySql</li>
    
                </ul>
                <div className='project-button'>
                    <a href='https://github.com/DianiDickovita/MHUNTER' target="_blank" rel="noopener noreferrer">                
                        Git Repo     
                    </a>
                    <button onClick={openModalT}>More Info</button>
                </div>
            </div>

            {isModalOpenT && (
            <div className="modal-overlay">
              <div className="modal" style={{fontSize:'15px'}}>
                <h2> Event Music Booking and Artist Management Platform</h2>
                <p>🎵 Introducing MHunter, your ultimate destination 
                    for all things music! MHunter directly connects 
                    event organizers with music artists and bands, 
                    bypassing the need for intermediaries like booking 
                    agents and brokers. Our user-friendly and efficient 
                    system caters to both organizers and talented artists, 
                    offering a seamless experience.</p>
                <p> 🌟 Simplified Event Organization: MHunter allows 
                    organizers to effortlessly create, reschedule, 
                    or cancel events with ease. Our platform 
                    ensures smooth communication with the hired 
                    talent, making event management a breeze.</p>

                <p> 🎸 Talent without Barriers: No matter 
                    if you're an experienced artist or not,
                     MHunter values talent above all else. 
                     We welcome all, regardless of their 
                     experience level. If you've got the 
                     skills, you belong here!</p>

                <p>💡 Expert Moderation: With vigilant 
                moderators, MHunter maintains a safe 
                and authentic environment. We verify 
                user registrations to ensure only genuine 
                artists and bands join the platform. Additionally, 
                any complaints are handled with care and 
                efficiency to ensure a harmonious experience.</p>

                <p>🎶 Empowering Artists: You can freely accept or 
                decline booking requests on your terms. Set your 
                own rules and conditions for each performance, 
                ensuring a perfect match with event organizers.</p>

                <p>🥁 Fairness and Transparency: MHunter is 
                committed to fairness. If a booking needs 
                to be canceled, we facilitate a smooth refund 
                process, ensuring fairness for both artists and organizers.</p>

                <p>📸 Showcasing Performances: Showcase your 
                performances through updates, captivating photos, 
                and engaging videos to impress potential organizers.</p>

                <p>💰 Track Your Success: MHunter's intuitive income
                reports offer a comprehensive overview of your 
                payments, providing valuable insights into your success.</p>
                <button onClick={closeModalT}>Close</button>
              </div>
            </div>
            )}
        </div>
    </div>
  
</Element>


  )
}
