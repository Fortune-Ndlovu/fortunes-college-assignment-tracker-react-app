import React from "react";

// Create a separate Notes component for the notes functionality
const NotesTracker = ({ notes, onAddNote, onNoteChange, onDeleteNote }) => {
  return (
    <div>
      <h4>Notes</h4>
      {notes.map((note, index) => (
        <div key={index}>
          <textarea
            value={note}
            onChange={(e) => onNoteChange(e, index)}
          ></textarea>
          <button onClick={() => onDeleteNote(index)}>Delete</button>
        </div>
      ))}
      <button onClick={onAddNote}>Add Note</button>
    </div>
  );
};

export default NotesTracker;