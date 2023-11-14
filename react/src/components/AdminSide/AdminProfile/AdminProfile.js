import React,{useState,useEffect} from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Style from "../AdminProfile/Profile.module.css"
import axios from 'axios'
import { useParams } from 'react-router'
import {useHistory} from 'react-router-dom'
import {Avatar,Button} from "@material-ui/core"
import pic from '../AdminProfile/adminprofile.jpg';
import EditIcon from '@material-ui/icons/Edit';
import {buttonstyles} from '../MuiStyles'

function AdminProfile(){
    const classes=buttonstyles()
    const id=useParams().adminId
    const history=useHistory()
    const[info,setInfo]=useState({
        name:"",email:"",mob:"",pass:"",compName:"",addr:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/profile/${id}`)
        .then(res=>{
            const data=res.data
            setInfo({
                name:data.sellerName,
                email:data.email,
                pass:data.password,
                mob:data.mobileNumber,
                compName:data.companyName,
                addr:data.companyAddress,
            })
        }).catch(err=>{
            console.log(err)
        })
    })

    const toEditPage=()=>{
        history.push(`/admin/editProfile/${id}`)
    }


    
    return(
        <div id="adminProfile" className="container-fluid">
            <div style={{height:"100vh"}} className="row border border-success">
                {/* LEFT */}
                <div className="col-8 mt-2">
                    <div className={`${Style.box} text-left row p-2 mx-1`}>
                        <div className="h-100  col-6">
                            <div>Name : {info.name}</div>
                            <div>Email : {info.email}</div>
                            <div>Mobile No :{info.mob}</div>
                            <div>Password:{info.pass}</div>
                        </div>
                        <div className="h-100 col-6">
                            <div>CompanyName:{info.compName}</div>
                            <div>Company Address:{info.addr}</div>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className={`col-4 ${Style.box2}`}>
                <div className="offset-3 mt-3">
                    <Avatar
                    style={{height:"200px", width:"200px"}} 
                    className={`${Style.pic}`}
                    src={pic}
                    />
                </div>                
                <div className="pl-3 mt-5">
                    <Button
                    id="editAdminProfile"
                    className={classes.btn}
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
export default AdminProfile