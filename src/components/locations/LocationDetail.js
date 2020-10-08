import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Locations.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const { locations, getLocationById } = useContext(LocationContext)

    const [employee, setEmployee] = useState({})
    const [location, setLocation] = useState({})
    const [animal, setAnimal] = useState({})


    const { locationId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", locationId)
        getLocationById(locationId)
            .then((response) => {
                setLocation(response)
                setEmployee(response.employee)
                setAnimal(response.animal)
            })
    }, [])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>



        </section>
    )
}