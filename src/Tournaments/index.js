import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Rule from './Rule'

class Tournaments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ruletype: 'general'
    }
    this._handleRuleFilterClick = this._handleRuleFilterClick.bind(this)
  }
  _handleRuleFilterClick (ev) {
    this.setState({ ruletype: ev.target.value })
  }
  render () {
    const rules = this.props.rules
    const categories = Array.from(new Set(rules.map((rule) => rule.category)))
    console.log(categories)
    return (
      <div className='container tournaments main-content'>
        <div className='rules-section'>
          <div className='container rules-filter-bar'>
            <div className='row'>
              <h2 className='col-md-4 section-title'>Rules</h2>
              <div className='col-md-8'>
                <div className='row mdbtn-toolbar'>
                  {categories.map((type) => {
                    let colSize = Math.floor(12 / Object.keys(rules).length)
                    return (
                      <button
                        value={type}
                        onClick={this._handleRuleFilterClick}
                        className={`btn btn-default rule-filter col-sm-${colSize}`}>
                        {type}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='row t-5'>
            {rules.filter((rule) => {
              return (
                rule.category === this.state.ruletype
              )
            }).map((rule) => {
              return (
                <Rule {...rule} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
const { arrayOf, object } = PropTypes
Tournaments.propTypes = {
  rules: arrayOf(object)
}

export default Tournaments
