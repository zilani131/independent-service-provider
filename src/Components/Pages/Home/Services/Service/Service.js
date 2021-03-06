import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { name, img, comment, id } = service;
  // to navigate checkout page
  const handleCheckOut = (id) => {
    navigate(`/checkout/${id}`);
  };
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{comment}</Card.Text>
          {/* navigate handle */}
          <Button onClick={() => handleCheckOut(id)} variant="outline-dark">
            Check out
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
