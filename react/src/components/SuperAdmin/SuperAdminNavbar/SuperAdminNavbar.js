import React from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'
function SuperAdminNavbar() {
    return (
        <div id="superAdminNavbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand">Neo Cars</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link
            id="superAdminDashboardLink"
            style={{textDecoration:"none"}}
            to="/superadmin/adminList">
                <span className="nav-item nav-link">Dashboard</span>
            </Link>
            <Link
            id="superAdminBookingLink"
            style={{textDecoration:"none"}}
            to="/superadmin/adminBookings">
                <span className="nav-item nav-link">Booking</span></Link>
            <Link 
            style={{marginLeft:"870px",textDecoration:"none"}}
            onClick={()=>localStorage.clear()}
            id="superAdminLogoutButton"
            to="/superadmin/login">
            <span  className="nav-item nav-link navbar-right">Logout</span>
            </Link>
            </div>
            </div>
            </nav>
        </div>
    )
}

export default SuperAdminNavbar
