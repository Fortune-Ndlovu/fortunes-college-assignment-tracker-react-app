import React from "react";

const NewClassMemberForm = ({ onSubmitHandler }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // If the value of the membersName is empty, display an
    // alert message and return
    if (!e.target.membersName.value) {
      alert("Please add a name");
      return;
    } else {
      // Create a new JS object using the value of the membersName
      let newClassMember = {
        name: e.target.membersName.value
      };

      // "Blank out" the membersName
      e.target.membersName.value = "";

      // Call the onSubmitHandler function that was passed in via a prop
      onSubmitHandler(newClassMember);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="membersName" className="form-label">
          Name:{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="membersName"
          name="membersName"
          placeholder="Enter Name"
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Add" />
    </form>
  );
};

export default NewClassMemberForm;
