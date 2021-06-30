/* eslint-disable react/no-children-prop */
import './style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Map } from 'immutable';
import * as db from './services/datastore';

import EntryBar from './components/EntryBar';
import AlltheNotes from './components/AlltheNotes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: new Map({}),
    };
  }

  componentDidMount() {
    console.log('fetchnotes');
    db.fetchNotes((fBNotes) => {
      this.setState({ notes: new Map(fBNotes) });
    });
  }

  thenPrint = () => {
    // console.log(this.state.notes.toJS());
  };

  setTitle = (text) => {
    db.addNote(
      {
        title: text, content: '', x: 500, y: 20, // make sure these x and y defaults
        // match up with the defaults for the <Draggable> in Note
      },
    );
  };

  changeTitle = (key, text) => {
    db.updateNote(key, { title: text });
  };

  changeContent = (key, text) => {
    db.updateNote(key, { content: text });
  };

  deleteNote = (noteID) => {
    db.deleteNote(noteID);
  };

  dragNote = (key, coords) => {
    db.updateNote(key, { ...coords });
  };

  render() {
    return (
      <div>
        <EntryBar handleNoteName={this.setTitle} />
        <AlltheNotes
          notesArray={this.state.notes}
           /* Turns immutable map into a js map, then takes just the map's values and makes
          an array of objects */
          delete={this.deleteNote}
          changeTitle={this.changeTitle}
          changeContent={this.changeContent}
          onDragNote={this.dragNote}
        />

        <div onClick={this.thenPrint}
          role="button"
          tabIndex={0}
        >
          Click me to print the state
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
