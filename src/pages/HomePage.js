
import React from "react";
import Slide from "react-reveal/Slide";
import { Container, Row, Col, Image } from "react-bootstrap";

import Hero from "../components/hero";
import Why from "../components/why";
import Loc from "../components/location";
//import Rev from "../components/reviews";
import "../css/home.css";

const HomePage = () => {
  return (
    <>
      <Container fluid={true}>
        <Hero />
        <Why />
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <Slide left>
              <br />
              <h4>Lorem ipsum dolor sit am</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut!
              </p>
            </Slide>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Image
              src="https://i.ibb.co/XXykRTB/Black-Man-Working-on-Analytics.png"
              rounded
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Image
              src="https://i.ibb.co/LYSS2fQ/Black-Women-Using-a-White-Board-B.png"
              rounded
              fluid
            />
          </Col>
          <Col>
            <Slide right>
              <br />
              <h4>Lorem ipsum dolor sit am</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut!
              </p>
            </Slide>
          </Col>
        </Row>
        <Loc />
      </Container>
    </>
  );
};

export default HomePage;
