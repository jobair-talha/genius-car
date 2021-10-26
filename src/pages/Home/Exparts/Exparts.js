import React from "react";
import { Container, Row } from "react-bootstrap";
import mechanic1 from "../../../images/mechanic/mechanic-1.jpg";
import mechanic2 from "../../../images/mechanic/mechanic-2.jpg";
import mechanic3 from "../../../images/mechanic/mechanic-3.jpg";
import mechanic4 from "../../../images/mechanic/mechanic-4.jpg";
import Expart from "../Expart/Expart";
import "./Exparts.css";

const experts = [
  {
    id: 1,
    img: mechanic1,
    name: "Andrew Smith",
    expertize: "-Engine Expert-",
  },
  {
    id: 2,
    img: mechanic2,
    name: "John Anderson",
    expertize: "-Polish Expert-",
  },
  {
    id: 3,
    img: mechanic3,
    name: "Zakaria Smith",
    expertize: "-Coloring Expert-",
  },
  {
    id: 4,
    img: mechanic4,
    name: "Sakib Anderson",
    expertize: "-Alrounder Expert-",
  },
];

const Exparts = () => {
  return (
    <Container>
      <h2 className="expert-title text-warning">Experts Members</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {experts.map((expart) => (
          <Expart key={expart.id} expart={expart}></Expart>
        ))}
      </Row>
    </Container>
  );
};

export default Exparts;
