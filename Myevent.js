import * as React from 'react';
import './Home.css';
import './Myevent.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FaceBookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CalanderIcon from '@mui/icons-material/CalendarMonth'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ProfileIcon from '@mui/icons-material/Person';
import LogOutIcon from '@mui/icons-material/Logout';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import { ratein } from './Redux/userSlice';
const drawerWidth = 220;
export default function Myevent() {
  //const[rate,setRate] = useState("");
 
  const[organizer,setOrganizer] = useState("");
  const[eventname,setEventname] = useState("");
  const[fromdate,setFdate] = useState("");
  const[todate,setTodate] = useState("");
  const[fromtime,setFromtime] = useState("");
  const[totime,setTotime] = useState("");
  const[venue,setVenue] = useState("");
  const[description,setDescription] = useState("");
  const[agenda,setAgenda] = useState("");
  const[eventtype,setEtype]=useState("");
  const[price,setPrice] = useState("");
  const[id,setId]=useState(0);
  const handleChange = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'http://127.0.0.1:8080/save/eventdetails',
        {
          organiser: organizer,
          eventname: eventname,
          startdate: fromdate,
          enddate: todate,
          starttime: fromtime,
          endtime: totime,
          venue: venue,
          eventtype:eventtype,
          id:id,
          eventdescription: description,
          eventagenda: agenda,
          priceperperson: price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
        }
      );
      
      alert('Form Submitted Successfully!');
      
    } 
    catch (error) {
      console.error('Form submission failed:', error);
    }
  }
  return (
    <>
    <div className='eventhome'><div className='imgevent'>
          <div className='orgform'>
            <p className='kind'>Ready to organize your <span style={{color:"white",fontFamily:"cursive"}}>EVENT...</span></p>
           <center> <form className='oform'><br/>
           <div style={{left:"-100px" ,position:"relative"}}>
            <label>Organizer:</label>
            <input  type="text" value={organizer}  onChange = {e => setOrganizer(e.target.value)} id="fname" placeholder='Organiser'/>
            <label style={{marginLeft:"50px"}}>Event ID:</label>
            <input className='tick1' type="text" value={id}  onChange = {e => setId(e.target.value)} id="fname" placeholder='Event ID'/></div><br></br>
            <div style={{ marginLeft:"-500px"}}>
            <label>Event name:</label>
            <input type="text" value={eventname}  onChange = {e => setEventname(e.target.value)} id="fname" placeholder="Event Name"/></div>
            <div className='tick1' style={{ marginTop:"-23.8px",marginLeft:"90px"}}>
            <label>Ticket Rate:</label>
            <input type="number" value={price}  onChange = {e => setPrice(e.target.value)} id="fname" placeholder="Ticket rate"/></div><br></br>
            <div style={{marginLeft:"-440px"}}>
            <label>Timings [ From ]:</label>
            <input type="time" value={fromtime}  onChange = {e => setFromtime(e.target.value)}id="fname"/></div>
            <div style={{marginTop:"-25px"}}>
            <label>Timings [ To ]:</label>
            <input type="time" value={totime}  onChange = {e => setTotime(e.target.value)} id="fname"/></div><br/>
            <div style={{marginLeft:"-440px"}}>
            <label>Date[ From ]:</label>
            <input type="date" value={fromdate}  onChange = {e => setFdate(e.target.value)} id="fname"/></div>
            <div style={{marginLeft:"15px",marginTop:"-24px"}}>
            <label>Date[to]:</label>
            <input type="date" value={todate}  onChange = {e => setTodate(e.target.value)} id="fname"/></div><br/>
            <div style={{marginRight:"200px"}}>
            <label>Event Type:</label>
            <input value={eventtype}  onChange = {e => setEtype(e.target.value)} list="browsers" className='eventy'  style={{backgroundColor:"transparent",border: "2px solid rgb(255, 140, 0)",transition: "0.5s",outline: "none",color:"white",borderRadius:"7px",fontSize:"15px"}}/>
  <datalist id="browsers">
    <option value="Concert"></option>
    <option value="Exhibition"></option>
    <option value="Audiolaunch"></option>
    <option value="WorkShop"></option>
    <option value="Fan-Meet"></option>
  </datalist>
  </div><br/>
            <label style={{marginLeft:"-180px"}}>Event Venue:</label><br></br>
            <textarea value={venue}  onChange = {e => setVenue(e.target.value)} id="lname" placeholder="Event Venue" rows="3" cols="50"/><br></br>
            <label style={{marginLeft:"-180px"}}>Event Description:</label><br></br>
            <textarea value={description}  onChange = {e => setDescription(e.target.value)} id="lname" placeholder="Description" rows="8" cols="50"/><br></br>
            <label style={{marginLeft:"-180px"}}>Event Agenda:</label><br></br><br></br>
            <textarea id="lname" value={agenda}  onChange = {e => setAgenda(e.target.value)} placeholder="Agenda" rows="12" cols="50"/><br></br>
          <Button onClick={handleChange} style={{backgroundColor:"rgb(255, 140, 0)"}} variant='contained' className='evebtn'>Submit</Button>
          <br></br><br></br><br></br> 
          </form></center>
          </div>
          </div></div>
          <Box sx={{ flexGrow: 1 }} >
        <Box sx={{ display: 'flex'  }} >
      <CssBaseline />
      <Drawer 
        variant="permanent"
        sx={{
          overflow:"hidden",
            width: 0,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        >
        <Toolbar />
        <Box >
          <List >
            {['PROFILE'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton  component={Link} to="/Profile">
                  <ListItemIcon>
                    {index % 2 === 0 ? <ProfileIcon style={{color:"#0f9597"}}/> : <CalanderIcon style={{color:"#0f9597"}}/>}
                  </ListItemIcon>
                  <ListItemText sx={{ color:"#0f9597" }}  primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            {['CALENDAR'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to="/Calendar" >
                  <ListItemIcon>
                    {index % 2 === 1 ? <ProfileIcon style={{color:"#0f9597"}}/> : <CalanderIcon style={{color:"#0f9597"}}/>}
                  </ListItemIcon>
                  <ListItemText sx={{ color:"#0f9597" }}  primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            {['CHAT BOX'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to="/Chat">
                  <ListItemIcon>
                    {index % 2 === 0 ? <HistoryEduIcon style={{color:"#0f9597"}} /> : <LogOutIcon style={{color:"#0f9597"}} />}
                  </ListItemIcon>
                  <ListItemText sx={{ color:"#0f9597" }}  primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            {[ 'SIGN OUT'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to="/">
                  <ListItemIcon>
                    {index % 2 === 1 ? <HistoryEduIcon style={{color:"#0f9597"}} /> : <LogOutIcon style={{color:"#0f9597"}} />}
                  </ListItemIcon>
                  <ListItemText sx={{ color:"#0f9597" }}  primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
            </Box>
      </Drawer>
      <AppBar  position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}style={{backgroundColor:"#0f9597"}}>
        <Toolbar>
          <Typography
            variant="h5"
            noWrapcomponent="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>iDo EventZ
          </Typography>
          <Button style={{position:"relative",right:"100px"}} color="inherit" component={Link} to="/Home"  sx={{
        "&.Mui-disabled": {background: "#eaeaea",color: "#0f9597" }}}>Home</Button>
          <Button style={{position:"relative",right:"71px"}}color="inherit" disabled component={Link} to="/Myevent" sx={{
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
    <Link style={{textDecoration: 'none'}} to="/Terms"> <p className='term' >Teams and conditions</p></Link> 
    <Link style={{textDecoration: 'none'}}to="/Privacy"><p className='privacy'>Privacy Policy</p></Link>
    <Link style={{textDecoration: 'none'}} to="/Fag"> <p className='faq'>FAQ</p></Link>
    <Link style={{textDecoration: 'none'}} to="/Contact"> <p className='cont'>Contact Us</p></Link>
          <BottomNavigationAction sx={{ position: 'relative', bottom: 0, left: 540, right: 0 }}label="History" icon={<InstagramIcon style={{ color: "white" }} />} component={Link} to="https://www.instagram.com/" />
          <BottomNavigationAction label="History" sx={{ position: 'relative', bottom: 0, left: 400, right: 0 }}icon={<FaceBookIcon style={{ color: "white" }} />} component={Link} to="https://www.facebook.com/" />
          <BottomNavigationAction label="History" sx={{ position: 'relative', bottom: 0, left: 260, right: 0 }}icon={<TwitterIcon style={{ color: "white" }}/>} component={Link} to="https://www.twitter.com/" />
          <BottomNavigationAction label="History"sx={{ position: 'relative', bottom: 0, left: 120, right: 0 }} icon={<LinkedInIcon style={{ color: "white" }}/>} component={Link} to="https://www.linkedin.com/" />
          <BottomNavigationAction label="History"sx={{ position: 'relative', bottom: 0, right: 20 }} icon={<GitHubIcon style={{ color: "white" }}/>} component={Link} to="https://www.github.com/" />
        </BottomNavigation>
       
      </Paper>
    </Box>
    </>
  );
}
