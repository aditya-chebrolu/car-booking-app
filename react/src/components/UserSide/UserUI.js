import React from 'react'
import {Route, Switch, Redirect, useRouteMatch} from 'react-router-dom'
import CarBooking from './UserDashboard/CarBookingPage'
import CompanyDetails from './UserDashboard/CompanyDetails'
import UserBookings from './UserDashboard/UserBookings'
import UserDashboard from './UserDashboard/UserDashboard'
import UserNavbar from './UserNavbar/UserNavbar'
import EditProfile from './UserProfile/EditProfile'
import UserProfile from './UserProfile/UserProfile'

function UserUI() {
    
    let {url}=useRouteMatch()
    if(localStorage.getItem("access") && localStorage.getItem("role")==="user"){
        return (
            <>
            <UserNavbar/>
            <Switch>
                <Route exact path={`${url}/dashboard`} component={UserDashboard}/>
                <Route exact path={`${url}/companyDetail/:companyId`} component={CompanyDetails}/>
                <Route exact path={`${url}/carDetail/:carId`} component={CarBooking}/>
                <Route exact path={`${url}/bookings/:userId`} component={UserBookings}/>
                <Route path={`${url}/profile/:userId`} component={UserProfile}/>
                <Route path={`${url}/editProfile/:userId`} component={EditProfile}/>
                <Redirect to="/"/>
            </Switch>
            </>
        )
    }
    else
    {
        return(
            <Redirect to="/"/>
        )
    }

}

export default UserUI
