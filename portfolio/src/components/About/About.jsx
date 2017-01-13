import React, { Component } from 'react'
import './About.css'

import { Timeline } from 'react-twitter-widgets'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      componentOpacity: 0
    }
  }

  componentDidMount() {
    document.querySelector('.aside').addEventListener('transitionend', () => {
      if(this.props.selected !== 'about' && this.props.contentToDisplay === 'about') {
        this.props.handleContentToDisplay()
      }
    })
    setTimeout(() => this.setState({componentOpacity: 1}))
    setTimeout(() => {
      this.twitterTimeline = document.querySelector('.twitter-timeline')
      console.log(this.twitterTimeline);
    }, 1000)
    // document.querySelector('.twitter-timeline').setAttribute('data-width', '100%')
    // const aside = document.querySelector('.aside')
    // aside.addEventListener('transitionend', () => {
    //   if(this.props.selected === 'about') {
    //     // aside.style.visibility = 'visible'
    //     // this.twitter.style.visibility ='visible'
    //   } else {
    //     document.querySelector('.about-container').style.visibility = 'hidden'
    //     // aside.style.visibility = 'hidden'
    //     // this.twitter.style.visibility ='hidden'
    //   }
    // })
  }
  fade(delay) {
    if(this.props.selected === 'about' && this.props.contentToDisplay === 'about') {
      return {'opacity': `${this.state.componentOpacity}`, 'transition': 'opacity 1.5s', 'transitionDelay': `${delay}s`}
    } else {
      this.twitterTimeline.style.visibility = "hidden"
      return {'opacity': '0', 'transition': 'opacity .5s', 'transitionDelay': '0s'}
    }
  }
  render() {
      return (
        <div className="about-container">
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
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'mj_Bedell'
              }}
              options={{
                username: 'mj_Bedell',
                height: '60vh'
              }}
            />
          </div>
        </div>
      )
  }
}


export default About
