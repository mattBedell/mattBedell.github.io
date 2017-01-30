import React, { Component } from 'react';
import './TechList.css'

class TechList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeIn: true,
      componentOpacity: 0,
      techList: this.props.techList,
      transitionSpeed: '1.5s'
    }
  }
  generateTechbox() {
    return(this.state.techList.map((tech, i) => {
      return (<div className="techBox" style={this.fade(.2 + i/10)} key={`tb${i}`}>{tech}</div>)
    }))
  }
  fade(delay) {
    return {'opacity': `${this.state.componentOpacity}`, 'transitionDelay': `${delay}s`, 'transition': `${this.state.transitionSpeed}`}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        componentOpacity: 1
      })
    })
  }
  componentWillReceiveProps(nextProps) {
    if(this.state.techList !== nextProps.techList) {
      this.setState({
        techList: nextProps.techList,
        componentOpacity: 0
      })
    }
    setTimeout(() => {
      this.setState({
        componentOpacity: 1
      })
    })
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
