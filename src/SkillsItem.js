import React, { Component } from 'react';
import './App.css';

class SkillsItem extends Component {
  // in retrospect, I probably should have thought more about the naming scheme here.
  render() {
    return (
      <div className="SkillsItem">
        <p className="SkillsItemContent">
          {this.props.skillName}: {this.props.children}
        </p>
      </div>
    );
  }
}
SkillsItem.propTypes = {
	children: React.PropTypes.string.isRequired
};

export default SkillsItem;