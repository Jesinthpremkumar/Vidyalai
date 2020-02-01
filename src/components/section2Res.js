import React from 'react';
import data from './assets/navbar.json';
import {makeStyles} from '@material-ui/core/styles';
import image from "./assets/classroomPreview1.png";
import Svg from './assets/teacherStudentRounded.svg';
import { Link } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Typography, Box, Grid, Paper } from "@material-ui/core";
function Section2() {
        
    const l=data.section2;
    const content=[];
    l.map((item,key)=>{return content.push(item)});
        const style=makeStyles(theme=>({
            left:{
                alignContent:"flex-Start",
                margin: theme.spacing(1),
                
                height: theme.spacing(16),     
            },
            pa:{
            width:"50%"                

            },
           
            root:{
                flexGrow:1,
                paddingTop:100
            }
        }));
        return(
         <Grid className={style.root} container direction="column" alignItems="center" style={{backgroundColor:"#fafafa"}}>
           <Paper m={5} justify="flex-start"  justifyContent="center" elevation={0} style={{backgroundColor:"transparent",width:"50%",marginLeft:"40px"}} >
           <Grid minwidth="50%" className={style.pa}>
           <Box mt={4} display="flex">                
           <Box mt={4} minWidth="50">
            <Typography  variant="h5"  fontWeight="bold" align="right" color="primary" style={{fontFamily:""}}  >
                {content[0]  }
            
            </Typography>
            </Box>
            <img src={Svg} alt="r" style={{marginLeft:"20px"}}/>        
            </Box>
            <Box mt={2} mb={5} pb={5} mr={4} borderBottom={1}>
            <Typography align="right"  >
        {content[1]}
         </Typography>
         </Box>
         
         <Link href="#" align="right"  >
             <Typography>Check out the online classroom<ArrowRightAltIcon style={{height:30,width:50}} /></Typography></Link>
         
         </Grid>
         </Paper>

            <Box mr={10} >
            <img src={image} alt="r" style={{marginRight:"10%",width:"100%"}}></img>
            </Box>
             </Grid>
       );
}
export default Section2