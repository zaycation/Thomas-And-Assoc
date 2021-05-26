import React from "react";
import Loc from "../components/location2";
import { Container, Button } from "react-bootstrap";
import "../css/contact.css";

const ContactPage = () => {
  return (
    <>
      <Container fluid={true} className="contact__bg">
        <br />
        <Loc className="loc-txt" />
        <div className="text-center">
          <a href="tel:661-679-8468">
            <Button variant="dark" className="">
              Get Instant Quote
            </Button>
          </a>{" "}
          <a
            href="https://www.yelp.com/biz/al-s-window-tinting-lancaster?hrid=7p4iu_2_W_VvwVSrGujISg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="dark" className="">
              View Yelp Reviews
            </Button>
          </a>
        </div>
        <br />
        <br />
      </Container>
    </>
  );
};

export default ContactPage;
