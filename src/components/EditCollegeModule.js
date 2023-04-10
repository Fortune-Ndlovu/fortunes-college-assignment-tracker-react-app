import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import NotesTracker from "./NotesTracker";

const EditCollegeModule = ({ modules, onEdit }) => {
  // State variables used to store different values for different form fields the intial values are empty strings or array
  const [name, setName] = useState("");
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDateTimeGivenOut, setAssignmentDateTimeGivenOut] =
    useState("");
  const [assignmentDateTimeGivenDue, setAssignmentDateTimeGivenDue] =
    useState("");
  const [grade, setGrade] = useState("");
  const location = useLocation();
  // Assigning the current location or empty array as the initial value
  const [notes, setNotes] = useState(location.state.notes || []);
  // UseParams to access the URL parameters and extract the moduleID parameter.
  const urlParameters = useParams();

  // Use navigate to navigate to different roots within the application.
  const navigate = useNavigate();

  // We are using the find method to search the modules array for a module with an id that exactly matches the value of the moduleID URL parameter.
  const moduleToEdit = modules.find(
    (item) => item.id === Number(urlParameters.moduleID)
  );

  // Several event handlers to call when different form fields are changed.
  // These event handlers are used to update the state variables with the new values entered by the user.
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAssignmentNameChange = (e) => {
    setAssignmentName(e.target.value);
  };

  const handleAssignmentDateTimeGivenOutChange = (e) => {
    setAssignmentDateTimeGivenOut(e.target.value);
  };

  const handleAssignmentDateTimeGivenDueChange = (e) => {
    setAssignmentDateTimeGivenDue(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  // handleAddNote function called when we want to add a note to the notes array.
  // setNotes is used to update the notes state variable.
  const handleAddNote = () => {
    setNotes([...notes, ""]);
  };

  // handleNoteChange function called when the user types in a new note.
  // The function take an event object as an argument AND an index which specifies which note the user is currently editing.
  const handleNoteChange = (e, index) => {
    const newNotes = [...notes];
    newNotes[index] = e.target.value;
    setNotes(newNotes);
  };

  // Updating the notes state variable to remove the note at the specified index
  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  // The handleSubmit function is an event handler for the form submission.
  const handleSubmit = (e) => {
    e.preventDefault();

    /**
     * updatedModule with properties for each form field.
     * The values for each form field are set to the corresponding values from the state variables if they exist, or
     * set to the corresponding values from the moduleToEdit objectif the state variable is falsy like an empty string.
     */
    const updatedModule = {
      id: moduleToEdit.id,
      name: name || moduleToEdit.name,
      assignmentName: assignmentName || moduleToEdit.assignmentName,
      assignmentDateTimeGivenOut:
        assignmentDateTimeGivenOut || moduleToEdit.assignmentDateTimeGivenOut,
      assignmentDateTimeGivenDue:
        assignmentDateTimeGivenDue || moduleToEdit.assignmentDateTimeGivenDue,
      grade: grade || moduleToEdit.grade,
      notes: notes || moduleToEdit.notes
    };

    // The onEdit method is used to update the state variables with the new values entered by the user.
    onEdit(updatedModule);

    // The navigate method is used to navigate to a new root that displays the updated collge module and its current state as a prop.
    navigate(`/module/${updatedModule.id}`, {
      state: { notes: updatedModule.notes }
    });
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
          onChange={handleGradeChange}
        />
      </div>
      <NotesTracker
        notes={notes}
        onAddNote={handleAddNote}
        onNoteChange={handleNoteChange}
        onDeleteNote={handleDeleteNote}
      />
      <br />
      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
  );
};

export default EditCollegeModule;
