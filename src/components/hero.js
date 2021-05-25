import React from "react";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import TextLoop from "react-text-loop";
import { FaSortDown } from "react-icons/fa";
import { Row, Col, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const hero = () => {
  return (
    <Row className="hero__bg">
      <Col />
      <Col xs={12} sm={12} md={6} lg={6} className="hero__rightbg">
        <div className="my-5 text-white text-center">
          <br />
          <br />
          <br />
          <br />
          <Flip bottom>
            <h2 className="pretrans">Thomas & Associates Insurance Agency</h2>
          </Flip>
          <br />
          <Flip bottom>
            <h4 className="pretrans">
              Providing, but not limited to:{" "}
              <TextLoop>
                <h4 className="type__text pretrans">Auto Insurance</h4>
                <h4 className="type__text pretrans">Home Insurance</h4>
                <h4 className="type__text pretrans">Life Insurance</h4>
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
          <br />

          <br />
          <br />
          <Flip bottom>
            <h4 className="pretrans">
              Your one stop shop for all things insurance
            </h4>
          </Flip>
          <br />
          <br />
          <br />
          <br />
          <Slide bottom>
            <HashLink to="#reviews" smooth>
              <FaSortDown size={46} color="#734b6d" />
            </HashLink>
          </Slide>
        </div>
      </Col>
    </Row>
  );
};

export default hero;
