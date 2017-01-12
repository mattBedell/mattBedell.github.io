import React, { Component } from 'react';
import './App.css';

import Nav from './Nav/Nav.jsx'
import About from './About/About.jsx'
import Projects from './Projects/Projects.jsx'
import Contact from './Contact/Contact.jsx'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      selected: 'about',
      contentToDisplay: 'about'
    }
  }
  handleNavClick(selection) {
    this.setState({
      selected: selection
    })
  }
  handleContentToDisplay() {
    this.setState({
      contentToDisplay: this.state.selected
    })
  }
  renderSection() {
    switch(this.state.contentToDisplay) {
      case 'about':
      return (<About
        selected={this.state.selected}
        contentToDisplay={this.state.contentToDisplay}
        handleContentToDisplay={() => this.handleContentToDisplay()}
      />)
      case 'project':
      return (<Projects
        selected={this.state.selected}
        contentToDisplay={this.state.contentToDisplay}
        handleContentToDisplay={() => this.handleContentToDisplay()}
      />)
      case 'contact':
      return (<Contact
        selected={this.state.selected}
        contentToDisplay={this.state.contentToDisplay}
        handleContentToDisplay={() => this.handleContentToDisplay()}
      />)
      default:
      console.log('nav error')
    }
  }

  render() {
    return (
      <div className="App">
        <div className="backgroundImg"></div>
        <Nav
          handleNavClick={(selection) => this.handleNavClick(selection)}
        />
        {this.renderSection()}
      </div>
    );
  }
}

export default App;
