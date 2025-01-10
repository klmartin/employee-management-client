import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const EmployeeList = ({ employees }) => {
    return (
        <div>
            <h2>Employee List</h2>
            <ListGroup>
                {employees.map((employee) => (
                    <ListGroupItem key={employee.id}>
                        {employee.first_name} {employee.last_name} - {employee.job_title} ({employee.department})
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
};

export default EmployeeList;
