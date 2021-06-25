import React, { Component } from 'react';

class note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'testing',
      text: 'I is a note',
      /* x: 400,
      y: 12,
      zIndex: 26, */
    };
  }

  render() {
    return (
      <div id="note">
        <div>
          This is a note called {this.state.title}
          <i className="fa fa-trash" />
          <i className="fa fa-arrows-alt" />
          <i className="fa fa-edit" />
          <input />
        </div>
        <div>
          It has some content: {this.state.text}
        </div>
      </div>
    );
  }
}

export default note;
