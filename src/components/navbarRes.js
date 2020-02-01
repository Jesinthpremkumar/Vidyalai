import React from 'react';
import Svg from './assets/logoWithText.svg';
import Svg2 from './assets/logoWithblack.svg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, useScrollTrigger } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
export default function mobAppBar(props) {
    let color="transparent",text="white";
    function HideOnScroll(props) {
        const name=<p>Jesinth</p>;
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        let trigger = useScrollTrigger({ target: window ? window() : undefined });
        
        if(trigger ){
          color="#fff";
          image=Svg2;
          text="black";
           trigger=undefined;
          return ("");
        }
        else{
          image=Svg;
          text="white";
          color="transparent";
          
          return ("");
        }
      }
      let image=Svg;
      
 
  return (
    <div >
      <AppBar position="fixed" className={HideOnScroll(props)} style={{backgroundColor:color,boxShadow:"none"}}>
        <Toolbar variant="dense">
            <Box flexGrow={1}>
          <Typography variant="h6" color="inherit">
          <img src={image} alt="r" />
              </Typography>
              </Box>
          <IconButton edge="start"  style={{color:text}} aria-label="menu">
            <MenuIcon />

          </IconButton>
 
        </Toolbar>
      </AppBar>
    </div>
  );
}