import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Rule extends Component {
  render () {
    const { name, icon, text } = this.props
    return (
      <div className='rules-column col-xs-12 col-sm-12 col-md-4'>
        <div className='row middle-xs'>
          <div className='col-xs-2 col-sm-1 col-md-2'>
            <img src={icon} />
          </div>
          <div className='col-xs-10 col-sm-3 col-md-10'>
            <h4>{name}</h4>
          </div>
          <div className='col-xs-12 col-sm-7 col-md-12'>
            <p>{text}</p>
          </div>
        </div>
      </div>
    )
  }
}
const { string } = PropTypes

Rule.propTypes = {
  name: string,
  icon: string,
  text: string
}

export default Rule
