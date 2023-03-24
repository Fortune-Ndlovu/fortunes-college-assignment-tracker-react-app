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
    console.log(e.target.moduleName.value);

    moduleToEdit.name = e.target.moduleName.value;
    moduleToEdit.grade = e.target.moduleGrade.value;

    onEdit(moduleToEdit);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" defaultValue={moduleToEdit.name} name="moduleName" />
      <input type="text" defaultValue={moduleToEdit.grade} name="moduleGrade" />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditCollegeModule;
