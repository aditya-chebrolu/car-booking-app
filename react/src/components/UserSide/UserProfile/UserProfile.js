import React,{useState,useEffect} from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Style from "../UserProfile/Profile.module.css"
import axios from 'axios'
import { useParams } from 'react-router'
import {useHistory} from 'react-router-dom'
import {Avatar,Button} from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit';
import {buttonstyles} from '../MuiStyles'



function UserProfile(){
    const button=buttonstyles()
    const ID=useParams().userId
    const history=useHistory()
    const[info,setInfo]=useState({
        name:"",email:"",mob:"",pass:"",age:0
    })

    useEffect(()=>{
        axios.get(`http://localhost:8080/user/profile/${ID}`)
        .then(res=>{
            setInfo({
                name:res.data.username,
                email:res.data.email,
                mob:res.data.mobileNumber,
                pass:res.data.password,
                age:res.data.age
            })
        }).catch(err=>{
            console.log(err);
        })
    },[])

    const toEditPage=()=>{
        history.push(`/user/editProfile/${ID}`)
    }


    
    return(
        <div id="userProfileBody" className="container-fluid">
            <div style={{height:"100vh"}} className="row border border-success">
                <div className="col-8 mt-2">
                    <div className={`${Style.box} text-left p-2 mx-1`}>
                        <div className="offset-1 row pt-4 col-6">
                            <p className="col-6 pb-2">Name</p>
                            <p className="col-6 pb-2">: {info.name}</p>
                            <p className="col-6 pb-2">Email</p>
                            <p className="col-6 pb-2">: {info.email}</p>
                            <p className="col-6 pb-2">Password</p>
                            <p className="col-6 pb-2">: {info.pass}</p>
                            <p className="col-6 pb-2">Age</p>
                            <p className="col-6 pb-2">: {info.age}</p>
                            <p className="col-6 pb-2">Mobile Number</p>
                            <p className="col-6 pb-2">: {info.mob}</p>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className={`col-4 ${Style.box2}`}>
                <div className="offset-3 mt-3">
                    <Avatar
                    style={{height:"200px", width:"200px"}} 
                    className={`${Style.pic}`}
                    />
                </div>                
                <div className="pl-3 mt-5">
                    <Button
                    className={button.btnPrimary}
                    onClick={toEditPage}
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    >
                        EDIT PROFILE
                    </Button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfile