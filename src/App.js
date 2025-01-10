import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import './App.css';

const App = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Fetch the employee list from the API
        const fetchEmployees = async () => {
            const response = await axios.get("http://localhost:8000/employees");
            setEmployees(response.data);
        };

        fetchEmployees();
    }, []);

    const addEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    };

    return (
        <Container>
            <Row>
                <Col md="12">
                    <h1>Employee Management</h1>
                    <EmployeeForm onAdd={addEmployee} />
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <EmployeeList employees={employees} />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
