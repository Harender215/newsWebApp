import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';

export class App extends Component {
  c = 'harender';

  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize= {10} country = {"in"} category ={"science"}/>
      </div>
    )
  }
}

export default App
