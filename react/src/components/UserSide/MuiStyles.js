import { makeStyles } from '@material-ui/core/styles';

const buttonstyles=makeStyles({
    btnPrimary:{
        color:"	#ffffff",
        backgroundColor:"#3490df",
        '&:hover':{
            backgroundColor:"#0169c2"
        },
        borderRadius:"10px",
        width:"200px"
    },    
    btnPrimary2:{
        color:"	#ffffff",
        backgroundColor:"#1da3f4",
        '&:hover':{
            backgroundColor:"#0169c2"
        }
    },

})



export {buttonstyles}