import React from "react";
import { Link } from "react-router-dom";

const AssignmentTracker = ({ modules }) => {
  return (
    <ul id="Module-List">
      {modules.map((item) => (
        <li key={item.id}>
          <Link to={`/module/${item.id}`}>{item.name}</Link>&nbsp;
        </li>
      ))}
    </ul>
  );
};

export default AssignmentTracker;
