import React, { Component } from 'react'
import Proptypes from 'prop-types'
import EventCard from './EventCard'

class Events extends Component {
  render () {
    const cons = this.props.cons
    return (
      <div className='container mg-t-1 main-content'>
        {cons.map((con) => <EventCard key={con.id} {...con} />)}
      </div>
    )
  }
}
const { arrayOf, object } = Proptypes
Events.propTypes = {
  cons: arrayOf(object)
}

export default Events
