import React from "react";

// Created a separate Notes component for the notes functionality
const NotesTracker = ({ notes, onAddNote, onNoteChange, onDeleteNote }) => {
    
    // When the Add Note or Delete btns is clicked this function is called
    // it prevents the default form submission and calls the onAddNote function that is passed as a prop
    let handleAddNote = (e) => {
        e.preventDefault();
        onAddNote();
    }
    
    let handleNoteDelete = (e) => {
        e.preventDefault();
        onDeleteNote();
    }

    return (
    <div>
      <h4>Notes</h4>
      {/* for every note in notes we want to be able to modify within, delete it and add a new note to do the same*/}
      {notes.map((note, index) => (
        <div key={index}>
          <textarea
            value={note}
            onChange={(e) => onNoteChange(e, index)}
          ></textarea>
          <button onClick={handleNoteDelete}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default NotesTracker;