import React from 'react'
import Style from "../SuperAdmin.module.css"
import {Avatar,Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const buttonstyles=makeStyles({
    deletebtn:{
        color:"#ffffff",
        backgroundColor:"#ff1a1a",
        '&:hover':{
            backgroundColor:"#cc0000"
        },
        borderRadius:"20px",
    },    
})


function DashboardChild({props}) {
    const classes=buttonstyles()

    const delAdmin=()=>{
        axios.post(`http://localhost:8080/super/deleteAdmin/${props.email}`)
        .then(res=>{
            window.location.reload()
        }).catch(err=>{
            console.log(err)
        })
    }    
    return (
    <>
        <div role="button" className={`row p-1 ${Style.box} ${Style.divbutton}`} >
            <div className="col-4 d-flex flex-row">
                <span className="pt-2">
                    <Avatar alt={props.sellerName} src=""/>
                </span>
                <span className="pt-3 ml-5 h6">{props.companyName}</span>
            </div>
            <div className="col-3 pt-3 h6">{props.companyAddress}</div>
            <div className="col-4 pt-3 h6">{props.mobileNumber}</div>
            <div className="col-1 pt-2">
            <Button
            onClick={delAdmin}
            className={classes.deletebtn}   
            > 
            <DeleteIcon />
            </Button>
            </div>
        </div>        
    </>
    )
}

export default DashboardChild
