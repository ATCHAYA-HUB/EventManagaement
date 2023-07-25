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
import { Link } from 'react-router-dom';
const drawerWidth = 220;
export default function Privacy() {
  return (
    <>
    <div className='homehome'>
    
<div className='termbg'>
<p className='termtitle'>Privacy Policy</p><br/>
<div className='termbcont'><p style={{fontSize:"20px"}}>Last Updated: [1.1.2020]</p><br/><p>

This Privacy Policy explains how our Event Management Application ("the App") collects, uses, shares, and protects the personal information of users who access or use the App. We are committed to safeguarding your privacy and ensuring that your personal information remains secure. By accessing or using the App, you consent to the practices described in this Privacy Policy.
<br/>
1. Information We Collect:
<br/>
a. Personal Information: We may collect the following types of personal information from users who register or interact with the App:

Name
Email address
Contact number
Postal address
Profile picture (if provided)
Other information voluntarily provided by users<br/>
b. Non-Personal Information: <br/>The App may automatically collect non-personal information about your device and usage of the App, including:

Device information (e.g., device type, operating system, and browser)
IP address
App usage data (e.g., pages visited, actions taken within the App)
<br/>2. Use of Information:
<br/>
a. We use the collected personal information for the following purposes:
<br/>
Facilitating event registration and ticketing processes
Sending event updates and communications
Managing attendee information and communication
Providing customer support
Analyzing and improving the App's functionality and user experience
<br/>b. Non-personal information is used to analyze App usage patterns, track user interactions, and enhance the App's performance and features.
<br/>
3. Data Sharing:
<br/>
a. Event Organizers: <br/>We may share personal information with event organizers to facilitate event registration, communication, and management.
<br/>
b. Third-Party Services: <br/>The App may integrate with third-party services, such as payment gateways, for event ticketing and transactions. Users' interactions with these third-party services are subject to their respective privacy policies.
<br/>
c. Legal Compliance: We may disclose personal information if required by law or in response to valid legal requests, such as court orders or government investigations.
<br/>
4. Data Security:
<br/>
We implement industry-standard security measures to protect personal information from unauthorized access, disclosure, or alteration. However, no data transmission or storage method can guarantee absolute security, and users are responsible for maintaining the confidentiality of their login credentials.
<br/>
5. Cookies and Tracking Technologies:
<br/>
The App may use cookies and similar tracking technologies to collect non-personal information about user interactions with the App. Users can control cookie preferences through their browser settings.
<br/>
6. Children's Privacy:
<br/>
The App is not intended for use by children under the age of 18. We do not knowingly collect personal information from individuals under this age without parental or guardian consent.
<br/>
7. User Choices:
<br/>
a. Users have the right to access, update, or delete their personal information by contacting us at [Contact Email].
<br/>
b. Users can choose to unsubscribe from App communications at any time by following the instructions provided in the emails.
<br/>
8. Changes to the Privacy Policy:
<br/>
We reserve the right to update or modify this Privacy Policy from time to time. Any significant changes will be communicated to users via App notifications or email.</p></div>
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
