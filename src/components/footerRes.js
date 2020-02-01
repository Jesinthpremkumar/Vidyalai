import appstore from './assets/appleAppStore.svg';
import playstore from './assets/googlePlayStore.svg';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import React from 'react';
import data from './assets/navbar.json';
import { makeStyles } from '@material-ui/core/styles';
import { Box,Grid, ListItem, ListItemText, List, Menu ,MenuItem, Link} from '@material-ui/core';
import { Typography, Paper } from "@material-ui/core";
import Svg from './assets/logoLight.svg';
const style=makeStyles(theme=>({
  
    typo:{
        fontSize:"16px",
        fontWeight:'600',
        padding:10,
        color:"white",
        cursor:'pointer',
    
      },
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
}));

class footer extends React.Component{
    
    render(){
      let content=[];
      let contentRight2=data.footerRight2;
      let contentRight=data.footerRight1;
      data.footer.map((item,key)=>content.push(item));
        return(
            <Grid  container direction="column" alignItems="center" display="flex" style={{backgroundColor:"#310939"}}>
                <Box borderBottom={1} display="flex" justifyContent="flex-start" m={5} pb={3} p={1}  minWidth="20%"  >
                  
                    <img src={Svg}  alt="r" style={{marginLeft:"0px",marginTop:"0px"}} />
                    <Paper m={5} justify="flex-start"  justifyContent="center" elevation={0} style={{backgroundColor:"transparent",width:"75%",marginLeft:"40px"}} >
                    <Grid  style={{width:"100%"}}>
           <Box mt={4}>
            <Typography   align="left"  style={{color:'white'}} >
                {content[0]  }
            
            </Typography>
            </Box>
            
            <Box mt={2}  >
            <Typography align="left"  style={{color:'white'}}>
        {content[1]}
         </Typography>
         </Box>
         <Box mt={2} mb={1} pb={5} mr={4} >
            <Typography align="left"  style={{color:'white'}}>
        {content[2]}
         </Typography>
         </Box>
                     
         <Grid container display="flex" style={{flexDirection:"row"}} >
                    <Box justifyContent="flex-start" ml={10} mt={5}>
                    <List > 
             <ListItem  style={{marginLeft:"0px",width:"100%",height:"100%"}}>
                 <ListItemText >
                    {contentRight.map((item,key)=>{return <Typography key={key} className={style.typo} style={{margin:"10px",color:"white"}} >{item}</Typography>})}
                     </ListItemText> 
             </ListItem>  
             </List>  
             </Box>
             <Box justifyContent="flex-start" ml={10} mt={5}>
                    <List > 
             <ListItem  style={{marginLeft:"0px",width:"100%",height:"100%"}}>
                 <ListItemText className={style.typo}>
                    {contentRight2.map((item,key)=>{return <Typography key={key} style={{margin:"10px",color:"white"}} >{item}</Typography>})}
                     </ListItemText> 
             </ListItem>  
             </List>  
             </Box>
         </Grid>
         
         <Grid container display="flex" style={{Width:"100%"}}>
                <Box ml={10 } flexGrow={0.3}>
                <Box justifyContent="flex-start">
                <Typography style={{color:"white"}}>+91-63741-11932</Typography>
                </Box>
                </Box>
                <Box ml={2} flexGrow={0.4}>
                <Box justifyContent="flex-start">
                  <Typography ><EmailIcon style={{color:'white'}}></EmailIcon><Link style={{color:"white"}}>help@vidyalai.com</Link></Typography>
                </Box>
                </Box>
                <Box ml={2} flexGrow={0.2}>
                <Box justifyContent="flex-start" >
                  <Typography ><Link style={{color:"white",margin:"10px"}} ><FacebookIcon></FacebookIcon></Link>
                  <Link style={{color:"white",margin:"10px"}}><TwitterIcon></TwitterIcon></Link>
                  <Link style={{color:"white",margin:"10px" }}><LinkedInIcon></LinkedInIcon></Link>
                  <Link style={{color:"white",margin:"10px"}}><InstagramIcon></InstagramIcon></Link>
                  
 
                  
                  </Typography>
                </Box>
                </Box>
                
                <Box ml={2} flexGrow={0.2}>
                <Box justifyContent="flex-start">
                  <img src={appstore} alt="appstore" />
                  <img src={playstore} alt="playstore" />
                </Box>
                </Box>
            </Grid>
         </Grid>
         </Paper>
         
            <Typography fontWeight="Bold" style={{color:"white"}}> Vidyalai © 2019 All rights reserved.</Typography>
         </Box> 
         </Grid>       );
    }
}
export default footer