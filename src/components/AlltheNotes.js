import React, { Component } from 'react';
import Note from './Note';

class alltheNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createNotes = (anId) => {
    return (
      <Note key={anId.id}
        title={anId.title}
        id={anId.id}
        delete={this.props.delete}
        changeTitle={this.props.changeTitle}
      />
    );
  }

  render() {
    const eachNote = this.props.notes;
    const listofNotes = eachNote.map(this.createNotes);

    return (
      <ul className="theList">
        {listofNotes}
      </ul>
    );
  }
}

export default alltheNotes;
