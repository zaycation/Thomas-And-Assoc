import React from "react";
import {
  RiWifiFill,
  RiBankCardLine,
  RiCarLine,
  RiHandHeartLine,
  RiPinDistanceLine,
  RiHandSanitizerLine,
} from "react-icons/ri";

import Slide from "react-reveal/Slide";
import { Row, Col, Table } from "react-bootstrap";

const location = () => {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} className="my-5">
        <Slide bottom>
          <div className="d-flex align-items-center justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8891.501107413545!2d-87.58530699961692!3d41.80576956989877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e297afabe4871%3A0x96f19f7086350fb2!2sThomas%20%26%20Associates%20Insurance%20Agency!5e0!3m2!1sen!2sus!4v1621984053867!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              title="als map"
            />
          </div>
        </Slide>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        <Slide left>
          <div className="text-center">
            <h4 className="my-4">Location & Hours</h4>
            <br />
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sun</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td>Mon</td>
                  <td>9:00 AM - 5:00 PM</td>
                </tr>
                <tr>
                  <td>Tue</td>
                  <td>9:00 AM - 5:00 PM</td>
                </tr>
                <tr>
                  <td>Wed</td>
                  <td>9:00 AM - 5:00 PM</td>
                </tr>
                <tr>
                  <td>Thu</td>
                  <td>9:00 AM - 5:00 PM</td>
                </tr>
                <tr>
                  <td>Fri</td>
                  <td>9:00 AM - 5:00 PM</td>
                </tr>
                <tr>
                  <td>Sat</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Slide>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        <Slide right>
          <h4 className="my-5 text-center">Updated Amenities</h4>

          <p className="d-flex align-items-center justify-content-center">
            <RiWifiFill className="mr-2" color="#734b6d" />
            Free Wi-Fi
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <RiHandHeartLine className="mr-2" color="#734b6d" />
            In-Person Visits
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <RiBankCardLine className="mr-2" color="#734b6d" />
            Accepts Credit Cards
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <RiCarLine className="mr-2" color="#734b6d" />
            Drive-to-you Service
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <RiPinDistanceLine className="mr-2" color="#734b6d" />
            Social Distancing Enforced
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <RiHandSanitizerLine className="mr-2" color="#734b6d" />
            Staff Sanitizes Between Clients
          </p>
        </Slide>
      </Col>
    </Row>
  );
};

export default location;
