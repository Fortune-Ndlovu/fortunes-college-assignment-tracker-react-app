import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const NewCollegeModuleForm = ({ onSubmitHandler }) => {
  // Use navigate to navigate to different roots within the application.
  const navigate = useNavigate();

  // Use a ref to store the selected image file
  const imageRef = useRef(null);

  const handleFormCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

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
        grade: e.target.grade,
        image: imageRef.current.files[0]
      };

      // "Blank out" the modulesName
      e.target.modulesName.value = "";

      // Read the contents of the selected image file and convert it to a data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        newCollegeModule.image = event.target.result;

        // Call the onSubmitHandler function that was passed in via prop
        onSubmitHandler(newCollegeModule);
        navigate("/");
      };
      reader.readAsDataURL(newCollegeModule.image);
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
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image:{" "}
        </label>
        <input
          type="file"
          className="form-control"
          id="image"
          name="image"
          ref={imageRef}
        />
      </div>
      <div className="moduleAddCancelBtn">
        <button type="submit" className="btn btn-sm btn-success" id="addModuleBtn">Add</button>
        <button
          type="button"
          className="btn btn-sm btn-warning" id="cancelModuleBtn"
          onClick={handleFormCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewCollegeModuleForm;
