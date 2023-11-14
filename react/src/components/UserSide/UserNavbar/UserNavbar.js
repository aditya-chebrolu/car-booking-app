import React from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'

function UserNavbar() {
    const ID=localStorage.getItem("userID")
    return (
        <nav id="userNavbar" className="navbar navbar-expand-lg navbar-dark bg-primary">
          <span className="navbar-brand">Neo Cars</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link 
              style={{textDecoration:"none"}}
              id="userDashboardLink"
              to="/user/dashboard"><span className="nav-item nav-link">Dashboard</span>
              </Link>
              <Link 
              id="userProfileLink"
              style={{textDecoration:"none"}}
              to={`/user/profile/${ID}`}><span className="nav-item nav-link">Profile</span>
              </Link>
              <Link 
              id="userBookingLink"
              style={{textDecoration:"none"}}
              to={`/user/bookings/${ID}`}><span className="nav-item nav-link">My Bookings</span>
              </Link>
              <Link 
              style={{marginLeft:"805px",textDecoration:"none"}}
              onClick={()=>localStorage.clear()}
              to="/login">
                <span  className="nav-item nav-link navbar-right">Logout</span>
              </Link>
            </div>
          </div>
        </nav>
    )
}

export default UserNavbar