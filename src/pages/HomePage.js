import React from "react";
import Slide from "react-reveal/Slide";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

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
        <br />
        <br />
        <Why />
      </Container>
      <Container>
        <Row>
          <Col>
            <Slide left>
              <div className="my-5">
                <Card className="my-5">
                  <Card.Header>
                    Already Insured?<strong> We'll Help you switch!</strong>
                  </Card.Header>
                  <Card.Body>
                    70% of new Thomas & Assoc customers have saved more than
                    $50/month by working with us!
                  </Card.Body>
                </Card>
                <Card className="my-5">
                  <Card.Header>
                    <strong>
                      We Only Offer the Best Companies to Our Clients
                    </strong>
                  </Card.Header>
                  <Card.Body>
                    MetLife, Safeco, Nationwide, AIG, Liberty Mutual,
                    Progressive, Metromile, and many more!
                  </Card.Body>
                </Card>
                <Card className="my-5">
                  <Card.Header>
                    <strong>The Widest Reach</strong>
                  </Card.Header>
                  <Card.Body>
                    Most local agents and online sites only offer 5-6 insurance
                    companies. We offer more than 30 options to choose from!
                  </Card.Body>
                </Card>
              </div>
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
              <div className="my-5">
                <Card className="my-5">
                  <Card.Header>
                    We Want Your Business - <strong>Not Your Data</strong>
                  </Card.Header>
                  <Card.Body>
                    Thomas & Assoc takes your privacy seriously. Unlike other
                    online agents, we will never share or sell your personal
                    information.
                  </Card.Body>
                </Card>
                <Card className="my-5">
                  <Card.Header>
                    <strong>We Make Insurance Fun!</strong>
                  </Card.Header>
                  <Card.Body>
                    We know insurance can be a complicated pain. Our advanced
                    agents make the process simple and fun.
                  </Card.Body>
                </Card>
                <Card className="my-5">
                  <Card.Header>
                    <strong>Still Have Questions?</strong>
                  </Card.Header>
                  <Card.Body>
                    Give us a call today! We are happy to answer and clarify
                    anything related to insurance if you still need help
                    deciding.
                  </Card.Body>
                </Card>
              </div>
            </Slide>
          </Col>
        </Row>
        <Loc />
      </Container>
    </>
  );
};

export default HomePage;
