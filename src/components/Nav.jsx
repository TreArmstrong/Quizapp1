import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import './Nav.css';
// import './Quiz'
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-wrapper blue absolute">
      <div className="brand-logo">
        <Link to="/" onClick={() => setIsOpen(false)}>LRNR</Link>
      </div>
      <ul id="nav-mobile" className={`right hide-on-med-and-down ${isOpen ? 'open' : ''}`}>
        <li><Link to="/account" onClick={() => setIsOpen(false)}>Account</Link></li>
        <li><Link to="/quiz-generation" onClick={() => setIsOpen(false)}>Quiz Generator</Link></li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        
      </div>
    </nav>
  );
}

export default Nav;
