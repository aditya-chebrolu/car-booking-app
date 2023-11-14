import React from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Style from "../AdminDashboard/CarModel.module.css"
import {Button} from "@material-ui/core"
import {useHistory} from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'


const ButtonStyle=makeStyles({
    btnEdit:{
        paddingLeft:"30px",
        width:"10px",
        backgroundColor:"#FFCF40",
        '&:hover':{
            backgroundColor:"#ffd353"
        },
        borderRadius:"10px",
    },
    btnDelete:{
        marginLeft:"30px",
        paddingLeft:"30px",
        width:"10px",
        backgroundColor:"#dc143c",
        '&:hover':{
            backgroundColor:"#c61236"
        },
        borderRadius:"10px",
    }

})


function CarModel({props}){
    const classes=ButtonStyle()
    let style=props.status==="Booked"?"bg-danger":"bg-success"
    const history=useHistory()
    const editCar=()=>{
        history.push(`/admin/editCar/${props.carID}`)
    }
    const deleteCar=()=>{
        axios.post(`http://localhost:8080/admin/deleteCar/${props.carID}`)
        .then(res=>{
            window.location.reload()
        })
        .catch(err=>{console.log(err)})
    }
    return(
        <>
        <div className={`${Style.status} ${style}`}>{props.status}</div>
        <div className={`row bg-light ${Style.box}`}>
            
        <span className={`${Style.box1}`}>
                <p className="m-0">Car Model : {props.model}</p>
                <p className="m-0">Price : {props.price} |per day</p>
        </span>
            <span  className={`${Style.box2}`}>
            <div className={`carType`}>Type : {props.type}</div>
            </span>
            <span>
            <Button
                className={classes.btnEdit}
                onClick={editCar}
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
            />
            <Button
                className={classes.btnDelete}
                onClick={deleteCar}
                variant="contained"
                color="primary"
                startIcon={<DeleteIcon />}
            />
            </span>
        </div>
        </>
    )
}
export default CarModel