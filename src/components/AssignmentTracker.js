import React from "react";
import { Link } from "react-router-dom";

const AssignmentTracker = ({ modules, onDelete }) => {
  const handleDelete = (e) => {
    onDelete(Number(e.target.value));
  };

  return (
    <ul id="Module-List">
      {modules.map((item) => (
        <li key={item.id}>
          <Link to={`/module/${item.id}`}>{item.name}</Link>&nbsp;
          <Link to={`/edit/${item.id}`}>Edit</Link>
          <button
            className="btn btn-sm btn-danger"
            onClick={handleDelete}
            value={item.id}
          >
            del
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AssignmentTracker;
