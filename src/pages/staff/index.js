import React, { useEffect, useState } from "react";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import Table from "../components/Table";

import { post } from "../../api/axios";
export default function Index() {
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginations, setPaginations] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchStaff();
  }, [currentPage]);

  const payload = {
    modelName: "employee",
    columns: ["name", "sid", "phone", "gender"],
    actions: ["edit"],
  };

  const fetchStaff = async () => {
    try {
      const response = await post(`api/table/get?page=${currentPage}`, payload);

      setStaffs(response?.data);
      setPaginations(response?.paginations);
    } catch (error) {
      console.error("Error creating app:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Table
          data={staffs}
          isLoading={loading}
          paginations={paginations}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Card.Body>
    </Card>
  );
}
