import './style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Map } from 'immutable';

import EntryBar from './components/EntryBar';
import AlltheNotes from './components/AlltheNotes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idCounter: 1,
      notes: new Map({}),
    };
  }

  thenPrint = () => {
    console.log(this.state.notes.toJS());
  };

  setTitle = (text) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.set(prevState.idCounter, { title: text, id: prevState.idCounter }),
        idCounter: prevState.idCounter + 1,
      };
    });
  };

  changeTitle = (text, key) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.set(key, { title: text, id: key }),
      };
    });
  };

  deleteNote = (noteID) => {
    this.setState((prevState) => ({
      notes: prevState.notes.delete(noteID),
    }));
  };

  render() {
    return (
      <div>
        <EntryBar handleNoteName={this.setTitle} />
        <AlltheNotes
          notesArray={Object.values(this.state.notes.toJS())}
           /* Turns immutable map into a js map, then takes just the map's values and makes
          an array of objects */
          delete={this.deleteNote}
          changeTitle={this.changeTitle}
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
