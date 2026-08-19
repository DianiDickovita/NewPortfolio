import React from 'react';
import './home.css';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <Element name="home">
      <div className="home-page">
        <div className="home-page-inner">
          <div className="home-page-image">
            <img src={process.env.PUBLIC_URL + '/mypicn.jpg'} alt="Diani Dickovita" />
            <span className="status-label">available for work</span>
          </div>

          <div className="home-page-editor">
            <div className="editor-tabbar">
              <div className="editor-tab">
                <span className="editor-tab-dot" aria-hidden="true"></span>
                home.jsx
              </div>
              <div className="editor-tab-actions" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="editor-body">
              <div className="editor-lines" aria-hidden="true">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
              </div>
              <div className="editor-code">
                <div className="code-line">
                  <span className="code-comment">// hello, I'm</span>
                </div>
                <div className="code-line">
                  <span className="code-key">const</span>{' '}
                  <span className="code-var">engineer</span>{' '}
                  <span className="code-punct">= {'{'}</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-prop">name</span>
                  <span className="code-punct">: </span>
                  <span className="code-string">"Diani Dickovita"</span>
                  <span className="code-punct">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-prop">role</span>
                  <span className="code-punct">: </span>
                  <span className="code-string">"Full-Stack Software Engineer"</span>
                  <span className="code-punct">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-prop">stack</span>
                  <span className="code-punct">: [</span>
                  <span className="code-string">"React/Vue"</span>
                  <span className="code-punct">, </span>
                  <span className="code-string">"Java/PHP"</span>
                  <span className="code-punct">, </span>
                  <span className="code-string">"mySQL"</span>
                  <span className="code-punct">],</span>
                </div>
                <div className="code-line">
                  <span className="code-punct">{'};'}</span>
                  <span className="code-cursor" aria-hidden="true"></span>
                </div>
              </div>
            </div>

            <div className="editor-statusbar">
              <div className="editor-statusbar-left">
                <span>Ln 6, Col 2</span>
                <span className="dot-sep">·</span>
                <span>UTF-8</span>
              </div>
              <div className="editor-statusbar-actions">
                
                  <a href={process.env.PUBLIC_URL + '/cv.pdf'}
                  download="Diani_Dickovita_CV.pdf"
                  className="cv-terminal-button"
                >
                  <span className="prompt-symbol">$</span> download resume
                </a>
                <div className="home-page-social-icons">
                  
                    <a href="https://www.linkedin.com/in/DianiDickovita"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  
                    <a href="https://github.com/DianiDickovita"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}