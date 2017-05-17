import React, { Component } from 'react'
import SocialMedia from './SocialMedia'

class Footer extends Component {
  render () {
    return (
      <footer className='container-fluid footer-bar'>
        <div className='row'>
          <SocialMedia />
        </div>
      </footer>
    )
  }
}

export default Footer
