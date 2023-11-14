import React from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'

function AdminNavbar() {

  const ID=localStorage.getItem("adminID")

    return (

<nav id="adminNavbar" className="navbar navbar-expand-lg navbar-dark bg-primary">
  <span className="navbar-brand">Neo Cars</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link style={{textDecoration:"none"}} 
      id="adminDashboardLink"
      to="/admin/dashboard"><span className="nav-item nav-link">Dashboard</span></Link>
      <Link style={{textDecoration:"none"}}
      id="adminProfileLink"
      to={`/admin/profile/${ID}`}><span className="nav-item nav-link">Profile</span></Link>
      <Link
      id="adminBookingLink" 
      style={{textDecoration:"none"}} to={`/admin/bookings/${ID}`}><span className="nav-item nav-link">Booking</span></Link>
      <Link 
      style={{marginLeft:"825px",textDecoration:"none"}}
      id="adminLogoutButton"
      onClick={()=>localStorage.clear()}
      to="/login">
        <span  className="nav-item nav-link navbar-right">Logout</span>
      </Link>
    </div>
  </div>
</nav>
    )
}

export default AdminNavbar