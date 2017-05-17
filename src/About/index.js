import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProfileCard from './ProfileCard'

class About extends Component {
  render () {
    return (
      <div className='container-flex main-content about'>
        {this.props.team.map((member) => {
          return (
            <ProfileCard key={member.id} member={member} />
          )
        })}
      </div>
    )
  }
}
const { arrayOf, object } = PropTypes
About.propTypes = {
  team: arrayOf(object)
}

export default About
