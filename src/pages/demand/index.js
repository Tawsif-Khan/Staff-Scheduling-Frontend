import React, { useEffect, useState } from "react";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import { post, get } from "../../api/axios";

export default function Index() {
  const [morning, setMorning] = useState(0);
  const [afternoon, setAfternoon] = useState(0);
  const [night, setNight] = useState(0);

  useEffect(() => {
    getDemand();
  }, []);

  async function getDemand() {
    try {
      const response = await get(`api/get/demand/1`);
      setMorning(response?.data.morning);
      setAfternoon(response?.data.afternoon);
      setNight(response?.data.night);
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      params: {
        morning,
        afternoon,
        night,
      },
      modelName: "demand",
    };

    try {
      const response = await post(`api/data/1`, payload);
      console.log(response);
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
    }
  };
  return (
    <>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4">Update Daily Demand</h5>
          <Form>
            <Row className="align-items-center">
              <Col md={4} className="mb-3">
                <Form.Group id="morning">
                  <Form.Label>Morning</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="+12-345 678 910"
                    value={morning}
                    onChange={(e) => setMorning(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="mb-3">
                <Form.Group id="afternoon">
                  <Form.Label>Afternoon</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="+12-345 678 910"
                    value={afternoon}
                    onChange={(e) => setAfternoon(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="mb-3">
                <Form.Group id="night">
                  <Form.Label>Night</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="+12-345 678 910"
                    value={night}
                    onChange={(e) => setNight(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="mt-3 right">
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Update
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
