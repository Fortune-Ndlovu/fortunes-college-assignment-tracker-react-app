import React from "react";
import { Link } from "react-router-dom";

// dustructuring the prop called modules in the function signature
// Using the map method to iterate over the modules array, and create a list item for each module
// Each list item contains a Link component that navigates to the a unique URL based on the modules id property
const AssignmentTracker = ({ modules }) => {
  return (
    <ul id="Module-List">
      {modules.map((item) => (
        <li key={item.id}>
          <Link to={`/module/${item.id}`}>{item.name}</Link>&nbsp;
        </li>
      ))}
      <Link to={"/add/"}>
        <button className="btn btn-success">Add Assignment</button>
      </Link>
    </ul>
  );
};

export default AssignmentTracker;
