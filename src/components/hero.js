import React from "react";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import TextLoop from "react-text-loop";
import { Row, Col, Button } from "react-bootstrap";
//import { FaSortDown } from "react-icons/fa";
//import { HashLink } from "react-router-hash-link";

const hero = () => {
  return (
    <Row className="hero__bg">
      <Col />
      <Col xs={12} sm={12} md={6} lg={6} className="hero__rightbg">
        <div className="my-5 text-white text-center">
          <br />
          <br />
          <Flip bottom>
            <h2 className="pretrans">Thomas & Associates Insurance Agency</h2>
          </Flip>
          <br />
          <Flip bottom>
            <h4 className="pretrans">
              Providing, but not limited to:{" "}
              <TextLoop className="text-trans">
                <h4 className="type__text pretrans mx-1">Auto Insurance</h4>
                <h4 className="type__text pretrans mx-1">Home Insurance</h4>
                <h4 className="type__text pretrans mx-1">Life Insurance</h4>
              </TextLoop>
            </h4>
          </Flip>
          <br />
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <Slide left>
                <Button
                  variant="light"
                  className="hero__btn"
                  onClick={() => window.open("tel:773-268-4888")}
                >
                  Get An Instant Quote
                </Button>
              </Slide>
            </div>{" "}
            <div>
              <Slide right>
                <Button variant="light" className="hero__btn">
                  Schedule Consultation
                </Button>
              </Slide>
            </div>
          </div>
          <br />
          <br />
          <Flip bottom>
            <h4 className="pretrans">
              Your one stop shop for all things insurance
            </h4>
          </Flip>
        </div>
      </Col>
    </Row>
  );
};

export default hero;
