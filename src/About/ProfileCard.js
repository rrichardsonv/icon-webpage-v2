import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      detailsVisibility: 'screen-hidden'
    }
    this.revealBlurb = this.revealBlurb.bind(this)
    this.hideBlurb = this.hideBlurb.bind(this)
  }
  revealBlurb () {
    this.setState({detailsVisibility: ''})
  }
  hideBlurb () {
    this.setState({detailsVisibility: 'screen-hidden'})
  }
  render () {
    const { name, title, headshot, blurb, character } = this.props.member
    return (
      <div
        onMouseOver={this.revealBlurb}
        onMouseOut={this.hideBlurb}
        className='item item-responsive'
      >
        <div className={`top-details ${this.state.detailsVisibility} profile-wrapper`}>
          <h3>{name}</h3>
          <strong>
            <p>{title}</p>
          </strong>
        </div>
        <div className='inner-wrapper'>
          <img
            className='event-card-bg'
            src={`${process.env.PUBLIC_URL}/headshots/${headshot}`}
          />
        </div>
        <div
          className={`container-fluid responsive-blurb bottom-details ${this.state.detailsVisibility} profile-wrapper`}
        >
          <div className='row'>
            <img
              className='col-sm-3 col-xs-3 main-character-icon'
              src={`${process.env.PUBLIC_URL}/characters/${character}`}
            />
            <span className='col-sm-9 col-xs-9'>{blurb}</span>
          </div>
        </div>
      </div>
    )
  }
}

const { string, shape } = PropTypes
ProfileCard.propTypes = {
  member: shape({
    name: string,
    title: string,
    headshot: string,
    character: string,
    blurb: string
  })
}

export default ProfileCard
