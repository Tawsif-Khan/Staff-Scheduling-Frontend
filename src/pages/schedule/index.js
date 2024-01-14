import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Table,
  Card,
  Form,
  Button,
  Badge,
} from "@themesberg/react-bootstrap";
import { Nav, Tab } from "@themesberg/react-bootstrap";
import { get } from "../../api/axios";
import Shimmer from "../components/Shimmer";

export default function Index() {
  const tabs = [
    "Satureday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const shiftColor = ["info", "light", "dark"];
  const shiftTextColor = ["white", "dark", "white"];
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    getSchedule();
  }, []);

  async function getSchedule() {
    try {
      const response = await get(`api/get-schedule`);
      console.log(response);
      setSchedules(response?.schedule);
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
    }
  }

  const generateSchedule = async () => {
    try {
      const response = await get(`api/generate-schedule`);
      console.log(response);
      setSchedules(response?.schedule);
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
    }
  };
  return (
    <>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Header className="d-flex justify-content-between">
          <h3>Schedule</h3>
          <Button onClick={generateSchedule} variant="primary" className="m-1">
            Generate Schedule
          </Button>
        </Card.Header>
        <Card.Body>
          <Tab.Container defaultActiveKey={0}>
            <Nav fill variant="pills" className="flex-column flex-sm-row">
              {tabs.map((tab, i) => {
                return (
                  <Nav.Item key={tab}>
                    <Nav.Link eventKey={i} className="mb-sm-3 mb-md-0">
                      {tab}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
            <Tab.Content>
              {schedules ? (
                schedules.map((day, i) => {
                  return (
                    <Tab.Pane eventKey={i} key={i} className="py-1">
                      <Card border="light" className="shadow-sm mb-4">
                        <Card.Body className="pb-0">
                          <Table
                            responsive
                            className="table-centered table-nowrap rounded mb-0"
                          >
                            <thead className=" bg-primary text-white text-center">
                              <tr>
                                <th>Morning</th>
                                <th>Afternoon</th>
                                <th>Night</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                {day.map((shift, i) => {
                                  return (
                                    <td key={shift.id}>
                                      <div className="row">
                                        {shift.map((p, index) => {
                                          return (
                                            <Badge
                                              key={p.sid}
                                              className="badge-lg col p-3 m-2"
                                              bg={shiftColor[i]}
                                              text={shiftTextColor[i]}
                                            >
                                              {p.sid}
                                            </Badge>
                                          );
                                        })}
                                      </div>
                                    </td>
                                  );
                                })}
                              </tr>
                            </tbody>
                          </Table>
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                  );
                })
              ) : (
                <Shimmer />
              )}
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </>
  );
}
