import React from "react"
import { Link } from "react-router-dom"
import "./Employees.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="employee__location">{employee.location.name}</address>
    </section>
)