import React,{useState} from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import signupStyle from "./Signup.module.css"
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'

function Signup() {
  const history=useHistory()
  const[info,setInfo]=useState({
    email:"",
    password:"",
    mobileNumber:"",
    age:"",
    userRole:"user",
    username:""
  })

  const check=e=>{
    e.preventDefault()
    axios.post(`http://localhost:8080/${info.userRole}/signup`,info).then(res=>{
      if(res.data==="USER ADDED")
      {
        history.push("/")
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div id="signupBox" className={`container w-25 py-3 mt-5 ${signupStyle.signupbox} ${signupStyle.fields} `}>
      <form method="post" onSubmit={check}>
          <div style={{fontSize:"30px"}}>SIGNUP</div>
          
          <div className="my-3">
            <input type="email" 
            id="email"
            value={info.email} 
            className="form-control" 
            onChange={e=>setInfo({...info,email:e.target.value})}
            required
            placeholder="Enter Email"/>
          </div>    

          <div className="mb-3">
            <input type="password"
            id="password" 
            value={info.password}
            className="form-control"
            required
            onChange={e=>setInfo({...info,password:e.target.value})}
            placeholder="Enter Password"/>
          </div>

          <div className="mb-3">
            <input type="text" 
            id="mobilenumber"
            value={info.mobileNumber} 
            required
            className="form-control" 
            onChange={e=>setInfo({...info,mobileNumber:e.target.value})}
            placeholder="Enter Mobile Number"/>
          </div>

          <div className="mb-3">
            <select id="userrole" 
            defaultValue="user"
            onChange={e=>setInfo({...info,userRole:e.target.value})} 
            required
            className="form-control">
              <option value="user">User</option>
              <option disabled value="admin">Admin</option>
              </select>
          </div>

          <div className="mb-3">
            <input type="text" 
            id="username"
            required
            value={info.username} 
            className="form-control" 
            onChange={e=>setInfo({...info,username:e.target.value})}
            placeholder="Enter Username"/>
          </div>

          <div className="mb-3">
            <input type="text" 
            id="age" 
            required
            value={info.age}
            className="form-control" 
            onChange={e=>setInfo({...info,age:e.target.value})}
            placeholder="Enter Age"/>
          </div>  
          <div className="mb-3">
            <input 
            type="submit" 
            id="submitButton"
            value="Submit" 
            className={`btn btn-primary w-75 btn-sm btn-block mx-auto ${signupStyle.button}`}/>
        </div>
      </form>
        <small>Go to login <Link id="loginLink" to='/'>Click Here</Link></small>
      </div>
    )
}

export default Signup
