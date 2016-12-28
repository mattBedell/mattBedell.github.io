import React, { Component } from 'react'
import './About.css'

import { Timeline } from 'react-twitter-widgets'

class About extends Component {
  constructor(props) {
    super(props)
    this.twitter = 'wait for twitter frame to load'
  }
  componentDidMount() {
    document.querySelector('.twitter-timeline').setAttribute('data-height', '100%')
    document.querySelector('.twitter-timeline').setAttribute('data-width', '100%')
    const header = document.querySelector('.header')
    const content = document.querySelector('.content')
    const skills = document.querySelector('.skills')
    const aside = document.querySelector('.aside')
    setTimeout(() => {
      this.twitter = document.querySelector('#twitter-widget-0')
    }, 1000)
    header.addEventListener('transitionend', () => {
      if(this.props.selected === 'about') {
        header.style.visibility = 'visible'
      } else {
        header.style.visibility = 'hidden'
      }
    })
    content.addEventListener('transitionend', () => {
      if(this.props.selected === 'about') {
        content.style.visibility = 'visible'
      } else {
        content.style.visibility = 'hidden'
      }
    })
    skills.addEventListener('transitionend', () => {
      if(this.props.selected === 'about') {
        skills.style.visibility = 'visible'
      } else {
        skills.style.visibility = 'hidden'
      }
    })
    aside.addEventListener('transitionend', () => {
      if(this.props.selected === 'about') {
        aside.style.visibility = 'visible'
        this.twitter.style.visibility ='visible'
      } else {
        aside.style.visibility = 'hidden'
        this.twitter.style.visibility ='hidden'
      }
    })
  }
  componentDidUpdate() {
    // setTimeout(() => {
      if(this.props.selected === 'about') {
        this.twitter.style.transitionDelay = '0s'
        this.twitter.style.opacity = '1'
      } else {
        this.twitter.style.transitionDelay = '0s'
        this.twitter.style.opacity = '0'
      }
    // }, 1000)
  }
  fade(delay) {
    if(this.props.selected === 'about') {
      return {'visibility': 'visible', 'opacity': '1', 'transitionDelay': `${delay}s`}
    } else {
      return {'opacity': '0', 'transitionDelay': '0s'}
    }
  }
  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="header" style={this.fade(.1)}>
            <div className="headshot"></div>
            <div className="headline">
              <h3>I'm a learner that is also a developer</h3>
            </div>
            <div className="linkBar">
              <a href="https://github.com/mattBedell?tab=stars" target="_blank">Github</a>
              <a href="https://www.linkedin.com/in/matthewbedell" target="_blank">LinkedIn</a>
              <a href="https://twitter.com/mj_Bedell" target="_blank">Twitter</a>
            </div>
          </div>
          <div className="content" style={this.fade(.15)}>
            I'm a developer based in NYC. I have experience building full-stack web apps,
            responsive, mobile friendly websites, and I love to code.
            <br />
            <br />
            I have the most fun when I'm solving problems with code. I like to build
            backend servers with Node, and am proficient with postgreSQL, and MongoDB.
            <br />
            <br />
            I've recently rediscovered my love for the frontend
            with the help of React. I'm also proficient with HTML5 and CSS.
            <br />
            <br />
            Check out my most recent app: Asteroid-Tracker
          </div>
          <div className="skills" style={this.fade(.2)}>
            <div className="skillBox">React.js</div>
            <div className="skillBox">Node.js</div>
            <div className="skillBox">Express.js</div>
            <div className="skillBox">PostgreSQL</div>
            <div className="skillBox">Javascript</div>
            <div className="skillBox">jQuery</div>
            <div className="skillBox">GIT</div>
            <div className="skillBox">HTML5</div>
            <div className="skillBox">CSS</div>
          </div>
        </div>
        <div className="aside" style={this.fade(.3)}>
          <a className="twitter-timeline" data-width="200" data-height="400" data-dnt="true" href="https://twitter.com/mj_Bedell" style={{'visibility': 'hidden'}}>Tweets by mj_Bedell</a>
        </div>
      </div>
    )
  }
}


export default About
