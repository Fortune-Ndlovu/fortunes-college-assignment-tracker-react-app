import React from "react";

const NewCollegeModuleForm = ({ onSubmitHandler }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // If the value of the modulesName is empty, display an
    // alert message and return
    if (!e.target.modulesName.value) {
      alert("Please add a name");
    } else {
      // Create a new JS object using the value of the modulesName
      let newCollegeModule = {
        name: e.target.modulesName.value,
        assignmentName: e.target.assignmentName,
        assignmentDateTimeGivenOut: e.target.assignmentDateTimeGivenOut,
        assignmentDateTimeGivenDue: e.target.assignmentDateTimeGivenDue,
        grade: e.target.grade
      };

      // "Blank out" the modulesName
      e.target.modulesName.value = "";

      // Call the onSubmitHandler function that was passed in via a prop
      onSubmitHandler(newCollegeModule);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="modulesName" className="form-label">
          Name:{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="modulesName"
          name="modulesName"
          placeholder="Enter Name"
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Add" />
    </form>
  );
};

export default NewCollegeModuleForm;
