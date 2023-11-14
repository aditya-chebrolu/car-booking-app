import React,{useState,useEffect} from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Style from "./Profile.module.css"
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import{ Button } from '@material-ui/core';
import {buttonstyles} from '../MuiStyles'

function EditProfile() {
  const classes=buttonstyles()
  const id=useParams().adminId
  const history=useHistory()
  const[info,setInfo]=useState({
  adminID:id,
  email:"",
  password:"",
  mobileNumber:"",
  sellerName:"",
  companyName:"",
  companyAddress:""
  })

  useEffect(() => {
    axios.get(`http://localhost:8080/admin/profile/${id}`)
    .then(res=>{
      const data=res.data
      setInfo({
        adminID:id,
        sellerName:data.sellerName,
        email:data.email,
        password:data.password,
        mobileNumber:data.mobileNumber,
        companyName:data.companyName,
        companyAddress:data.companyAddress,
    })
    }).catch(err=>{
      console.log(err)
    })
  },[])


  const editAdmin=e=>{
    e.preventDefault()
    axios.post("http://localhost:8080/admin/editProfile",info)
    .then(res=>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
<div id="adminEditBox" className={`container w-25 mt-4 pb-2 text-left ${Style.signupbox} ${Style.fields} `}>
  <form onSubmit={editAdmin}>
  <div>
      <Button
      onClick={()=>history.goBack()}
      disableRipple={true}
      startIcon={<ArrowBackIosIcon style={{fontSize:15}}/>}
      style={{textTransform:"none"}}
      className={classes.back}
      >back
      </Button>
  </div>
    Name
    <div className="mb-1">
    <input type="text" 
    id="adminName"
    required
    value={info.sellerName} 
    className="form-control" 
    onChange={e=>setInfo({...info,sellerName:e.target.value})}/>
    </div>
    Email
    <div className="mb-1">
    <input type="email" 
    id="adminEmail"
    value={info.email} 
    className="form-control" 
    onChange={e=>setInfo({...info,email:e.target.value})}
    required
    />
    </div>
    Mobile Number      
    <div className="mb-1">
    <input type="text" 
    id="adminMobilenumber"
    value={info.mobileNumber} 
    required
    className="form-control" 
    onChange={e=>setInfo({...info,mobileNumber:e.target.value})}/>
    </div>
    Password
    <div className="mb-1">
    <input type="password"
    id="adminPassword" 
    value={info.password}
    className="form-control"
    required
    onChange={e=>setInfo({...info,password:e.target.value})}/>
    </div>
    Company Name
    <div className="mb-1">
    <input type="text" 
    id="companyName" 
    required
    value={info.companyName}
    className="form-control" 
    onChange={e=>setInfo({...info,companyName:e.target.value})}/>
    </div>
    Company Address   
    <div className="mb-3">
    <input type="text" 
    id="companyAddress" 
    required
    value={info.companyAddress}
    className="form-control" 
    onChange={e=>setInfo({...info,companyAddress:e.target.value})}/>
    </div>  
    <div>
      <input type="submit"
      value="Submit"
      id="profileEditButton"
      className={`btn btn-primary mb-1 btn-sm btn-block mx-auto ${Style.button}`}/>
    </div>
  </form>
</div>
    )
}

export default EditProfile