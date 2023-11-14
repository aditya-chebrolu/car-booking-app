import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useHistory, useParams } from 'react-router'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Style from '../AdminDashboard/Car.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import{ Button } from '@material-ui/core';
import {buttonstyles} from '../MuiStyles'

function EditCar() {
    const history=useHistory()
    const classes=buttonstyles()
    const carID=useParams().carId
    const [info,setInfo]=useState({type:"",model:"",price:""})

    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/editCar/${carID}`)
        .then(res=>{
            setInfo({
                type:res.data.type,
                model:res.data.model,
                price:res.data.price
            })
        })
        .catch(err=>console.log(err))
    },[])

    const editCar=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/admin/editCar",{carID:carID,...info})
        .then(res=>console.log(res.data))
        .catch(err=>{console.log(err)})
    }

    return (
    <div id="editCarBox"  className={`container w-25 mt-4 pb-2 text-left ${Style.signupbox} ${Style.fields}`}>
        <form method="post" onSubmit={editCar}>
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
            <div className="mb-1 mt-3">
                Car Model
                <input type="text" 
                id="carModel" 
                className="form-control"
                value={info.model}
                required
                onChange={e=>{setInfo({...info,model:e.target.value})}}
                />
            </div>
            <div className="mb-1">
                Car Rent Price
                <input type="text" 
                id="carPrice"
                value={info.price} 
                className="form-control" 
                onChange={e=>setInfo({...info,price:e.target.value})}
                required
                />
            </div>
            <div className="mb-1">
                Car Type
                <input type="text" 
                id="carType"
                value={info.type} 
                className="form-control" 
                onChange={e=>setInfo({...info,type:e.target.value})}
                required
                />
            </div>
            <div className="my-4">
                <input type="submit"
                value="Submit"
                id="editCarButton"
                className={`btn btn-primary mb-1 btn-sm btn-block mx-auto ${Style.button}`}/>
            </div>
        </form>
    </div>
    )
}

export default EditCar
