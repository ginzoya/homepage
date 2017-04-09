import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExperienceItem from './ExperienceItem.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ExperienceItem start="Jan 2015" end="Mar 2016" jobTitle="Developer">
          Lorem ipsum I can't remember the rest.
        </ExperienceItem>
      </div>
    );
  }
}

export default App;
