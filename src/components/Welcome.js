// Created with racfe
import React from "react";
import Day from "./Day";

const Welcome = () => {
  return (
    <div>
      <p>Welcome to my first React App</p>
      {/* First, see how I write a comment within JSX */}
      {/* Notice below I am passing  the prop as a bool and not a string */}
      <Day />
    </div>
  );
};

// Export so that other JS files can call it.
export default Welcome;
