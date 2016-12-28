import React, { Component } from 'react';
import './App.css';

import Nav from './Nav/Nav.jsx'
import About from './About/About.jsx'
import Projects from './Projects/Projects.jsx'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      selected: 'projects'
    }
  }
  handleNavClick(selection) {
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
        <About
          selected={this.state.selected}
        />
        <Projects
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default App;
