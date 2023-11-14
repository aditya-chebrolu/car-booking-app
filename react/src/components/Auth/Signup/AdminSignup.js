import React,{useState} from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import signupStyle from "../Signup/Signup.module.css"
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'

function Signup() {
    const history=useHistory()
    const[info,setInfo]=useState({
    email:"",
    password:"",
    mobileNumber:"",
    userRole:"admin",
    sellerName:"",
    companyName:"",
    companyImageURL:"",
    companyAddress:"",
  })

  const check=e=>{
    e.preventDefault()
    axios.post(`http://localhost:8080/${info.userRole}/signup`,info).then(res=>{
      if(res.data==="ADMIN ADDED")
      {
        history.push('/')
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div id="signupBox" className={`container w-25 mt-4 pb-2 ${signupStyle.signupbox} ${signupStyle.fields} `}>
      <form method="post" onSubmit={check}>
          <div style={{fontSize:"30px"}}>SIGNUP</div>
          
          <div className="my-2">
            <input type="email" 
            id="email"
            value={info.email} 
            className="form-control" 
            onChange={e=>setInfo({...info,email:e.target.value})}
            required
            placeholder="Enter Email"/>
          </div>    

          <div className="mb-2">
            <input type="password"
            id="password" 
            value={info.password}
            className="form-control"
            required
            onChange={e=>setInfo({...info,password:e.target.value})}
            placeholder="Enter Password"/>
          </div>

          <div className="mb-2">
            <input type="text" 
            id="mobilenumber"
            value={info.mobileNumber} 
            required
            className="form-control" 
            onChange={e=>setInfo({...info,mobileNumber:e.target.value})}
            placeholder="Enter Mobile Number"/>
          </div>

          <div className="mb-2">
            <select id="userrole" 
            onChange={e=>setInfo({...info,userRole:e.target.value})} 
            defaultValue="admin"
            required
            className="form-control">
              <option value="admin">Admin</option>
              <option disable value="user">User</option>
              
              </select>
          </div>

          <div className="mb-2">
            <input type="text" 
            id="adminname"
            required
            value={info.sellername} 
            className="form-control" 
            onChange={e=>setInfo({...info,sellerName:e.target.value})}
            placeholder="Enter Seller Name"/>
          </div>

          <div className="mb-2">
            <input type="text" 
            id="companyname" 
            required
            value={info.companyName}
            className="form-control" 
            onChange={e=>setInfo({...info,companyName:e.target.value})}
            placeholder="Enter Company Name"/>
          </div>

          <div className="mb-2">
            <input type="text" 
            id="companyimageURL" 
            required
            value={info.companyImageURL}
            className="form-control" 
            onChange={e=>setInfo({...info,companyImageURL:e.target.value})}
            placeholder="Enter Company Image URL"/>
          </div>  

          <div className="mb-4">
            <input type="text" 
            id="companyAddress" 
            required
            value={info.companyAddress}
            className="form-control" 
            onChange={e=>setInfo({...info,companyAddress:e.target.value})}
            placeholder="Enter Company Address"/>
          </div>  
          <div className="mb-3">
            <input type="submit" value="Submit" className={`btn btn-primary w-75 btn-sm btn-block mx-auto ${signupStyle.button}`}/>
        </div>
      </form>
        <small>Go to login <Link to='/'>Click Here</Link></small>
      </div>
    )
}

export default Signup