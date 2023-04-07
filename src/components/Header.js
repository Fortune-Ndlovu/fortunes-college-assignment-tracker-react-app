import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 text-center bg-dark text-light rounded-3">
      <Link to="/">
        <h2>Student Assignment Tracker📗</h2>
      </Link>
      <Link to="/about">About</Link>
    </header>
  );
};

export default Header;
