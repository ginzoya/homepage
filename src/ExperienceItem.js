import React, { Component } from 'react';
import './App.css';

class ExperienceItem extends Component {
  render() {
    return (
      <div className="ExperienceItem" style={{border:"1px solid black"}}>
        <h3>{this.props.jobTitle}</h3>
        <h4>{this.props.employer}</h4>
        <ExpItemDuration start={this.props.start} end={this.props.end} />
        <p className="ExpItemContent">
          {this.props.children}
        </p>
      </div>
    );
  }
}
ExperienceItem.propTypes = {
  jobTitle: React.PropTypes.string.isRequired,
  start: React.PropTypes.string.isRequired,
  end: React.PropTypes.string.isRequired,
	children: React.PropTypes.string.isRequired
};

class ExpItemDuration extends Component {
  render() {
    return (
      <div className="ExpItemDuration">
        <p>
          {this.props.start} - {this.props.end}
        </p>
      </div>
    );
  }
}

export default ExperienceItem;