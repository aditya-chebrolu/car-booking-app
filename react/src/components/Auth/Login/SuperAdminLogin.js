import React,{useState} from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Style from "./Login.module.css"
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function SuperAdminLogin() {
    const history=useHistory()
    const[creds,setCreds]=useState({email:"",password:""})

    const check=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/superadmin/login",creds)
        .then(res=>{
            localStorage.setItem("role","super")
            localStorage.setItem("access",true)
            history.push("/superadmin/adminList")
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div id="superAdminLoginBox" className={`container ${Style.loginBox} px-3 py-3 w-25`}>
            <form onSubmit={check}>
                <div className={`${Style.logintext}  mb-5 mt-2`}><center>Super Admin </center></div>
                <div className="mb-3">
                    <input type="email" 
                    onChange={e=>setCreds({...creds,email:e.target.value})}
                    value={creds.email}
                    className={`${Style.fields} form-control w-100`} 
                    id="email"  placeholder="Enter Super Admin Email" required/>
                </div>
                <div className="mb-3">
                    <input type="password"
                    onChange={e=>setCreds({...creds,password:e.target.value})}
                    value={creds.password}
                    className={`${Style.fields} form-control w-100`} 
                    id="password" placeholder="Enter Password" required/>
                </div>
                <div className="text-center w-100 mb-4">
                    <button type="submit" id="submitButton" className="btn btn-primary btn-block mt-3">Submit</button>
                </div>
            </form>   
        </div>
    )
}

export default SuperAdminLogin
