import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"

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

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the customers list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* Render the employee list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}