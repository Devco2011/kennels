import React from "react"
import { Link } from "react-router-dom"
import "./Employees.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <Link to={`/employees/detail/${employee.id}`}>
            <h4>Details</h4>
        </Link>
    </section>
)