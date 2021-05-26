import React from "react";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { Row, Col } from "react-bootstrap";
import { FcMoneyTransfer, FcCollaboration, FcBriefcase } from "react-icons/fc";

const why = () => {
  return (
    <>
      <Row>
        <Col>
          <Flip bottom>
            <div className="text-center">
              <h2 className="my-5">Why Work With Us?</h2>
            </div>
          </Flip>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Slide left>
            <div className="my-3 text-center">
              <FcCollaboration size={48} />
              <h4>Expert Guidance</h4>
              <h6>Our insurance experts always have an answer</h6>
            </div>
          </Slide>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Slide bottom>
            <div className="my-3 text-center">
              <FcMoneyTransfer size={48} />
              <h4>Great Service... Great Prices</h4>
              <h6>
                Affordable prices for <strong>every one</strong>. No matter the
                size.
              </h6>
            </div>
          </Slide>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Slide right>
            <div className="my-3 text-center">
              <FcBriefcase size={48} />
              <h4>Personalized Service</h4>
              <h6>Your situation is unique so our approach is too</h6>
            </div>
          </Slide>
        </Col>
      </Row>
    </>
  );
};

export default why;
