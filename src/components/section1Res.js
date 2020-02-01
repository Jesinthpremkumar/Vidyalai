import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import React from "react";
import image from "./assets/Infographic.png";
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Box, Grid, Paper, Button } from "@material-ui/core";
import data from './assets/navbar.json';

export default function Section1() {
    const l=data.section2;
    const content=[];
    l.map((item,key)=>{return content.push(item)});
    
    const style=makeStyles(theme=>({
        left:{
            alignContent:"flex-Start",
            margin: theme.spacing(1),
            
            height: theme.spacing(16),     
        },
        right:{
            alignContent:"flex-end",
            margin: theme.spacing(1),
            
            height: theme.spacing(16),     
        },
       
       
        root:{
            flexGrow:1,
            paddingTop:100
        },
        responsize:{

        }
    }));
    const m1="Learn live from the best teachers";
    const m2=" Attend Interactive One-on-One Classes from subject experts from top universities like IITs, BITS, IISc and NITs from your home.";
    const m3="Request your first lesson today!";
    return(
        <React.Fragment>
        <Grid className={style.root} container direction="row" alignItems="center" >
        <Grid container style={{marginLeft:"40px"}} alignContent="center">    
                            <Paper ml={5} mt={5} justify="flex-start"  justifyContent="center" elevation={0} style={{backgroundColor:"transparent",minWidth:"50%",color:"white"}}>
              <Box mt={10}>                
            <Typography  variant="h4" justify="column" fontWeight="bold"  >
                {m1}
            </Typography>
            </Box>
            <Box mt={2}>
            <Typography justify="column" >
        {m2}
         </Typography>
         </Box>
        <Box mt={2}>

         <Typography  justify="column"  p={2}>
         {m3}
         </Typography>
         </Box>
         
         </Paper>
         
        <Box mt={2}>

        <Button  justify="column" style={{borderRadius:25,fontWeight:"bold",fontSize:"15pt",color:"white",background:'linear-gradient(180deg, #08BA1A 0%, #0BAB1B 100%)'}}  p={2} >
            Request A Lesson<ArrowRightAltIcon style={{backroundColor:"linear-gradient(180deg, #08BA1A 0%, #0BAB1B 100%)"}} />
            </Button>
</Box>
         </Grid>   

            <img src={image} alt="r" style={{marginLeft:"40px",height:"60%",width:"60%"}} ></img>
        
             </Grid>

             </React.Fragment> 
    );
}