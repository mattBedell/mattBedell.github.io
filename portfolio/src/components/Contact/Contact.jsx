import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      name: '',
      email: '',
      text: '',
      componentOpacity: 0,
      status: 'not sent'
    }
  }
  updateField(inputField, e) {
    this.setState({
      [inputField]: e.target.value
    })
  }
  submitForm() {
    this.setState({
      status: 'sending'
    })
    const {name, email, text} = this.state;
    const payload = {
      name,
      email,
      text
    }
    fetch('https://mb-portfolio-mail-sender.herokuapp.com/sendOut', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    }).then((res) => {
      if(res.ok) {
        console.log('response ok');
        this.setState({
          status: 'sent'
        })
      }
    })
  }
  fade(delay) {
    if(this.props.selected === 'contact') {
      return {'opacity': `${this.state.componentOpacity}`, 'transition': 'opacity 1.5s', 'transitionDelay': `${delay}s`}
    } else {
      return {'opacity': '0', 'transition': 'opacity .5s', 'transitionDelay': '0s'}
    }
  }
  checkSendStatus() {
    switch(this.state.status) {
      case 'sending':
      return(
        <div className="statusContainer">
          <div className="statusInfo">
            <div className="statusContent">SENDING</div>
            <div className="progressContainer">
              <div className="progressBar" style={{'animationDelay': '.2s'}}></div>
              <div className="progressBar" style={{'animationDelay': '.6s'}}></div>
              <div className="progressBar" style={{'animationDelay': '1s'}}></div>
            </div>
          </div>
        </div>
      )

      case 'sent':
      return(
        <div className="statusContainer">
          <div className="statusInfo">
            <div className="sendConfirm">Thank you for your message!</div>
          </div>
        </div>
      )

      default:
      return(<form action="javascript:void(0);" onSubmit={this.submitForm}>
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
        <div className="textContainer">
          <textarea id="message" type="text" required onChange={(e) => this.updateField('text', e)}></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button type="submit">Send</button>
      </form>)
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
        {this.checkSendStatus()}
      </div>
    )
  }
}
export default Contact
