import React, { Component } from 'react'
import './Projects.css'

import ProjectDisplay from './../ProjectDisplay/ProjectDisplay.jsx'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'pacman',
    }
  }
  handleClick(selected, e) {
    e.target.style.width = "100%"
    if(this.state.prev && this.state.prev !== e.target) {
      this.state.prev.style.width = "98%"
    }
    this.setState({
      selected: selected,
      prev: e.target
    })
  }
  componentDidMount() {
    this.setState({
      prev: document.querySelector('.navPacman')
    })
  }
  render() {
    return(
      <div className="projects-container">
        <div className="navList">
          <div className="nav navPacman" style={{'width': '100%'}}onClick={(e) => this.handleClick('pacman', e)}> Pacman </div>
          <div className="nav navAsteroid" onClick={(e) => this.handleClick('asteroid', e)}> Asteroid Tracker </div>
          <div className="nav navBlink" onClick={(e) => this.handleClick('blink', e)}> Blink </div>
          <div className="nav navTwitter" onClick={(e) => this.handleClick('twitter', e)}> Twitter </div>
        </div>
      <ProjectDisplay
        selected={this.state.selected}
      />
      </div>
    )
  }
}

export default Projects
