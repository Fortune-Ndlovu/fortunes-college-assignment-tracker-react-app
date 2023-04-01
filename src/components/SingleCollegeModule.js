import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleCollegeModule = ({ modules, onDelete }) => {
  const urlParameters = useParams();

  let moduleToDisplay;

  moduleToDisplay = modules.find(
    (item) => item.id === Number(urlParameters.moduleID)
  );

  const handleDelete = () => {
    onDelete(moduleToDisplay.id);
  };

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
      <Link to={`/edit/${moduleToDisplay.id}`}>Edit</Link>
      <button className="btn btn-sm btn-danger" onClick={handleDelete}>
        del
      </button>
    </div>
  );
};

export default SingleCollegeModule;
