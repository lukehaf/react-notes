import './style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Map } from 'immutable';

import EntryBar from './components/EntryBar';
import Note from './components/Note';
import AlltheNotes from './components/AlltheNotes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idCounter: 1,
      notes: new Map({
        id: {
          title: '',
          text: '',
          x: 0,
          y: 0,
          zIndex: 0,
        },
      }),
    };
  }

  thenPrint = () => {
    console.log(this.state);
  };

  setTitle = (text) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.set(prevState.idCounter, { title: text }),
        idCounter: prevState.idCounter + 1,
      };
    });
  };

  deleteNote = (noteID) => {
    console.log('deleteNote was called');
    this.setState((prevState) => ({
      notes: prevState.notes.delete(noteID),
    }));
  };

  render() {
    return (
      <div>
        <EntryBar handleNoteName={this.setTitle} />
        <Note />
        <AlltheNotes notes={this.state.notes} />

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
