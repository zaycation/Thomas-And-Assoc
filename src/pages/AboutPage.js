import React from "react";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../css/about.css";

const AboutPage = () => {
  return (
    <Container fluid={true} className="container-fluid">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className="my-5">
          <Slide left>
            <div>
              <h4 className="my-5">All About Al!</h4>
              <h6 className="my-4">Established in 1992</h6>
              <p>
                Al has been skilled in his craft for well over a few decades.
                Over the years, he has built a rapport from his clientele that
                continue to invest with him because of his great prices and
                exceptionally fast work. Al has never been shy of hard work.
                What he can do with his own two hands, most businesses couldn't
                even dream of doing! Get your work done with Al's Window Tinting
                and we'll promise you won't regret it!
              </p>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <div>
                <Slide left>
                  <Button
                    variant="dark"
                    onClick={() => window.open("tel:661-679-8468")}
                  >
                    Get Instant Quote
                  </Button>
                </Slide>
              </div>{" "}
              <div>
                <Slide right>
                  <Button
                    variant="dark"
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
                *All services can be requested for auto, commercial or
                residential if necessary. Please note that pricing may vary.
              </h6>
            </Flip>
          </Slide>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="about__bg" />
      </Row>
    </Container>
  );
};

export default AboutPage;
