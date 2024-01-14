import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faEnvelopeOpen,
  faSearch,
  faSignOutAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  Row,
  Col,
  Nav,
  Form,
  Image,
  Navbar,
  Dropdown,
  Container,
  ListGroup,
  InputGroup,
} from "@themesberg/react-bootstrap";

import NOTIFICATIONS_DATA from "../data/notifications";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const areNotificationsRead = notifications.reduce(
    (acc, notif) => acc && notif.read,
    true
  );

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map((n) => ({ ...n, read: true })));
    }, 300);
  };

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead}>
              <Dropdown.Toggle
                as={Nav.Link}
                className="text-dark icon-notifications me-lg-3"
              ></Dropdown.Toggle>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
