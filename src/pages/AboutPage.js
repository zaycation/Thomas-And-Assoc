import React from "react";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../css/about.css";

const AboutPage = () => {
  return (
    <Container fluid={true} className="container-fluid about__bg">
      <Row>
        <Col className="my-5 text-center">
          <Slide left>
            <div className="text-white">
              <h4 className="my-5 mx-4">
                All About Thomas & Associates Insurance Agency!
              </h4>
              <h6 className="my-4">Established in 1992</h6>
              <p className="mx-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </p>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <div>
                <Slide left>
                  <Button
                    variant="light"
                    onClick={() => window.open("tel:773-268-4888")}
                  >
                    Get An Instant Quote
                  </Button>
                </Slide>
              </div>
              <div className="ml-1">
                <Slide right>
                  <Button
                    variant="light"
                    onClick={() =>
                      window.open("https://calendly.com/thomasandassociates")
                    }
                  >
                    Schedule Consultation
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
      </Row>
    </Container>
  );
};

export default AboutPage;
