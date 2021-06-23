import React from 'react';
import "./css/main.scss"
import huddleLogo from "./images/logo.svg"
import illustration from "./images/illustration-mockups.svg"

// Front Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
  
    <div className="layout">
      <header className="header">
        <img src={huddleLogo} alt="Huddle" className="header__logo" />
      </header>

      <main className="main">
        <img src={illustration} alt="Illustration" className="main__illustration" />
        <div className="main__text">
          <h1 className="main__h1">
            Build The Community Your Fans Will Love
          </h1>
          <p className="main__paragraph">
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. 
          </p>
          <button>Register</button>
        </div>
      </main>

      <footer className="footer">
        <a href="#root">
            <div className="footer__socials-icon">
              <FontAwesomeIcon icon={faFacebookF} className="facebook" />
            </div>
          </a>
          <a href="#root">
            <div className="footer__socials-icon">
              <FontAwesomeIcon icon={faTwitter} className="twitter" />
            </div>
          </a>
          <a href="#root">
            <div className="footer__socials-icon">
              <FontAwesomeIcon icon={faInstagram} className="instagram" />
            </div>
          </a>
      </footer>
    </div>
    );
}

export default App;
