/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import ToggleButton from './ToggleButton';

class note extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="note">
        <div id="topOfNote">

          <div id="lSideOfTop">
            {this.props.title}
            <i className="fa fa-trash" />
            <ToggleButton id="toggle" />
          </div>
          <i className="fa fa-arrows-alt" />
        </div>

        <div>
          <textarea>
            {this.state.text}
          </textarea>
        </div>
      </div>
    );
  }
}

export default note;
