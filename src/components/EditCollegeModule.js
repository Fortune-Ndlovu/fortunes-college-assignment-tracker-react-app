import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCollegeModule = ({ modules, onEdit }) => {
  const [name, setName] = useState("");
  const [newNote, setNewNote] = useState("");

  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDateTimeGivenOut, setAssignmentDateTimeGivenOut] =
    useState("");
  const [assignmentDateTimeGivenDue, setAssignmentDateTimeGivenDue] =
    useState("");
  const [grade, setGrade] = useState("");
  const [notes, setNotes] = useState([]);

  const urlParameters = useParams();
  const navigate = useNavigate();

  const moduleToEdit = modules.find(
    (item) => item.id === Number(urlParameters.moduleID)
  );

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAssignmentNameChange = (event) => {
    setAssignmentName(event.target.value);
  };

  const handleAssignmentDateTimeGivenOutChange = (event) => {
    setAssignmentDateTimeGivenOut(event.target.value);
  };

  const handleAssignmentDateTimeGivenDueChange = (event) => {
    setAssignmentDateTimeGivenDue(event.target.value);
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleAddNote = () => {
    setNotes([...notes, ""]);
  };

  const handleNoteChange = (event, index) => {
    const newNotes = [...notes];
    newNotes[index] = event.target.value;
    setNotes(newNotes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedModule = {
      id: moduleToEdit.id,
      name: name || moduleToEdit.name,
      assignmentName: assignmentName || moduleToEdit.assignmentName,
      assignmentDateTimeGivenOut:
        assignmentDateTimeGivenOut || moduleToEdit.assignmentDateTimeGivenOut,
      assignmentDateTimeGivenDue:
        assignmentDateTimeGivenDue || moduleToEdit.assignmentDateTimeGivenDue,
      grade: grade || moduleToEdit.grade,
      notes
    };

    onEdit(updatedModule);
    navigate(`/module/${updatedModule.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="moduleName">Module Name</label>
        <input
          type="text"
          className="form-control"
          defaultValue={moduleToEdit.name}
          name="moduleName"
          onChange={handleNameChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="assignmentName">Assignment Name</label>
        <input
          type="text"
          className="form-control"
          defaultValue={moduleToEdit.assignmentName}
          name="assignmentName"
          onChange={handleAssignmentNameChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="assignmentDateTimeGivenOut">
          Assignment Date and Time Given Out
        </label>
        <input
          type="datetime-local"
          className="form-control"
          defaultValue={moduleToEdit.assignmentDateTimeGivenOut}
          name="assignmentDateTimeGivenOut"
          onChange={handleAssignmentDateTimeGivenOutChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="assignmentDateTimeGivenDue">
          Assignment Date and Time Given Due
        </label>
        <input
          type="datetime-local"
          className="form-control"
          defaultValue={moduleToEdit.assignmentDateTimeGivenDue}
          name="assignmentDateTimeGivenDue"
          onChange={handleAssignmentDateTimeGivenDueChange}
        />
      </div>
      <div className="form-group">
        <br />
        <label htmlFor="theAssignmentGrade">Assignment Grade</label>
        <input
          type="text"
          className="form-control"
          defaultValue={moduleToEdit.grade}
          name="assignmentGrade"
        />
      </div>
      <div>
        <label>Notes:</label>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <input
                type="text"
                value={note}
                onChange={(event) => handleNoteChange(event, index)}
              />
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAddNote}>
          Add Note
        </button>
        <input
          type="text"
          value={newNote}
          onChange={(event) => setNewNote(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
  );
};

export default EditCollegeModule;
