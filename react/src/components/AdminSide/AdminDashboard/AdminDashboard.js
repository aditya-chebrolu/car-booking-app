import React,{useEffect,useState} from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Style from "../AdminDashboard/AdminDashboard.module.css"
import axios from 'axios'
import CarModel from "../AdminDashboard/CarModel"
import {useHistory} from 'react-router-dom'
import Divider from '@material-ui/core/Divider';


function UserDashboard(){
    const history=useHistory()
    const id=localStorage.getItem("adminID")
    const[info,setInfo]=useState([]);
    const[today,setToday]=useState(0);
    const[month,setMonth]=useState(0);
    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/dashboard/${id}`)
        .then(res=>{
            setInfo(res.data)
        }).catch(err=>{
            console.log(err);
        })

        axios.get(`http://localhost:8080/total/today/${id}`)
        .then(res=>{
            setToday(res.data)
        }).catch(err=>{
            console.log(err)
        })   
        
        axios.get(`http://localhost:8080/total/month/${id}`)
        .then(res=>{
            setMonth(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const toAddCarPage=()=>{
        history.push('/admin/addCar')
    }

    return(
        <div id="adminDashboard" className={`adminDashboard  row`}>
            <span className={` col-8 ${Style.box}`}>
                
                <div className={`${Style.heading}`}>Car Company Name</div>
                {info.map(x=><CarModel key={x.carID} props={x}/>)}
            </span>
            <span className={`row col-4 float-right fixed`}>
                <div className={`${Style.box1} bg-light`}>
                    <div className="pt-0 h6">Earnings </div>
                    <div>Total Today</div>
                    <div>{today}</div>
                    <Divider className="my-2" variant="middle" />
                    <div>Monthly</div>
                    <div>{month}</div>
                </div>

                <div className={`${Style.box2} bg-light`}>
                    <div>Want to add a car</div>
                    <button 
                    onClick={toAddCarPage}
                    type="button" id="addCarButton" 
                    className={`btn btn-warning ${Style.btn1}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg> Add a car</button>
                </div>
            </span>
            
        
        </div>
        
    )
}
export default UserDashboard