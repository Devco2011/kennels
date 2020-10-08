import React from "react"
import "./Locations.css"
import { Link } from "react-router-dom"




export const LocationCard = ({ location }) => (
    <section className="location">
        <Link to={`/locations/detail/${location.id}`}>
            <h3 className="location__name">{location.name}</h3>
        </Link>
        <div className="location__numEployees">Number of Employees: {location?.employee?.name}</div>
    </section>
)
