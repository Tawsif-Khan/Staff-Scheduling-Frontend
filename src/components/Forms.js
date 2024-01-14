import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
} from "@themesberg/react-bootstrap";

export const GeneralInfoForm = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Staff Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your first name"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Staff ID</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Also your last name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">Gender</option>
                  <option value="1">Female</option>
                  <option value="2">Male</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="+12-345 678 910"
                />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Weekdays</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="address" className="d-flex">
                <Form.Check
                  required
                  type="checkbox"
                  label="Saturday"
                  className="me-4"
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Sunday"
                  className="me-4"
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Monday"
                  className="me-4"
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Tuesday"
                  className="me-4"
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Wednesday"
                  className="me-4"
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Thursday"
                  className="me-4"
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Friday"
                  className="me-4"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" type="submit">
              Save All
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
