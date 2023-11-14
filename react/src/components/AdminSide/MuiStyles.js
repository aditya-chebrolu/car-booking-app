import { makeStyles } from '@material-ui/core/styles';

const buttonstyles=makeStyles({
    btn:{
        backgroundColor:"#0275d8",
        '&:hover':{
            backgroundColor:"#0169c2"
        },
        borderRadius:"10px",
        width:"200px"
    },
    back:{
        '&:hover':{
            backgroundColor:"#ededed"
        },
        
    }

})



export {buttonstyles}