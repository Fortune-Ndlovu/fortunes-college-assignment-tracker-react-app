import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AssignmentTracker = ({ modules }) => {
  return (
    <>
      {modules.map((item) => (
            <div className="col" key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.image} alt="study image" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Link to={`/module/${item.id}`}>Let's Go in!</Link>
              </Card.Body>
            </Card>
        </div>
          ))}
        <div className="d-grid gap-2">
          <Link to={"/add/"}>
            <Button variant="success" size="lg">Add Module</Button>
          </Link>
        </div>
    </>
  );
};

export default AssignmentTracker;
