import * as React from 'react';
import './Terms.css';
import './Home.css'
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
import CalanderIcon from '@mui/icons-material/CalendarMonth'
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ProfileIcon from '@mui/icons-material/Person';
import LogOutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
const drawerWidth = 220;
export default function Terms() {
  return (
    <>
    <div className='homehome'>
    
<div className='termbg'>
<p className='termtitle'>Terms And Conditions</p><br/>
<div className='termbcont'><p><p style={{fontSize:"24px"}}> Terms and Conditions for iDo EventZ<br/><br/></p>

Welcome to our Event Management Application! Before using the application, please carefully read and understand the following Terms and Conditions, as they govern your access and use of our services. By using the Event Management Application, you agree to comply with these Terms and Conditions.<br/>
<br/><p style={{fontSize:"20px"}}>
Acceptance of Terms:<br/></p>

These Terms and Conditions constitute a legally binding agreement between you and the Event Management Application. If you do not agree with any part of these terms, please refrain from using the app.
<br/><p style={{fontSize:"20px"}}><br/>Age Requirement:</p>

To use the Event Management Application, you must be at least 18 years old or the legal age in your country of residence. If you are under the specified age, you may only use the application with the involvement of a parent or guardian.
<br/><p style={{fontSize:"20px"}}><br/>Use of the Application:<br/></p>


The Event Management Application is intended solely for organizing, managing, and attending events. Any unauthorized use or attempt to gain unauthorized access to the application's systems or data is strictly prohibited.
<br/><p style={{fontSize:"20px"}}><br/>Intellectual Property:<br/></p>

The Event Management Application and all its content, including but not limited to logos, designs, software, and documentation, are protected by intellectual property laws. You may not reproduce, modify, distribute, or create derivative works without our explicit written consent.
<br/><p style={{fontSize:"20px"}}><br/>Event Creation and Setup:<br/></p>

Event organizers are solely responsible for the accuracy of event information provided during the creation and setup process. We are not liable for any inaccuracies, changes, or cancellations related to events.
<br/><p style={{fontSize:"20px"}}><br/>Registration and Ticketing:<br/></p>

The Event Management Application facilitates attendee registration and ticketing processes. By using these features, event organizers and attendees agree to adhere to the respective terms and conditions set forth during the registration and ticketing process.
<br/><p style={{fontSize:"20px"}}><br/>Attendee Management:<br/></p>

The application provides features for managing attendee information and communication. Attendees acknowledge and consent to the collection and use of their data as outlined in the application's Privacy Policy.
<br/><p style={{fontSize:"20px"}}><br/>Agenda and Schedule Management:<br/></p>

Event organizers are responsible for creating and managing event agendas and schedules. We do not guarantee the accuracy or availability of the agenda, and attendees are advised to check for any updates or changes regularly.
<br/><p style={{fontSize:"20px"}}><br/>Communication and Engagement:<br/></p>

The Event Management Application may include communication features for attendee engagement. Users agree to use these features responsibly and to refrain from posting inappropriate, offensive, or harmful content.
<br/><p style={{fontSize:"20px"}}><br/>Data Analytics and Reporting:<br/></p>

The application provides reporting and analytics features for event performance tracking. However, the accuracy and interpretation of data may depend on various factors and cannot be guaranteed.
<br/><p style={{fontSize:"20px"}}><br/>Payment and Financial Management:<br/></p>

For events that involve payments, the Event Management Application may integrate with payment gateways to process transactions securely. Users agree to comply with the payment gateway's terms and conditions during the payment process.
<br/><p style={{fontSize:"20px"}}><br/>Security:<br/></p>

While we take measures to ensure the security of the application, users are responsible for maintaining the confidentiality of their login credentials. Any suspicious or unauthorized activity should be reported immediately.
<br/><p style={{fontSize:"20px"}}><br/>Modifications and Updates:<br/></p>

The Event Management Application may be updated or modified from time to time to improve functionality or comply with legal requirements. Users will be notified of any significant changes to these Terms and Conditions.
<br/><p style={{fontSize:"20px"}}><br/>Limitation of Liability:<br/></p>

The Event Management Application and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use the application, even if advised of the possibility of such damages.
<br/></p></div>
<br/><br/><br/><br/>
</div>
    </div>
    <Box sx={{ flexGrow: 1 }} >
        <Box sx={{ display: 'flex'  }} >
      <CssBaseline />
      <Drawer 
        variant="permanent"
        sx={{
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
            {['EVENTS'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to="/Workshop">
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
    </>
  );
}
