import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditClassMember = ({ members, onEdit }) => {
  const urlParameters = useParams();
  const navigate = useNavigate();

  let studentToEdit = members.find(
    (item) => item.id === Number(urlParameters.studentID)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.studentName.value);

    studentToEdit.name = e.target.studentName.value;
    studentToEdit.grade = e.target.studentGrade.value;

    onEdit(studentToEdit);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" defaultValue={studentToEdit.name} name="studentName" />
      <input
        type="text"
        defaultValue={studentToEdit.grade}
        name="studentGrade"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditClassMember;
