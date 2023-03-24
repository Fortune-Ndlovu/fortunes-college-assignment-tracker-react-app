import React from "react";
import { useParams } from "react-router-dom";

const SingleClassMember = ({ members }) => {
  const urlParameters = useParams();
  console.log(urlParameters.studentID);

  let studentToDisplay;

  /*
    for (let i = 0; i < members.length; i++) {
        if (members[i] === Number(urlParameters.studentID)) {
            studentToDisplay = members[i];
        }
    }
    */

  studentToDisplay = members.find(
    (item) => item.id === Number(urlParameters.studentID)
  );

  return (
    <div>
      {studentToDisplay.name} has a grade of {studentToDisplay.grade}
    </div>
  );
};

export default SingleClassMember;
