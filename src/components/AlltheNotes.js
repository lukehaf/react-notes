import React from 'react';
import Note from './Note';

const alltheNotes = (props) => {
  const notes = props.notesArray.entrySeq().map(([id, noteObject]) => {
    return (

      <Note key={id}
        id={id}
        title={noteObject.title}
        content={noteObject.content}
        x={noteObject.x}
        y={noteObject.y}
        delete={props.delete}
        changeTitle={props.changeTitle}
        changeContent={props.changeContent}
        onDragNote={props.onDragNote}
      />

    );
  });

  return (
    <div>
      <div className="notes">
        {notes}
      </div>
    </div>

  );
};

export default alltheNotes;
