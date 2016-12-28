import React, { Component } from 'react';
import './App.css';

import Nav from './Nav/Nav.jsx'
import About from './About/About.jsx'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      selected: 'about'
    }
  }
  handleNavClick(selection) {
    //console.log(this);
    console.log(selection);
    this.setState({
      selected: selection
    })
  }

  render() {
    return (
      <div className="App">
        <div className="backgroundImg"></div>
        <Nav
          handleNavClick={(selection) => this.handleNavClick(selection)}
        />
        <About />
      </div>
    );
  }
}

export default App;
