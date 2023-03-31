import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCollegeModule = ({ modules, onEdit }) => {
  const urlParameters = useParams();
  const navigate = useNavigate();

  let moduleToEdit = modules.find(
    (item) => item.id === Number(urlParameters.moduleID)
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    moduleToEdit.name = e.target.moduleName.value;
    moduleToEdit.assignmentName = e.target.assignmentName.value;
    moduleToEdit.assignmentDateGivenOut = e.target.assignmentDateGivenOut.value;
    moduleToEdit.assignmentDateGivenDue = e.target.assignmentDateGivenDue.value;
    moduleToEdit.grade = e.target.assignmentGrade.value;

    onEdit(moduleToEdit);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="moduleName">Module Name</label>
        <input
          type="text"
          className="form-control"
          defaultValue={moduleToEdit.name}
          name="moduleName"
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="assignmentName">Assignment Name</label>
        <input
          type="text"
          className="form-control"
          defaultValue={moduleToEdit.assignmentName}
          name="assignmentName"
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="assignmentDateGivenOut">Assignment Date Given Out</label>
        <input
          type="date"
          className="form-control"
          defaultValue={moduleToEdit.assignmentDateGivenOut}
          name="assignmentDateGivenOut"
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="assignmentDateGivenDue">Assignment Date Given Due</label>
        <input
          type="date"
          className="form-control"
          defaultValue={moduleToEdit.assignmentDateGivenDue}
          name="assignmentDateGivenDue"
        />
      </div>
      <div className="form-group">
        <br />
        <label htmlFor="theAssignmentGrade">Assignment Grade</label>
        <input
          type="text"
          className="form-control"
          defaultValue={moduleToEdit.grade}
          name="assignmentGrade"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
  );
};

export default EditCollegeModule;
