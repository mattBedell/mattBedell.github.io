import React, { Component } from 'react'
import './Projects.css'

import ProjectDisplay from './../ProjectDisplay/ProjectDisplay.jsx'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayProject: 'pacman',
      componentOpacity: 0
    }
  }
  handleClick(selected, e) {
    let navPrev = this.state.navCurrent;
    let navCurrent = e.target.nextElementSibling
    if(navPrev !== navCurrent) {
      navPrev.style.width = '98%'
      navPrev.style.opacity = '.7'
    }
    navCurrent.style.width = '100%'
    navCurrent.style.opacity = '1'
    this.setState({
      displayProject: selected,
      navCurrent,
      navPrev

    })


  }
  componentDidMount() {
    let lastOut = document.querySelector('.lastOut')
    lastOut.addEventListener('transitionend', () => {
      if(this.props.selected !== 'project' && this.props.contentToDisplay === 'project') {
        this.props.handleContentToDisplay()
      }
    })
    let defaultSelected = document.querySelector('.projPacman').nextElementSibling
    this.setState({
      navCurrent: defaultSelected,
      navPrev: defaultSelected
    })
    setTimeout(() => this.setState({componentOpacity: 1}))
  }
  fade(delay) {
    if(this.props.selected === 'project') {
      return {'opacity': `${this.state.componentOpacity}`, 'transition': 'opacity 1.5s', 'transitionDelay': `${delay}s`}
    } else {
      return {'opacity': '0', 'transition': 'opacity .5s', 'transitionDelay': '0s'}
    }
  }
  render() {
    return(
      <div className="projects-container">
        <div className="navList">
          <div className="navPacman nav" style={this.fade(.1)}>
            <div className="projPacman projButton" onClick={(e) => this.handleClick('pacman', e)}>Pacman</div>
            <div className="navBg"></div>
          </div>
          <div className="nav" style={this.fade(.15)}>
            <div className="projButton" onClick={(e) => this.handleClick('asteroid', e)}>Asteroid Tracker</div>
            <div className="navBg"></div>
          </div>
          <div className="nav" style={this.fade(.2)}>
            <div className="projButton" onClick={(e) => this.handleClick('blink', e)}>Blink</div>
            <div className="navBg"></div>
          </div>
          <div className="lastOut nav" style={this.fade(.25)}>
            <div className="projButton" onClick={(e) => this.handleClick('twitter', e)}>Twitter</div>
            <div className="navBg"></div>
          </div>
        </div>
        <div className="projectDisplayContainer" style={this.fade(.4)}>
          <ProjectDisplay
            selected={this.state.displayProject}
          />
        </div>
      </div>
    )
  }
}

export default Projects
