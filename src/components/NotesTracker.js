import React from "react";

// Created a separate Notes component for the notes functionality
const NotesTracker = ({ notes, onAddNote, onNoteChange, onDeleteNote }) => {
    
    // When the Add Note button is clicked this function is called
    // it prevents the default form submission and calls the onAddNote function that is passed as a prop
    let handleAddNote = (e) => {
        e.preventDefault();
        onAddNote();
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
          <button onClick={() => onDeleteNote(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default NotesTracker;