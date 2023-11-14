import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DashboardChild from "./DashboardChild"

function Dashboard() {
    const[admins,setAdmins]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/superadmin/dashboard")
        .then(res=>{
            setAdmins(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div id="allUserDetails">
            {admins.map(x=><DashboardChild key={x.adminID} props={x}/>)}
        </div>
    )
}

export default Dashboard
