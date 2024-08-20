import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';


function Footer() {
  return (
    <footer className="page-footer blue absolute">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <p className="grey-text text-lighten-4">
              Embrace the power of our app and unlock the secrets of the universe, one quiz at a time. 
              <br /> As I always say, 'Yesterday is history, tomorrow is a mystery, but today is a gift.
              <br /> That is why it is called the present.'
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><Link className="grey-text text-lighten-3" to="/">Home</Link></li>
              <li><Link className="grey-text text-lighten-3" to="/Account">Account</Link></li>
              <li><Link className="grey-text text-lighten-3" to="/quiz-generation">Quiz Generation</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container" style={{width: '80%'}}>
          Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
