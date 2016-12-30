import React, { Component } from 'react'
import './Projects.css'

import ProjectDisplay from './../ProjectDisplay/ProjectDisplay.jsx'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'pacman',
      componentOpacity: 0
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
      prev: document.querySelector('.navPacman'),
    })
    document.querySelector('.navTwitter').addEventListener('transitionend', () => {
      if(this.props.selected !== 'project' && this.props.contentToDisplay === 'project') {
        this.props.handleContentToDisplay()
      }
    })
    setTimeout(() => this.setState({componentOpacity: 1}))
  }
  fade(delay) {
    if(this.props.selected === 'project') {
      return {'opacity': `${this.state.componentOpacity}`, 'transitionDelay': `${delay}s`}
    } else {
      return {'opacity': '0', 'transitionDelay': '0s'}
    }
  }
  render() {
    return(
      <div className="projects-container">
        <div className="navList">
          <div className="nav navPacman" style={this.fade(.1)}onClick={(e) => this.handleClick('pacman', e)}> Pacman </div>
          <div className="nav navAsteroid" style={this.fade(.15)}onClick={(e) => this.handleClick('asteroid', e)}> Asteroid Tracker </div>
          <div className="nav navBlink" style={this.fade(.2)}onClick={(e) => this.handleClick('blink', e)}> Blink </div>
          <div className="nav navTwitter" style={this.fade(.25)}onClick={(e) => this.handleClick('twitter', e)}> Twitter </div>
        </div>
      <ProjectDisplay
        selected={this.state.selected}
      />
      </div>
    )
  }
}

export default Projects
