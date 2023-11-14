import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import {useHistory} from 'react-router-dom'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Style from "../UserDashboard/UserDashboard.module.css"


function CarBooking(){
    const history=useHistory()
    const id=useParams().carId
    const[carInfo,setCarinfo]=useState({model:"",price:"",type:"",adminID:0})
    const bookinginfo={
        carID:id,
        adminID:localStorage.getItem("adminID"),
        userID:localStorage.getItem("userID"),
        rent:carInfo.price
    }
    
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/CarDetails/${id}`)
        .then(res=>{
            setCarinfo({
                model:res.data.model,
                price:res.data.price,
                type:res.data.type,
                adminID:res.data.adminID
            })
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const bookCar=(e)=>{
        axios.post("http://localhost:8080/user/bookcar",bookinginfo)
        .then(res=>{
            history.push(`/user/companyDetail/${bookinginfo.adminID}`)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div id="carBookingPage" className="container px-0">
            <div className=" row">
                <div className="col-4 mt-5 row">
                    <div style={{height:"300px"}} className={`col-12 ${Style.left}`}>
                    </div>
                    <div className={`${Style.shade} mr-2 col-2`}></div>
                    <div className={`${Style.shade} mr-2 col-2`}></div>
                    <div className={`${Style.shade} mr-2 col-2`}></div>
                    <div className={`${Style.shade} mr-2 col-2`}></div>
                    <div className={`${Style.shade} col-2`}></div>
                </div>



                <div className={`col-7  mt-5 offset-1 ${Style.text}`}>
                    <div className="row">
                        <div className={`${Style.text} col-3 text-left`}>
                            <p>Car Model</p>
                            <p>price</p>
                            <p>Type</p>
                        </div>
                        <div className={`${Style.text} col-9 text-left`}>
                            <p>: <span className={` ${Style.shade}`}>{carInfo.model}</span></p>
                            <p>: <span className={` ${Style.shade}`}>${carInfo.price}</span></p>
                            <p>: <span className={` ${Style.shade}`}>{carInfo.type}</span></p>
                        </div>
                        <div className="col-12 mb-3 text-left">Description</div>
                        <div className="col-9">
                            <textarea style={{height:"150px"}} className="form-control bg-light"></textarea>
                        </div>
                        <div className="col-5 offset-2 mt-3" >
                            <button type="button"
                            className="btn btn-success w-50"
                            onClick={bookCar}
                            >Book the car</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarBooking




