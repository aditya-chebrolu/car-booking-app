import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Style from "./Profile.module.css"
import { useParams } from 'react-router'
import { Button } from '@material-ui/core'
import {buttonstyles} from '../MuiStyles'

function EditProfile() {
    const button=buttonstyles()
    const ID=useParams().userId
    const[info,setInfo]=useState({
        userID:ID,
        username:"",
        email:"",
        password:"",
        age:"",
        mobileNumber:""})
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/profile/${ID}`)
        .then(res=>{
            setInfo({...info,
                username:res.data.username,
                email:res.data.email,
                password:res.data.password,
                age:res.data.age,
                mobileNumber:res.data.mobileNumber
            })
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const editUser=()=>{
        axios.post("http://localhost:8080/user/editProfile",info).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
<div id="adminEditBox" className={`container w-25 mt-4 pb-2 text-left ${Style.signupbox} ${Style.fields} `}>

    Name
    <div className="mb-1">
    <input type="text" 
    id="username"
    required
    value={info.username} 
    className="form-control" 
    onChange={e=>setInfo({...info,username:e.target.value})}/>
    </div>
    Email
    <div className="mb-1">
    <input type="email" 
    id="email"
    value={info.email} 
    className="form-control" 
    onChange={e=>setInfo({...info,email:e.target.value})}
    required
    />
    </div>
    Password
    <div className="mb-1">
    <input type="password"
    id="password" 
    value={info.password}
    className="form-control"
    required
    onChange={e=>setInfo({...info,password:e.target.value})}/>
    </div>
    Age  
    <div className="mb-1">
    <input type="text" 
    id="userAge" 
    required
    value={info.age}
    className="form-control" 
    onChange={e=>setInfo({...info,age:e.target.value})}/>
    </div>
    Mobile Number      
    <div className="mb-3">
    <input type="text" 
    id="mobilenumber"
    value={info.mobileNumber} 
    required
    className="form-control" 
    onChange={e=>setInfo({...info,mobileNumber:e.target.value})}/>
    </div>
  
    <div className="mb-4">
    <Button
    id="editProfileButton"
    onClick={editUser}
    variant="contained"
    className={button.btnPrimary2}
    fullWidth={true}
    >SUBMIT</Button>
    </div>
</div>
    )
}

export default EditProfile
