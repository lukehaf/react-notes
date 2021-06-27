import React, { Component } from 'react';
import Note from './Note';

class alltheNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createNotes = (noteObject) => {
    return (
      <Note key={noteObject.id}
        title={noteObject.title}
        id={noteObject.id}
        delete={this.props.delete}
        changeTitle={this.props.changeTitle}
      />
    );
  }

  render() {
    const eachNote = this.props.notesArray;
    const listofNotes = eachNote.map(this.createNotes);

    return (
      <ul className="theList">
        {listofNotes}
      </ul>
    );
  }
}

export default alltheNotes;
