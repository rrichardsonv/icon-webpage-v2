import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EventCard extends Component {
  render () {
    const { title, startDate, endDate, tickets, url } = this.props
    return (
      <div className='item item-responsive'>
        <div className='inner-wrapper'>
          <img className='event-card-bg' src={`${process.env.PUBLIC_URL}/img/logo.png`} />
        </div>
        <div className='overlay' />
        <div className='overview'>
          <h3>{title}</h3>
          <p>{`${startDate} -- ${endDate}`}</p>
        </div>
        <div className='details-wrapper'>
          <div className='btn-group-vertical inner-wrapper'>
            <a className='btn btn-danger btn-xs' href={url}>More info</a>
            <a className='btn btn-danger btn-xs' href={tickets}>Get tickets</a>
            <a className='btn btn-danger btn-xs' href={tickets}>Tournaments</a>
          </div>
        </div>
      </div>
    )
  }
}
const { string, arrayOf, object } = PropTypes

EventCard.propTypes = {
  title: string,
  start_date: string,
  end_date: string,
  tickets: string,
  location: string,
  url: string,
  sponsors: arrayOf(object)
}

export default EventCard
