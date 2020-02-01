import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Svg from './assets/logoWithText.svg';
import Svg2 from './assets/logoWithblack.svg';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RaisedButton from '@material-ui/core/Button';
import { Box, Grid } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import data from './assets/navbar.json';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    avatar: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      alignContent:"flex-Start",
    },
    overrides:{
    button:{
        color:'white',
        
    },
  },
  typo:{
    fontSize:"16px",
    fontWeight:'600',
    padding:10,
   
    cursor:'pointer',

  },
  normal:{
    backgroundColor:'transparent',
    border:'none'
  },
  scrolled:{
    backgroundColor:"white",
    border:"none",
  }

 
  }));
 
  function HideOnScroll(props) {
    const name=<p>Jesinth</p>;
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    let trigger = useScrollTrigger({ target: window ? window() : undefined });
    
    if(trigger ){
      text="black";
      color="#fff";
      image=Svg2;
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
  let text="white",color="transparent";
  export default    function ButtonAppBar(props) {
        const classes = useStyles();
        const [anchorEl, setAnchorEl] = React.useState(null);
        
        const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const subList=data.sublist;
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
            
    
    return (
        <React.Fragment >
        <AppBar  position="fixed" className={HideOnScroll(props)} style={{backgroundColor:color,boxShadow:"none"}}>
            
        <Toolbar><div className={classes.avatar}>
            <img src={image} alt="l"/>
          </div>
            
                 <Grid display="flex" flexWrap="nowrap" p={1} m={1} flexGrow={0} justifyContent="flex-start">
                   <Typography  variant="h6" className={classes.typo} >
                   <Button
                   className={classes.typo}
                  style={{color:text}}
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onMouseEnter={handleToggle}
          onMouseLeave={handleClose}
        >
         Courses
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    onMouseLeave={handleClose}
                  >{subList.map((item,key)=> <MenuItem onClick={handleClose} key={key}>{item}</MenuItem>)}
                    
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
             </Typography></Grid>
             <Box display="flex" flexWrap="nowrap" p={1} m={1} flexGrow={0} justifyContent="flex-start">
                   <Typography  variant="h6" className={classes.typo} style={{color:text}} >
                     Blog
             </Typography></Box>
             <Box display="flex" flexWrap="nowrap" p={1} m={1} flexGrow={0} justifyContent="flex-start">
                   <Typography  variant="h6" className={classes.typo} style={{color:text}}>
                    Contact Us
             </Typography></Box>
             <Box display="flex" flexWrap="nowrap" p={1} m={1} flexGrow={1} justifyContent="flex-start">
                   <Typography  variant="h6" style={{color:"#23b9cc"}} className={classes.typo} >
                     Become a Teacher
             </Typography></Box>
             <Box display="flex" p={1} m={1} justifyContent="flex-start">
         <RaisedButton  
               variant="outlined"
              style={{fontWeight:"bold",borderRadius:25,backgroundColor:"White",color:"#0846B0",minWidth:100}} 
          aria-label="large outlined primary button group"
          >Log In</RaisedButton>
         </Box>
         <Box display="flex"   p={1} m={1} justifyContent="flex-end">
         <RaisedButton color="inherit"variant="outlined"
          style={{borderRadius:25,backgroundColor:"#23b9cc",minWidth:100 ,color:"white",border:"none",fontWeight:"bold"}}
          aria-label="large outlined primary button group">
            Sign up</RaisedButton>
         </Box>
        
        </Toolbar>
        </AppBar>
        </React.Fragment>);
    }
