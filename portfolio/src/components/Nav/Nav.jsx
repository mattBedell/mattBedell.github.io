import React from 'react';
import './Nav.css';









const Nav = (props) => (
  <div className="navBar">
    <div className="navButton" onClick={() => props.handleNavClick('about')}>About</div>
    <div>|</div>
    <div className="navButton" onClick={() => props.handleNavClick('project')}>My Work</div>
    <div>|</div>
    <div className="navButton" onClick={() => props.handleNavClick('contact')}>Contact</div>
  </div>
)


export default Nav;
