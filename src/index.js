// import $ from 'jquery';
// change require to es6 import style

import './style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*
import { Map } from 'immutable'; */

import EntryBar from './components/EntryBar';
import Note from './components/Note';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      notes: 'o-dark thirty',
    };
  }

  myMessage = () => {
    console.log('hello');
  };
  /* newNote = () => {
    console.log('Help I\'ve been clicked!');
    // methods for how to make a new thing of class 'note'. Don't describe
    // how it should look- it has its own class component for that.
  } */

  render() {
    return (
      <div>
        <div>
          what time is it? {this.state.notes}
        </div>
        <EntryBar />
        <Note />
        <div onClick={this.myMessage}
          role="button"
          tabIndex={0}
        >
          Click me
        </div>
      </div>
    /*
        <div onClick={this.setState(prevState => ({
           notes: toLocaleTimeString()
          }));}
          role="button"
          tabIndex={0}>Click me
          </div>

        */

    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
