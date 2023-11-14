import React,{useEffect,useState} from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Style from "../UserDashboard/UserDashboard.module.css"
import axios from 'axios'
import { useParams } from 'react-router'
import { v4 as uuidv4 } from 'uuid';

function UserBookings() {
    const id=useParams().userId
    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/user/bookings/${id}`)
        .then(res=>{
            setData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div id="userBookingBody" className="container">
            <div className="row mt-2 ">
            <table className={` table ${Style.table}`}>
            <thead className="bg-primary text-white">
                <tr className="row">
                <th className={`col bg-primary ${Style.goa}`}>Company Name</th>
                <th className="col">Car Model</th>
                <th className="col">Rent</th>
                <th className="col">Days</th>
                <th className={`col bg-primary ${Style.aog}`}>Total Price</th>
                </tr>
            </thead>
            <tbody className="bg-light" >
                {data.map(x=>
                    (
                        <tr key={uuidv4()} className="row">
                        <td className="col bg-light" >{x.companyName}</td>
                        <td className="col">{x.model}</td>
                        <td className="col"></td>
                        <td className="col"></td>
                        <td className="col bg-light"></td>
                        </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
    )
}

export default UserBookings
