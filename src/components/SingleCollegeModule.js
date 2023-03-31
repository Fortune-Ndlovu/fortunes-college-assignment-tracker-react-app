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
      {`${moduleToDisplay.name} module is tracking these assignments - ${moduleToDisplay.grade} - for you`}{" "}
      <br />
      <Link to={`/edit/${moduleToDisplay.id}`}>Edit</Link>
      <button className="btn btn-sm btn-danger" onClick={handleDelete}>
        del
      </button>
    </div>
  );
};

export default SingleCollegeModule;
