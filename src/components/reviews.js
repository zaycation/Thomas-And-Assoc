import React from "react";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { FaYelp, FaRegStar } from "react-icons/fa";
import { Row, Col, Image, Card } from "react-bootstrap";

const reviews = () => {
  return (
    <>
      <Row>
        <Col id="reviews">
          <br />
          <br />
          <br />
          <Flip bottom>
            <h4 className="text-center my-3">What Our Clients Are Saying</h4>
          </Flip>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4} lg={4} className="my-5">
          <Slide left>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <Image
                    src="https://s3-media0.fl.yelpcdn.com/photo/-wuyqBoMmcelZGaPnBSscQ/60s.jpg"
                    roundedCircle
                    width="60px"
                    height="60px"
                  />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Jane A.
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Palmdale, CA
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  <FaRegStar color="#D7BE69" />
                  <FaRegStar color="#D7BE69" />
                  <FaRegStar color="#D7BE69" />
                  <FaRegStar color="#D7BE69" />
                </Card.Subtitle>
                <Card.Text>
                  "Top quality tint n installation.lots of different
                  shades.great prices with fast service.open on Sundays by
                  appointment.perfect tint shop!"
                </Card.Text>
                <FaYelp size={40} color="red" />
                <br />
                <Card.Link href="https://www.yelp.com/biz/al-s-window-tinting-lancaster?hrid=ugSoxtdZwC6-ixpdBxROzA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)">
                  View Review on Yelp
                </Card.Link>
              </Card.Body>
            </Card>
          </Slide>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} className="my-5">
          <Slide bottom>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <Image
                    src="https://s3-media0.fl.yelpcdn.com/photo/nOkclDZOAdBsdEq5z8NsDA/348s.jpg"
                    roundedCircle
                    width="60px"
                    height="60px"
                  />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Donald W.
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Los Angeles, CA
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  <FaRegStar color="#D7BE69" />
                  <FaRegStar color="#D7BE69" />
                  <FaRegStar color="#D7BE69" />
                  <FaRegStar color="#D7BE69" />
                  <FaRegStar color="#D7BE69" />
                </Card.Subtitle>
                <Card.Text>
                  "Had my Lincoln MKZ windows tinted. Came out perfect! Couldn't
                  be more satisfied and it was fast service too! Dropped the car
                  off and less than an hour later got a call back saying it was
                  done. To top it all off it comes with a lifetime warranty
                  too!"
                </Card.Text>
                <FaYelp size={40} color="red" />
                <br />
                <Card.Link href="https://www.yelp.com/biz/al-s-window-tinting-lancaster?hrid=7p4iu_2_W_VvwVSrGujISg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)">
                  View Review on Yelp
                </Card.Link>
              </Card.Body>
            </Card>
          </Slide>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} className="my-5">
          <Slide right>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <Image
                    src="https://s3-media0.fl.yelpcdn.com/photo/xZCBlV30u_WqeYNjwB367Q/60s.jpg"
                    roundedCircle
                    width="60px"
                    height="60px"
                  />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Lia A.
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Lancaster, CA
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  <FaRegStar color="#D7BE69" />
                  <FaRegStar color="#D7BE69" />
                  <FaRegStar color="#D7BE69" />
                  <FaRegStar color="#D7BE69" />
                  <FaRegStar color="#D7BE69" />
                </Card.Subtitle>
                <Card.Text>
                  "Very professional. I requested legal tint on my front windows
                  which came out to light for me so they gladly made it darker
                  for a small fee. I'm very happy with their work. Would
                  definitely recommend "
                </Card.Text>
                <FaYelp size={40} color="red" />
                <br />
                <Card.Link href="https://www.yelp.com/biz/ruby-nail-glendale-2?hrid=lv3MTEdXGjqdvVK8l_jq5A&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)">
                  View Review on Yelp
                </Card.Link>
              </Card.Body>
            </Card>
          </Slide>
        </Col>
      </Row>
    </>
  );
};

export default reviews;
