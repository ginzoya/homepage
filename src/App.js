import React, { Component } from 'react';
import './App.css';
import ExperienceItem from './ExperienceItem.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Aaron Lo</h2>
        <ExperienceItem 
          start="April 2016" 
          end="Mar 2017" 
          jobTitle="Associate Technical Artist"
          employer="Electronic Arts (Canada)">
          I wore a lot of hats, but I mostly wrote scripts and developed tools on a regular day.
          Mostly used C#, Python, and Windows batch.
        </ExperienceItem>
        <ExperienceItem 
        start="May 2014" 
        end="December 2014" 
        jobTitle="Software Development Engineer Intern"
        employer="Microsoft (Canada)">
          This was the first time I got the chance to take a mobile app from concept to deployment, which was a fun process, even though the development time was only 4 months. I stayed on part-time to release the apps that were developed and to perform minor updates and maintain the apps for a short term.
          Used C#/XAML.
        </ExperienceItem>
        <ExperienceItem 
        start="September 2012" 
        end="August 2013" 
        jobTitle="Software Designer, OS Multimedia Solutions, Co-op"
        employer="BlackBerry (previously Research In Motion)">
          The title is a bit misleading, I was essentially a Software Development Engineer Co-op. I had mostly the same type of work as the rest of my team, contributing to BB10 OS's wireless media services (DLNA).
          Used C/C++ and bash on a daily basis.
        </ExperienceItem>
      </div>
    );
  }
}

export default App;
