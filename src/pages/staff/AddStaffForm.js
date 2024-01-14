import React, { useState } from "react";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";

import { post } from "../../api/axios";
export default function AddStaffForm() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [pref_morning, setPrefMorning] = useState(0.67);
  const [pref_afternoon, setPrefAfternoon] = useState(0.67);
  const [pref_night, setPrefNight] = useState(0.67);
  // const [pref_weekend_1, setPrefWeekend1] = useState("");
  // const [pref_weekend_2, setPrefWeekend2] = useState("");
  const [weekends, setWeekends] = useState([]);
  const [disableWeekendCheck, setDisableWeekendCheck] = useState(false);
  const [counter, setCounter] = useState(0);
  const [weekendCheck, setWeekendCheck] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  function handleShifts(shift) {
    setPrefMorning(0.67);
    setPrefAfternoon(0.67);
    setPrefNight(0.67);

    if (shift === 1) {
      setPrefMorning(1.67);
    } else if (shift === 2) {
      setPrefAfternoon(1.67);
    } else {
      setPrefNight(1.67);
    }
  }

  function handleWeekends(value, dayNumber) {
    const tempArray = [...weekendCheck];

    tempArray[dayNumber - 1] = !tempArray[dayNumber - 1];
    setCounter((counter) =>
      !tempArray[dayNumber - 1] ? counter + 1 : counter - 1
    );

    setWeekendCheck(tempArray);
    handleWeekendDisabled();
    setWeekends(
      tempArray.reduce((acc, element, index) => {
        if (element === false) {
          acc.push(index + 1);
        }
        return acc;
      }, [])
    );
  }

  function handleWeekendDisabled() {
    setDisableWeekendCheck(counter === 2);
  }

  const handleSubmit = async (e) => {
    let [weekend_1, weekend_2] = weekends;

    e.preventDefault();
    const payload = {
      params: {
        name: name,
        sid: id,
        phone: phone,
        gender: gender,
        pref_morning,
        pref_afternoon,
        pref_night,
        pref_weekend_1: weekend_1,
        pref_weekend_2: weekend_2,
      },
      modelName: "employee",
    };

    try {
      const response = await post(`api/add-data`, payload);
      console.log(response);
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
    }
  };
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Add new staff</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Staff Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Staff name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Staff ID</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Also Staff ID"
                  onChange={(e) => setId(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  defaultValue=""
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Gender</option>
                  <option value="F">Female</option>
                  <option value="M">Male</option>
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <h5 className="my-4">Preferred Shift</h5>
          <Row className="">
            <Col sm={9} className="mb-3">
              <Form.Group id="shift" className="d-flex">
                <Form.Check
                  required
                  type="radio"
                  label="Morning"
                  className="me-4"
                  name="shift"
                  value={1}
                  onChange={(e) => handleShifts(1)}
                />
                <Form.Check
                  required
                  type="radio"
                  label="Afternoon"
                  className="me-4"
                  name="shift"
                  value={2}
                  onChange={(e) => handleShifts(2)}
                />
                <Form.Check
                  required
                  type="radio"
                  label="Night"
                  className="me-4"
                  name="shift"
                  value={3}
                  onChange={(e) => handleShifts(3)}
                />
              </Form.Group>
            </Col>
          </Row>
          <h5 className="my-4">Choose weekends</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="weekends" className="d-flex">
                <Form.Check
                  required
                  type="checkbox"
                  label="Saturday"
                  className="me-4"
                  disabled={
                    weekendCheck[0] != disableWeekendCheck && counter === 2
                  }
                  onChange={(e) => handleWeekends(e.target.value, 1)}
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Sunday"
                  className="me-4"
                  onChange={(e) => handleWeekends(e.target.value, 2)}
                  disabled={
                    weekendCheck[1] != disableWeekendCheck && counter === 2
                  }
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Monday"
                  className="me-4"
                  onChange={(e) => handleWeekends(e.target.value, 3)}
                  disabled={
                    weekendCheck[2] != disableWeekendCheck && counter === 2
                  }
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Tuesday"
                  className="me-4"
                  onChange={(e) => handleWeekends(e.target.value, 4)}
                  disabled={
                    weekendCheck[3] != disableWeekendCheck && counter === 2
                  }
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Wednesday"
                  className="me-4"
                  onChange={(e) => handleWeekends(e.target.value, 5)}
                  disabled={
                    weekendCheck[4] != disableWeekendCheck && counter === 2
                  }
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Thursday"
                  className="me-4"
                  onChange={(e) => handleWeekends(e.target.value, 6)}
                  disabled={
                    weekendCheck[5] != disableWeekendCheck && counter === 2
                  }
                />
                <Form.Check
                  required
                  type="checkbox"
                  label="Friday"
                  className="me-4"
                  onChange={(e) => handleWeekends(e.target.value, 7)}
                  disabled={
                    weekendCheck[6] != disableWeekendCheck && counter === 2
                  }
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
              Save
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
