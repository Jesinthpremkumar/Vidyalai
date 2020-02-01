import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'; 
import MediaQuery from "react-responsive";
import Mobile from './components/navbarRes.js';
import React from 'react';
import Nav from "./components/navbar.js";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Footer from "./components/footer";
import { useMediaQuery } from 'react-responsive';
import Msection1 from './components/section1Res.js'; 
import Msection2 from './components/section2Res.js';
import Mfooter from './components/footerRes.js';
class App extends React.Component{
    state={
        window:window.pageYOffset,
        isDesktopOrLaptop:1,
        isTabletOrMobile:0,
    }
    
    componentDidMount() {
      
      }
    /*  
      componentWillUnmount() {
        window.onscroll = null;
      }
      */
    render(){
        
      const Example = () => {
        this.state.isDesktopOrLaptop = useMediaQuery(
          {
            query: '(min-device-width: 1224px)'
          }// `device` prop
        )
        this.state.isTabletOrMobile = useMediaQuery(
         {query: '(max-width: 1224px)' }// `device` prop
       )
       return (""); 
        }
      console.log(this.state.isDesktopOrLaptop);
return ( <React.Fragment>
<div >
  <Example />
  <MediaQuery query="(max-device-width: 1024px)">
  <Mobile />
  <Msection1 />
  <Msection2 />
  <Mfooter />
</MediaQuery>
<MediaQuery query="(min-device-width: 1024px)">
  

<Nav window={this.state.window}/>
                    <Section1 />
             
                   <Section2 />
                   <Footer />     
                   </MediaQuery>        
              </div> 
                 </React.Fragment>);
    }
}

export default App;