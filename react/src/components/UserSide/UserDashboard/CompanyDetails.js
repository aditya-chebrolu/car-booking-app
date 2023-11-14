import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router'
import CompanyChild from './CompanyChild'
import axios from 'axios'
import Style from './UserDashboard.module.css'

function CompanyDetails() {
    const id=useParams().companyId
    const[companyinfo,setCompanyinfo]=useState({name:"",address:"",number:""})
    const[companylist,setCompanylist]=useState([])
    useEffect(()=>{

        axios.get(`http://localhost:8080/companyDetails/${id}`)
        .then(res=>{
            setCompanyinfo({
                name:res.data.companyName,
                address:res.data.companyAddress,
                number:res.data.mobileNumber,
            })
        }).catch(err=>{
            console.log(err)
        })

        axios.get(`http://localhost:8080/user/Cars/${id}`)
        .then(res=>{
            setCompanylist(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])


    return (
        <div id="companyDetails" className="container">
            <div className="row">
            <div className={`col-12 sticky-top mt-4 py-3 ${Style.bgstyle}`}>
                <h5>{companyinfo.name}</h5>
                <p className="py-2">{companyinfo.address}</p>
                <p>{companyinfo.number}</p>
            </div>
            <div className={`col-12 mt-3 p-0 ${Style.click}`}>
            {companylist.map(x=><CompanyChild key={x.carID} props={x}/>)}
            </div>
            </div>
        </div>
    )
}

export default CompanyDetails
