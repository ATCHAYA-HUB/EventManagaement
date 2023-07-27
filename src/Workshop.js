import axios from "axios";
import React from "react";
import "./Workshop.css"
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';

function Workshop() {
  const [allDetails, setAllDetails] = useState([]);

  // New function to fetch all details from the table
  const fetchAllDetails = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://127.0.0.1:8080/show/eventdetails', {
        headers: {
          Authorization: `Bearer ${token}`,
          'cache-control': 'no-cache',
        },
      });

      // Assuming the response data contains an array of event details
      const allDetails = response.data;
      setAllDetails(allDetails); // Set the fetched details to the state
    } catch (error) {
      console.error('Error fetching all details:', error);
    }
  };

  // Call the fetchAllDetails function when the component mounts
  useEffect(() => {
    fetchAllDetails();
  }, []);
 return ( 
  <div>
    <div className="concertbg" >
      <h1 style={{color:"black",textAlign:"center",marginTop:"100px",marginBottom:"-150px"}}>BOOK YOUR EVENTS</h1>
        {allDetails.map((eventData) => (
          <div style={{marginTop:"40px"}}  className="conbox"key={eventData._id}>
            <Link style={{textDecoration:"none"}}
              to={`/Ticket?data1=${encodeURIComponent(eventData.priceperperson)}&data2=${encodeURIComponent(eventData.eventname)}`}
            >
              <div className="contick">
              <h2 style={{color:"white",fontSize:"25px",fontWeight:"800",paddingLeft:"20px",position:"relative"}} >{eventData.eventname}
            <p style={{color:"yellow",fontWeight:"800",position:"relative",bottom:"-100px",textDecoration:"none"}}>{eventData.venue}</p>
              <p  style={{fontWeight:"800",fontSize:"18px",color:"yellow",position:"relative",bottom:"-100px"}}>{eventData.startdate}</p>
            <p style={{fontSize:"16px",color:"yellow",fontWeight:"800",position:"relative",bottom:"-100px"}}>{eventData.starttime}&#160;PM</p></h2>
            </div></Link>
            <p className="contrans" style={{color:"black",writingMode: "vertical-lr",fontSize:"28px",fontWeight:"600",textAlign:"center"}}>{eventData.eventtype}</p>
            </div>
        ))}
        </div>
         <Box sx={{ flexGrow: 1 }} >
        <Box sx={{ display: 'flex'  }} >
      <CssBaseline />
      
      <AppBar  position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}style={{backgroundColor:"#0f9597"}}>
        <Toolbar>
          <Typography
            variant="h5"
            noWrapcomponent="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>iDo EventZ
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
        </div>
 )
}


export default Workshop