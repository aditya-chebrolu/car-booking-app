import React,{useState} from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Styles from "../Login/Login.module.css"
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'


function Login({props}) {
  const[userStyle,setUserStyle]=useState(Styles.useractive)
  const[adminStyle,setAdminStyle]=useState(Styles.admininactive)
  const[role,setRole]=useState("user")
  const[info,setInfo]=useState({email:"",password:""})
  const history=useHistory({props})

  const changeStyle1=()=>{
    setUserStyle(Styles.useractive);
    setAdminStyle(Styles.admininactive);
    setRole("user")

  }

  const changeStyle2=()=>{
    setUserStyle(Styles.userinactive);
    setAdminStyle(Styles.adminactive);
    setRole("admin")
  }

  const check=(e)=>
  {
    e.preventDefault()
    axios.post(`http://localhost:8080/${role}/login`,info).then(res=>{
        if(res.data===true)
        {
          axios.get(`http://localhost:8080/${role}/${info.email}`)
          .then(res=>{
            localStorage.setItem("access",true)
            localStorage.setItem("role",role)
            localStorage.setItem(`${role}ID`,res.data)
            history.push(`/${role}/dashboard`)
          }).catch(err=>console.log(err))
        }
      }).catch((err)=>{
          console.log(err)
    })
  }

  return (
    <div id="loginBox"  className={`container w-25 pb-3 px-0 ${Styles.loginBox}`}>
      <ul className="nav  br-3">
        <li className={`nav-item w-50 pr-1`}>
          <p id="userTab" className={`nav-link text-dark ${userStyle}`} onClick={changeStyle1}>User</p>
        </li>
        <li style={{borderLeft:"none"}} className="nav-item w-50">
          <p id="adminTab" className={`nav-link text-dark ${adminStyle}`} onClick={changeStyle2}>Admin</p>
        </li>
      </ul>

      <form  className="mx-3" action="/" method="post" onSubmit={check}>
        <div className={`my-3  ${Styles.logintext}`}>LOGIN</div>
        <div className="mb-3">
          <input type="email" 
          className={`form-control ${Styles.fields}`} 
          onChange={e=>setInfo({...info,email:e.target.value})} 
          name="email" 
          id="email" 
          placeholder="Enter User Name"/>
        </div>
        <div className="mb-3">
          <input type="password" 
          className={`form-control ${Styles.fields}`} 
          onChange={e=>setInfo({...info,password:e.target.value})}
          name="pass" 
          id="password" 
          placeholder="Enter Password"/>
        </div>
        <button 
        type="submit"
        id="submitButton" 
        className={`btn btn-primary w-75 mx-auto btn-sm btn-block ${Styles.button}`}>Submit</button>
      </form>
      <div style={{fontSize:"12px",padding:"5px",marginBottom:"30px"}}>
        New to Booking?
        <Link 
        id={role==="user"?"userSignupLink":"adminSignupLink"}
        to={`${role}/signup`}>Click Here</Link></div>
    </div>
    )
}

export default Login
