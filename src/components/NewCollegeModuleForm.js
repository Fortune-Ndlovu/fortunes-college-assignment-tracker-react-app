import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const NewCollegeModuleForm = ({ onSubmitHandler }) => {
  // UseParams to access the URL parameters and extract the moduleID parameter.
  // const urlParameters = useParams();

  // Use navigate to navigate to different roots within the application.
  const navigate = useNavigate();

  // let moduleToAdd = modules.find(
  //   (item) => item === Number(urlParameters.addID)
  // );

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
      navigate(`/`);
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
