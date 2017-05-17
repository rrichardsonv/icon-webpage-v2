import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dropdown: 'hidden'
    }
    this._handleDropdownClick = this._handleDropdownClick.bind(this)
  }
  _handleDropdownClick () {
    if (this.state.dropdown === 'hidden') {
      this.setState({dropdown: ''})
    } else {
      this.setState({dropdown: 'hidden'})
    }
  }
  render () {
    return (
      <nav className='navbar navbar-fixed-top navbar-inverse iCon'>
        <div className='container-fluid'>
          <div className='row header-row'>
            <div className='col-md-3 col-sm-12 vcenter'>
              <div className='navbar-header'>
                <div className='dropdown'>
                  <button onClick={this._handleDropdownClick} type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                      <span className='sr-only'>Toggle navigation</span>
                      <span className='icon-bar' />
                      <span className='icon-bar' />
                      <span className='icon-bar' />
                    </button>
                  <div className={`btn-group-justified ${this.state.dropdown}`} aria-labelledby='dropdownMenu1'>
                    <Link onClick={this._handleDropdownClick} className='btn btn-iCon header-link' to='/events'>
                    Events
                    </Link>
                    <Link onClick={this._handleDropdownClick} className='btn btn-iCon header-link' to='/tournaments'>
                    Tournaments
                    </Link>
                    <Link onClick={this._handleDropdownClick} className='btn btn-iCon header-link' to='/about'>
                    About us
                    </Link>
                    <Link onClick={this._handleDropdownClick} className='btn btn-iCon header-link' to='/contact'>
                    Contact
                    </Link>
                  </div>
                </div>
                  <Link to='/'
                    className='btn btn-iCon header-link'
                  >
                    iCON TOURNAMENTS
                  </Link>
              </div>
            </div>
            <div className='col-md-9 col-sm-0 col-xs-0 pd-t-2m vcenter'>
              <div className='collapse navbar-collapse'>
                <div className='nav navbar-nav'>
                  <div className='btn-group-justified nav-btn-group'>
                    <Link className='btn btn-iCon header-link nav-btn' to='/events'>
                    Events
                    </Link>
                    <Link className='btn btn-iCon header-link nav-btn' to='/tournaments'>
                    Tournaments
                    </Link>
                    <Link className='btn btn-iCon header-link nav-btn' to='/about'>
                    About us
                    </Link>
                    <Link className='btn btn-iCon header-link nav-btn' to='/contact'>
                    Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
