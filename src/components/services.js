import React from "react";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { Row, Col, Card, Button } from "react-bootstrap";

const services = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col className="my-3">
          <Flip bottom>
            <h2 className="text-center text-white">Services We Offer</h2>
          </Flip>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            <Flip bottom>
              <Card.Body>Window Tinting</Card.Body>
            </Flip>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            <Flip bottom>
              <Card.Body>Window Tint Removal</Card.Body>
            </Flip>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            <Flip bottom>
              <Card.Body>Vehicle Wrap Installation</Card.Body>
            </Flip>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            <Flip bottom>
              <Card.Body>Vehicle Wrap Removal</Card.Body>
            </Flip>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            <Flip bottom>
              <Card.Body>Headlight/Taillight Tinting</Card.Body>
            </Flip>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            <Flip bottom>
              <Card.Body>Paint Protection</Card.Body>
            </Flip>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <Slide left>
                <Button
                  variant="light"
                  className="hero__btn"
                  onClick={() => window.open("tel:661-679-8468")}
                >
                  Get Instant Quote
                </Button>
              </Slide>
            </div>{" "}
            <div>
              <Slide right>
                <Button
                  variant="light"
                  className="hero__btn"
                  onClick={() =>
                    window.open(
                      "https://www.yelp.com/biz/al-s-window-tinting-lancaster?hrid=7p4iu_2_W_VvwVSrGujISg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
                    )
                  }
                >
                  View Yelp Reviews
                </Button>
              </Slide>
            </div>
          </div>
          <Flip bottom>
            <h6 className="my-5 text-center text-white">
              *All services can be requested for auto, commercial or residential
              if necessary. Please note that pricing may vary.
            </h6>
          </Flip>
        </Col>
      </Row>
    </>
  );
};

export default services;

/*

window tinting auto, comercial, resizable
paint protection
*/
