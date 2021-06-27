/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

class entryBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteName: 'Name your new Note!',

    };
  }

  handleChange = (event) => {
    this.setState({ noteName: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit = (event) => {
    this.props.handleNoteName(this.state.noteName);
    event.preventDefault();
  }

  // arrow functions don't have their own state,
  // so 'this' refers to the parent, the searchbar. Perfect!

  /* createNote = (event) => {
    this.props.onNewTitle(event.target.value);
  } */ // this is for if I build my own button to submit stuff onclick
  /* <div onClick={null}
          role="button"
          tabIndex={0}
        >
          Create the Note!
        </div> */

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>

          <input onChange={this.handleChange} value={this.state.noteName} />

        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default entryBar;
