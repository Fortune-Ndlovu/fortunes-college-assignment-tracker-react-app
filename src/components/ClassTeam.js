import React from "react";
import { Link } from "react-router-dom";

const ClassTeam = ({ members, onDelete }) => {
  const handleDelete = (e) => {
    onDelete(Number(e.target.value));
  };

  return (
    <ul id="Class-List">
      {members.map((item) => (
        <li key={item.id}>
          <Link to={`/member/${item.id}`}>{item.name}</Link>&nbsp;
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

export default ClassTeam;
