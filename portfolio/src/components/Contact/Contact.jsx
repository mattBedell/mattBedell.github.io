import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      body: '',
      componentOpacity: 0
    }
  }
  updateField(inputField, e) {
    this.setState({
      [inputField]: e.target.value
    })
  }
  submitForm() {
    console.log('submitted')
  }
  fade(delay) {
    if(this.props.selected === 'contact') {
      return {'opacity': `${this.state.componentOpacity}`, 'transition': 'opacity 1.5s', 'transitionDelay': `${delay}s`}
    } else {
      return {'opacity': '0', 'transition': 'opacity .5s', 'transitionDelay': '0s'}
    }
  }
  componentDidMount() {
    let lastOut = document.querySelector('.lastOut')
    lastOut.addEventListener('transitionend', () => {
      if(this.props.selected !== 'contact' && this.props.contentToDisplay === 'contact') {
        this.props.handleContentToDisplay()
      }
    })
    setTimeout(() => this.setState({componentOpacity: 1}))
  }
  render() {
    return(
      <div className='lastOut contact' style={this.fade(.1)}>
        <form action="javascript:void(0);" onSubmit={() => this.submitForm()}>
          <div className="nameEmailContainer">
            <div>
              <input id="name"type="text" autoCapitalize="words" required onChange={(e) => this.updateField('name', e)} />
              <label htmlFor="name">Name/Company</label>
            </div>
            <div>
              <input id="email" type="email" required onChange={(e) => this.updateField('email', e)} />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div>
            <textarea id="message" required onChange={(e) => this.updateField('body', e)} />
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit"></button>
        </form>
      </div>
    )
  }
}
export default Contact
