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
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FaceBookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Paper from '@mui/material/Paper';
import GitHubIcon from '@mui/icons-material/GitHub';
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
        <Link style={{textDecoration: 'none'}} to="/Terms"> <p className='term' >Teams and conditions</p></Link> 
    <Link style={{textDecoration: 'none'}}to="/Privacy"><p className='privacy'>Privacy Policy</p></Link>
    <Link style={{textDecoration: 'none'}} to="/Fag"> <p className='faq'>FAQ</p></Link>
    <Link style={{textDecoration: 'none'}} to="/Contact"> <p className='cont'>Contact Us</p></Link>
          <BottomNavigationAction sx={{ position: 'relative', bottom: 0, left: 540, right: 0 }}label="History" icon={<InstagramIcon style={{ color: "white" }} />} component={Link} to="/history" />
          <BottomNavigationAction label="History" sx={{ position: 'relative', bottom: 0, left: 400, right: 0 }}icon={<FaceBookIcon style={{ color: "white" }} />} component={Link} to="/history" />
          <BottomNavigationAction label="History" sx={{ position: 'relative', bottom: 0, left: 260, right: 0 }}icon={<TwitterIcon style={{ color: "white" }}/>} component={Link} to="/history" />
          <BottomNavigationAction label="History"sx={{ position: 'relative', bottom: 0, left: 120, right: 0 }} icon={<LinkedInIcon style={{ color: "white" }}/>} component={Link} to="/history" />
          <BottomNavigationAction label="History"sx={{ position: 'relative', bottom: 0, right: 20 }} icon={<GitHubIcon style={{ color: "white" }}/>} component={Link} to="/history" />
        </BottomNavigation>
       
      </Paper>
    </Box>
    
    </>
  );
}