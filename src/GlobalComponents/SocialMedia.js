import React, { Component } from 'react'

class SocialMedia extends Component {
  render () {
    return (
      <fieldset className='btn-group-justified'>
        <a href='#' className='btn social'><i className='fa fa-facebook fa-3x' /></a>
        <a href='#' className='btn social'><i className='fa fa-twitter fa-3x' /></a>
        <a href='#' className='btn social'>
        <span className='dot-gg-icon'>.GG</span>
        </a>
        <a href='#' className='btn social'><i className='fa fa-camera-retro fa-3x' /></a>
        <a href='#' className='btn social'><i className='fa fa-twitch fa-3x' /></a>
        <a href='#' className='btn social'><i className='fa fa-youtube fa-3x' /></a>
      </fieldset>
    )
  }
}

export default SocialMedia
