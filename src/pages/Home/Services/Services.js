import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container>
      <h2 className="service-title text-warning">Services</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service) => (
          <Service key={services.id} service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
