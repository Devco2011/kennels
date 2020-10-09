import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Locations.css"
import { useHistory } from "react-router-dom"
import { AnimalContext } from "../animal/AnimalProvider"
import { EmployeeContext } from "../employees/EmployeeProvider"
import { EmployeeForm } from "../employees/EmployeeForm"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { animals, getAnimals } = useContext(AnimalContext)
    const history = useHistory()

    useEffect(() => {
        getLocations()

    }, [])

    return (
        <>
            <h2>Locations</h2>
            <button onClick={() => { history.push("/locations/create") }}>
                Add Location
        </button>
            <div className="locations">
                {
                    locations.map(location => {
                        return <LocationCard key={location.id} location={location}
                            employees={employees.length} />

                    })
                }
            </div>
        </>
    )
}

