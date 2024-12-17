import React from 'react'
import './menubar.css'
import { Link } from 'react-scroll';

export default function MenuBar() {
  return (
    <div>
        <div className="menubar">
            <div className="menubar-name">
                Diani Dickovita
            </div>
            <div className="menubar-tabs">
                <Link to="home" spy={true} smooth={true} duration={500} className='link-menubar'>
                    Home
                </Link>

                <Link to="about" spy={true} smooth={true} duration={500} className='link-menubar'>
                    About
                </Link>

                <Link to="experience" spy={true} smooth={true} duration={500} className='link-menubar'>
                    Experience
                </Link>
                <Link to="project" spy={true} smooth={true} duration={500} className='link-menubar'>
                    Project
                </Link>
                <Link to="contact" spy={true} smooth={true} duration={500} className='link-menubar'>
                    Contact
                </Link>


            </div>

        </div>
    </div>
  )
}
