import React from "react";
import { useState } from "react";

/*
    The "props" argument is a JS object containing all
    the component properties.

    props is a JS object something like
    {
        short: true
    }

    Destructing
    {short} = props;
*/
const Day = ({ short }) => {
  const getDayStringToDisplay = () => {
    // Create an array of week days
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    // Create a new JS Date object
    const date = new Date();

    // Get the day of the week as a number. 0 = Sun, 1 = Mon, etc.
    // We will use this below to index into the weekDays array
    const dayAsNumber = date.getDay();

    let displayString;

    if (visible && short) {
      displayString = `${weekDays[dayAsNumber]} `;
    } else if (visible && !short) {
      displayString = `Today is ${weekDays[dayAsNumber]} `;
    } else {
      displayString = " ";
    }

    return displayString;
  };

  const getToggleButtonLabel = () => {
    return visible ? "Hide" : "Show";
  };

  /*
    I am using the useState hook (aka a react function). The useState hook
    returns an array containing two items, the first is the state variabe
    value and the second is a function to set the value of the state
    variable. When we call the useState hook we pass it the initial
    value of the state variable.
    */
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    visible ? setVisible(false) : setVisible(true);
  };

  return (
    <div className="mb-2">
      {getDayStringToDisplay()}
      <button
        className={
          visible
            ? "btn btn-sm btn-outline-danger"
            : "btn btn-sm btn-outline-success"
        }
        onClick={toggleVisibility}
      >
        {getToggleButtonLabel()}
      </button>
    </div>
  );
};

Day.defaultProps = {
  short: false
};

export default Day;
