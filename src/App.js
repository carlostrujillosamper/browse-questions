import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.scss';


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar></NavBar>
      </div>
    )
  }
}
