import React from 'react'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import AdminDashboard from './AdminDashboard/AdminDashboard'
import {Route, Switch, Redirect, useRouteMatch} from 'react-router-dom'
import AdminProfile from './AdminProfile/AdminProfile'
import EditProfile from './AdminProfile/EditProfile'
import AdminBookings from './AdminDashboard/AdminBookings'
import AddCar from './AdminDashboard/AddCar'
import EditCar from './AdminDashboard/EditCar'

function AdminUI() {
    let {url}=useRouteMatch()
    if(localStorage.getItem("access") && localStorage.getItem("role")==="admin")
    {
        return (
            <>
            <AdminNavbar/>
            <Switch>
                <Route exact path={`${url}/dashboard`} component={AdminDashboard}/>
                <Route exact path={`${url}/profile/:adminId`} component={AdminProfile}/>
                <Route exact path={`${url}/editProfile/:adminId`} component={EditProfile}/>
                <Route exact path={`${url}/bookings`} component={AdminBookings}/>
                <Route exact path={`${url}/addCar`} component={AddCar}/>
                <Route exact path={`${url}/editCar/:carId`} component={EditCar}/>
                <Route path={`${url}/bookings/:adminId`} component={AdminBookings}/>
                <Redirect to="/"/>
            </Switch>
            </>
        )
    }
    else
    {
        return <Redirect to="/"/>
    }

}

export default AdminUI
