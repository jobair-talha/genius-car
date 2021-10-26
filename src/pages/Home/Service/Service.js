import React from "react";
import { Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, price, img, details } = service;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: {price}$</Card.Text>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
