import React from "react";
import Slide from "react-reveal/Slide";
import Loc from "../components/location2";
import { Container, Button } from "react-bootstrap";
import "../css/contact.css";

const ContactPage = () => {
  return (
    <>
      <Container fluid={true} className="contact__bg">
        <br />
        <Loc className="loc-txt" />

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
              <Button
                variant="light"
                className="hero__btn"
                onClick={() =>
                  window.open("https://calendly.com/thomasandassociates")
                }
              >
                Schedule Consultation
              </Button>
            </Slide>
          </div>
        </div>
        <br />
        <br />
      </Container>
    </>
  );
};

export default ContactPage;
