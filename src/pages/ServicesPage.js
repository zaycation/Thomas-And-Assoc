import React from "react";
import { Container } from "react-bootstrap";

import Services from "../components/services";
import "../css/services.css";

const ServicesPage = () => {
  return (
    <Container fluid={true} className="services__bg">
      <Services />
    </Container>
  );
};

export default ServicesPage;
