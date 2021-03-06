import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <Link to={`/animals/detail/${animal.id}`}>
            <h4>Details</h4>
        </Link>

    </section>
)