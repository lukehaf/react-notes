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

        mars: {
          color: 'green',
        },
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
    console.log('setTitle received', text);
    this.setState((prevState) => {
      return {

        notes: prevState.notes.set(prevState.idCounter, { title: text }),
        idCounter: prevState.idCounter + 1,
      };
    });
  };

  setId = (text) => {
    console.log('setId received', text);
    this.setState((prevState) => {
      return {
        notes: prevState.notes.set('id', { title: text }),
      };
    });
  };

  render() {
    return (
      <div>
        <EntryBar handleNoteName={this.setTitle} handleId={this.setId} />
        <Note />
        <AlltheNotes />

        <div onClick={this.thenPrint}
          role="button"
          tabIndex={0}
        >
          Click me to show what title index received!
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
