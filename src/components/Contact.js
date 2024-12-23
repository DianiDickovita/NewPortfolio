import React from 'react'
import { Element } from 'react-scroll';
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as faLinkedinBrand } from '@fortawesome/free-brands-svg-icons';
import { faCopyright as faCopyrightRegular } from '@fortawesome/free-regular-svg-icons';

export default function Contact() {
  return (
    <Element name='contact'>
      <div className="contact-page">
            <div className="contact-page-topic">
                <b>Contact</b>
            </div>

            <div className="contact-page-content">
                <div className="contact-email">
                    <div>
                        <div><FontAwesomeIcon icon={faEnvelope} /></div>
                        <div>Email</div>
                        <div>dianianjalika2000@gmail.com</div>
                    </div>
                </div>
                <div className="contact-call">
                    <div>
                        <div><FontAwesomeIcon icon={faPhone} /></div>
                        <div>Call</div>
                        <div>071 7371316</div>
                    </div>
                    

                </div>
                <div className="contact-linkedin">
                    <div>
                        <div><FontAwesomeIcon icon={faLinkedinBrand} /></div>
                        <div>Linkedin</div>
                        <div>Diani Dickovita</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="footer">
            copyright <FontAwesomeIcon icon={faCopyrightRegular} /> diani. All right reserved.
        </div>
    </Element>
  )
}
