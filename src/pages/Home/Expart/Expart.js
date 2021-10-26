import React from "react";
import { Card, Col } from "react-bootstrap";

const Expart = ({ expart }) => {
  const { img, name, expertize } = expart;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{expertize}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Expart;
