import React, { Component } from 'react';
import './TechList.css'

class TechList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propTransition: false,
      componentOpacity: 0,
      techList: this.props.techList
    }
  }
  generateTechbox() {
    let transitionSpeed = 'opacity 1.5s';
    if(this.state.propTransition) {
      transitionSpeed = 'opacity 0s'
    } else {
      transitionSpeed = 'opacity 1.5s'
    }
    return(this.props.techList.map((tech, i) => {
      let transitionDelay = .2 + i/10;
      return (<div className="techBox" style={{'transition': `${transitionSpeed}`, 'opacity': `${this.state.componentOpacity}`, 'transitionDelay': `${transitionDelay}s`}} key={`tb${i}`}>{tech}</div>)
    }))
  }
  fade(delay, speed) {
    console.log(delay, speed);
    return {'transition': `${speed}`, 'opacity': `${this.state.componentOpacity}`, 'transitionDelay': `${delay}s`}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        componentOpacity: 1
      })
    })
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.techList !== nextProps.techList) {
      this.setState({
        propTransition: true,
        componentOpacity: 0
      })
      setTimeout(() => {
        this.setState({
          propTransition: false,
          componentOpacity: 1
        })
      }, 300)
    }
  }
  render() {
    return (
      <div className="TechList">
        {this.generateTechbox()}
      </div>
    )
  }
}

export default TechList
