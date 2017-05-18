import React, { Component } from 'react'
import { Route } from 'react-router'
import Footer from './GlobalComponents/Footer'
import Header from './GlobalComponents/Header'
import Home from './Home/index'
import About from './About/index'
import Events from './Events/index'
import Tournaments from './Tournaments/index'
import preload from '../public/preloadData.json'
import logo from './logo.svg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <Route exact path='/' component={Home} />
        <Route
          path='/about'
          component={(props) => {
            return (
              <About team={preload.team} />
            )
          }}
        />
        <Route
          path='/events'
          component={(props) => {
            return (
              <Events cons={preload.cons} />
            )
          }}
        />
        <Route
          path='/tournaments'
          component={(props) => {
            return (
              <Tournaments rules={preload.rules} />
            )
          }}
        />
        <Footer />
      </div>
    );
  }
}

export default App
