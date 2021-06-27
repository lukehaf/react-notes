/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import ToggleButton from './ToggleButton';

class note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: false,
      text: 'starter',
    };
  }

  handleDelete = () => {
    this.props.delete(this.props.id);
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
    console.log(this.state.text);
  }

  changeTitle = (event) => {
    this.props.changeTitle(event.target.value, this.props.id);
  }

  handleLock = () => {
    this.setState((prevState) => {
      return {
        isDisabled: !prevState.isDisabled,

      };
    });
  }

  render() {
    return (
      <div id="note">
        <div id="topOfNote">

          <div id="lSideOfTop">
            <input value={this.props.title}
              onChange={this.changeTitle}
              disabled={this.state.isDisabled}
            />
            <i className="fa fa-trash" onClick={this.handleDelete} />
            <ToggleButton id="toggle" handleLock={this.handleLock} />
          </div>
          <i className="fa fa-arrows-alt" />
        </div>

        <div>
          <textarea onChange={this.handleChange}
            value={this.state.text}
            disabled={this.state.isDisabled}
          />
        </div>
      </div>
    );
  }
}

export default note;
