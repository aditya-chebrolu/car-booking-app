import React from 'react'
import Style from "../UserDashboard/UserDashboard.module.css"
import {useHistory} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';

// import companyLogo from '../UserDashboard/ola.jpg';

function DashboardChild({props}) {
    const history=useHistory()
    const goto=(e)=>{
        localStorage.setItem("adminID",props.adminID)
        history.push(`/user/companyDetail/${props.adminID}`)
    }
    return (
    <div>
        <div role="button" onClick={goto} className={`row p-1 ${Style.box} ${Style.divbutton}`} >
            <div className="col-4 d-flex flex-row">
                <span className="pt-2">
                    <Avatar alt={props.companyName} src=""/>
                </span>
                <span className="pt-3 ml-5 h6">{props.companyName}</span>
            </div>
            <div className="col-4 pt-3 h6">{props.companyAddress}</div>
            <div className="col-4 pt-3 h6">{props.mobileNumber}</div>
        </div>        
    </div>
    )
}

export default DashboardChild
