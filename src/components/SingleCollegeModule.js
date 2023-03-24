import React from "react";
import { useParams } from "react-router-dom";

const SingleCollegeModule = ({ modules }) => {
  const urlParameters = useParams();
  console.log(urlParameters.moduleID);

  let moduleToDisplay;

  moduleToDisplay = modules.find(
    (item) => item.id === Number(urlParameters.moduleID)
  );

  return (
    <div>
      {`${moduleToDisplay.name} module is tracking these assignments - ${moduleToDisplay.grade} - for you`}
    </div>
  );
};

export default SingleCollegeModule;
