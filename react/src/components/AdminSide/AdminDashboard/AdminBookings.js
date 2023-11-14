import React,{useEffect,useState} from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Style from "../AdminDashboard/AdminDashboard.module.css"
import axios from 'axios'
import { useParams } from 'react-router'


function AdminBookings() {
    const id=useParams().adminId
    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/bookings/${id}`)
        .then(res=>{
            setData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div id="adminBookings" className="container">
            <div className="row mt-2 ">
            <table className={` table ${Style.table}`}>
            <thead className="bg-primary text-white">
                <tr className="row">
                <th className={`col bg-primary ${Style.goa}`}>Booking ID</th>
                <th className="col">User ID</th>
                <th className="col">Car Model</th>
                <th className="col">Rent</th>
                <th className="col">Days</th>
                <th className={`col bg-primary ${Style.aog}`}>Total Price</th>
                </tr>
            </thead>
            <tbody id="bookingList" className="bg-light" >
                {data.map(x=>(
                    <tr key={x.bookingID} className="row">
                        <td className="col bg-light" >{x.bookingID}</td>
                        <td className="col">{x.userID}</td>
                        <td className="col">{x.model}</td>
                        <td className="col">{x.rent}</td>
                        <td className="col">{x.days}</td>
                        <td className="col bg-light">{x.totalPrice}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
    )
}

export default AdminBookings
