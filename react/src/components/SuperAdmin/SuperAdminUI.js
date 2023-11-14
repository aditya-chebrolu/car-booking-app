import React from 'react'
import {Route, Switch, Redirect, useRouteMatch} from 'react-router-dom'
import Dashboard from './SuperAdminDashboard/Dashboard'
import SuperAdminNavbar from "./SuperAdminNavbar/SuperAdminNavbar"

function SuperAdminUI() {
    let {url}=useRouteMatch()
    if(localStorage.getItem("access") && localStorage.getItem("role")==="super"){
        return (
            <>
            <SuperAdminNavbar/>
            <Switch>
                <Route exact path={`${url}/adminList`} component={Dashboard}/>
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

export default SuperAdminUI
