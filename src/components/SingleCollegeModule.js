import React from "react";
import { useParams, Link } from "react-router-dom";

const SingleCollegeModule = ({ modules, onDelete }) => {

  // Using the useParams hook to acess the URL parameters in question.
  const urlParameters = useParams();
  
  /** 
  * In this case the moduleID parameter is extracted from the URL and assigned to the variable urlParameters
  * We then use the find method to search the modules array for a module with the id that exactly
  * matches the value of the moduleID URL parameter, if a match is found we assign the value to the moduleToDisplay variable
  */
  let moduleToDisplay = modules.find(
    (item) => item.id === Number(urlParameters.moduleID)
  );

  const handleDelete = () => {
    onDelete(moduleToDisplay.id);
  };

  /** 
  * When this component is rendered it will display information about the a specific college module.
  * based on the value of the moduleID URL parameter.
  * The user can view this information and use the edit btn to modify the module or remove the college module. 
  */
  return (
    <div>
      <div>Module Name: {moduleToDisplay.name}</div>
      <div>Assignment Name: {moduleToDisplay.assignmentName}</div>
      <div>
        Assignment Date Given Out: {moduleToDisplay.assignmentDateTimeGivenOut}
      </div>
      <div>
        Assignment Date Given Due: {moduleToDisplay.assignmentDateTimeGivenDue}
      </div>
      <div>Assignment Grade: {moduleToDisplay.grade}</div>
      <br />
      <div>
        Notes:
        <ul>
          {/**
           *  Using a conditional rendering technique to only render the moduleToDisplay.notes if it exits and is truthy
           *  We then map over the array of notes creating a list item for each note with a unique key being the index.
           */}
          {moduleToDisplay.notes && moduleToDisplay.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
      <Link to={`/edit/${moduleToDisplay.id}`}>Edit</Link>
      <button className="btn btn-sm btn-danger" onClick={handleDelete}>
        del
      </button>
    </div>
  );
};

export default SingleCollegeModule;
