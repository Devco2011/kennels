import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeCard } from "./employees/EmployeeCard"
import { LocationCard } from "./locations/LocationCard"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the customers list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="/employees">
                <EmployeeCard />
            </Route>
        </>
    )
}