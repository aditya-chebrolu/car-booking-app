import React,{useEffect,useState} from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import DashboardChild from './DashboardChild'
import axios from 'axios'

function UserDashboard(){
    const[info,setInfo]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/user/dashboard").then(res=>{
            setInfo(res.data)
          }).catch((err)=>{
              console.log(err)
        })
    },[])

    return(
        <div id="userDashboard">
            {info.map(x=><DashboardChild key={x.adminID} props={x}/>)}
        </div>
    )
}
export default UserDashboard