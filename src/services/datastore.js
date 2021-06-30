/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBKsHgE9WM84vRWNfLfO4xNrbTLeka4hMk',
  authDomain: 'firenotes-ff11c.firebaseapp.com',
  databaseURL: 'https://firenotes-ff11c-default-rtdb.firebaseio.com',
  projectId: 'firenotes-ff11c',
  storageBucket: 'firenotes-ff11c.appspot.com',
  messagingSenderId: '822717279534',
  appId: '1:822717279534:web:ecb441de900835fdb6debf',
  measurementId: 'G-MXBW5FZM0B',
};

firebase.initializeApp(firebaseConfig);
console.log('firebase linked');

// Get a reference to the database service
const database = firebase.database();

// got help from https://github.com/dartmouth-cs52-21S/react-notes-dereklu888

export function addNote(note) {
  return firebase.database().ref('notes').push(note).key;
}

export function deleteNote(id) {
  firebase.database().ref('notes').child(id).remove();
}

export function updateNote(id, note) {
  firebase.database().ref('notes').child(id).update(note);
}

export function fetchNotes(callback) {
  firebase.database().ref('notes').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}
