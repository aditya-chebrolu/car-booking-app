import React from 'react'
import { useHistory } from 'react-router'
import Styles from './UserDashboard.module.css'

function CompanyChild({props}) {
    const history=useHistory()
    const goto=e=>{
        history.push(`/user/carDetail/${props.carID}`)
    }

    let style=props.status==="Booked"?"text-danger":"text-success"
    return (
        <div 
        
        onClick={()=>{props.status==="Available"?goto():alert("Already Booked")}}
        className={props.status==="Booked"?
            `${Styles.bgstyle} ${Styles.divbutton2} m-0 d-flex justify-content-around row-hl py-3 mb-2`
            :
            `${Styles.bgstyle} ${Styles.divbutton} m-0 d-flex justify-content-around row-hl py-3 mb-2`
        }
        >
        <div className="w-25">Car Model : {props.type}</div>
        <div className="w-25">{props.price}</div>
        <div className="w-25">{props.model}</div>
        <div className={`w-25 text-success font-weight-bold ${style}`}>{props.status}</div>
        </div>
    )
}

export default CompanyChild
