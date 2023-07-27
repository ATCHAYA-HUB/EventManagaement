import * as React from 'react';
import './Ticket.css';
import './Home.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Ticket() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    const multiplier =100; 
    const calculatedResult = inputValue * multiplier;
    setResult(calculatedResult);
    
  };
  return (
    <>
    <body style={{backgroundColor:"rgb(45, 189, 170)"}}>
      <div className='tickimg'></div>
      <p className='eventname'>Event Name</p>
                <form style={{paddingTop:"150px"}} action=""><center>
                <div className='tick1'>
                        <input 
                        style={{background:"transparent",border:"none",borderBottom:"2px solid#fff",height:"20px",width:"200px",color:"white",outline:"none",fontSize:"17px",textAlign:"center",fontFamily:"monospace"}}
                        type="number" placeholder='Enter no of tickets' onChange={handleInputChange} required />
                        <div className='tickerror'>{inputValue.length===0?"*required":""}</div></div>
                       <br/>
                       <p style={{color:"white",fontFamily:"monospace",fontSize:"22px"}}>RATE:
                       
      <input style={{background:"transparent",border:"none",height:"20px",width:"50px",color:"white",outline:"none",fontSize:"22px",textAlign:"center",fontFamily:"monospace"}}
        type="text"
        value={result}
        readOnly/></p><div>
    </div>           
                    <Button class="tickbtn">Book NOW</Button>
                    </center>
                </form>
      </body>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar  position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}style={{backgroundColor:"#0f9597"}}>
        <Toolbar>
          <Typography
            variant="h5"
            noWrapcomponent="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >iDo EventZ
          </Typography>
          <Button style={{position:"relative",right:"100px"}} color="inherit" component={Link} to="/Home"  sx={{
        "&.Mui-disabled": {background: "#eaeaea",color: "#0f9597" }}}>Home</Button>
          <Button style={{position:"relative",right:"71px"}}color="inherit" component={Link} to="/Myevent" sx={{
        "&.Mui-disabled": {background: "#eaeaea",color: "#0f9597" }}}>My Event</Button>
          <Button style={{position:"relative",right:"45px"}} color="inherit" component={Link} to="/Profile" sx={{
        "&.Mui-disabled": {background: "#eaeaea",color: "#0f9597" }}}>Profile</Button>
          <Button style={{position:"relative",right:"19px"}} color="inherit" component={Link} to="/" sx={{
        "&.Mui-disabled": {background: "#eaeaea",color: "#0f9597" }}}>Log Out</Button>
        </Toolbar>
      </AppBar>
      </Box>
    <Box position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation  style={{backgroundColor:"#0f9597"}}>
        <Link style={{textDecoration: 'none'}} to="/Terms"> <p style={{left:"00px"}} className='term' >Teams and conditions</p></Link> 
    <Link style={{textDecoration: 'none'}}to="/Privacy"><p style={{left:"30px"}} className='privacy'>Privacy Policy</p></Link>
    <Link style={{textDecoration: 'none'}} to="/Fag"> <p style={{left:"60px"}} className='faq'>FAQ</p></Link>
    <Link style={{textDecoration: 'none'}} to="/Contact"> <p style={{left:"90px"}} className='cont'>Contact Us</p></Link>
          <p label="History"> <Link to="https://www.instagram.com" class="fa fa-instagram"></Link> </p>
          <p label="History"> <a href="https://www.facebook.com" class="fa fa-facebook"></a> </p>
          <p label="History">     <a href="https://www.youtube.com" class="fa fa-youtube"></a> </p>
          <p label="History"> <a href="https://www.twitter.com" class="fa fa-twitter"></a> </p>
        </BottomNavigation>
       
      </Paper>
    </Box>
    
    </>
  );
}