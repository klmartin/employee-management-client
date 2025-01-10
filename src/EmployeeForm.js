import React, { useState } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EmployeeForm = ({ onAdd }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEmployee = {
            first_name: firstName,
            last_name: lastName,
            job_title: jobTitle,
            department: department,
        };

        try {
            const response = await axios.post("http://localhost:8000/employees", newEmployee);
            onAdd(response.data);
            setFirstName("");
            setLastName("");
            setJobTitle("");
            setDepartment("");
        } catch (error) {
            console.error("Error adding employee", error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="jobTitle">Job Title</Label>
                <Input
                    type="text"
                    id="jobTitle"
                    placeholder="Job Title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="department">Department</Label>
                <Input
                    type="text"
                    id="department"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
            </FormGroup>
            <Button color="primary" type="submit">
                Add Employee
            </Button>
        </Form>
    );
};

export default EmployeeForm;
