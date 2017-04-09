import React, { Component } from 'react';
import './App.css';

class ExperienceItem extends Component {
  render() {
    return (
      <div className="ExperienceItem">
        <h3>{this.props.jobTitle}</h3>
        <ExpItemDuration start={this.props.start} end={this.props.end} />
        <p className="ExpItemContent">
          {this.props.data}
        </p>
      </div>
    );
  }
}
ExperienceItem.propTypes = {
  jobTitle: React.PropTypes.string.isRequired,
  start: React.PropTypes.string.isRequired,
  end: React.PropTypes.string.isRequired,
	data: React.PropTypes.string.isRequired
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