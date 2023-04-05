import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

// Destructoring the onDelete and moduleToDisplay objects
const DeleteModule = ({ onDelete, moduleToDisplay }) => {

// Using two react useState hooks firstly with a false boolean as the initial value and secondly with a string as the initial value 
  const [showForm, setShowForm] = useState(false);
  const [code, setCode] = useState("");

// creating a navigate function so that we can use it navigate back to the app component
  const navigate = useNavigate();

//   creating a function to handle the form submit and checks if the correct code is entered and navigate back to the app component
  let handleDelete = (e) => {
    e.preventDefault();

    if (code === "javascript-is-cool") {
      onDelete(moduleToDisplay.id);
      navigate(`/`);
    } else {
      alert("Invalid code, Please try again later");
      navigate(`/`);
    }
  };

  return (
    <div>
        {/* When this btn is clicked we will redefine the initial value of the state varible to true */}
      <button
        className="btn btn-sm btn-danger"
        onClick={() => setShowForm(true)}
      >
        del
      </button>
      {/* When the state variable is set to true the form renders*/}
      {showForm && (
        <form onSubmit={handleDelete}>
          <label>Please Enter the code to delete the module</label>
          <input
            type="text"
            placeholder="javascript-is-cool"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button type="submit" className="btn btn-sm btn-danger">
            Delete this {moduleToDisplay.name} Module
          </button>
        </form>
      )}
    </div>
  );
};

export default DeleteModule;