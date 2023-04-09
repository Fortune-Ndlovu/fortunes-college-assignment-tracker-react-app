import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AssignmentTracker = ({ modules }) => {
  console.log(modules.image);
  return (
    <>
      {modules.map((item) => (
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} alt="study image" />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Link to={`/module/${item.id}`}>Let's Go in!</Link>
          </Card.Body>
        </Card>
      ))}
      <Link to={"/add/"}>
        <Button variant="success">Add Assignment</Button>
      </Link>
    </>
  );
};

export default AssignmentTracker;
