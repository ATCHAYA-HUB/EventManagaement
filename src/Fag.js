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
export default function Fag() {
  return (
    <>
    <div className='homehome'>
    
<div className='termbg'>
<p className='termtitle'>Contact US</p><br/>
<div className='termbcont'><p style={{fontSize:"20px"}}>Frequently Asked Questions (FAQ)</p><br/>
<p style={{fontSize:"18px"}}>
<br/>
Welcome to the Frequently Asked Questions (FAQ) page for our Event Management Application. Here, we have compiled some common questions and answers to help you better understand our app's features and functionalities. If you have any other questions that are not addressed here, please feel free to contact our support team.
</p><br/><p>
<p style={{fontSize:"16px",fontWeight:"700"}}>1. How do I create an event using the Event Management Application?</p>
<br/>
To create an event, log in to your account and navigate to the "Create Event" section. Provide event details such as name, date, time, venue, description, and any associated images or documents.
<br/><br/><p style={{fontSize:"16px",fontWeight:"700"}}>2. Can I sell tickets for my event through the app?</p>
<br/>
Yes, you can sell tickets for your event using our app's ticketing feature. During event creation, you can set up ticket types, prices, and quantities.
<br/><br/><p style={{fontSize:"16px",fontWeight:"700"}}>3. How do attendees register for an event?</p>
<br/>
Attendees can register for an event by navigating to the event page and clicking on the "Register" button. They will be prompted to provide their details and select the desired ticket type.
<br/><br/><p style={{fontSize:"16px",fontWeight:"700"}}>4. Can I view the list of attendees for my event?</p>
<br/>
Yes, as an event organizer, you can view the list of registered attendees for your event in the "Attendee Management" section. You can also export attendee lists for further analysis.
<br/><br/><p style={{fontSize:"16px",fontWeight:"700"}}>5. How can I communicate with event attendees?</p>
<br/>
You can send event updates and communicate with attendees through the app's communication features. Use the "Event Updates" section to send messages or notifications to registered attendees.
<br/><br/><p style={{fontSize:"16px",fontWeight:"700"}}>6. Is my personal information secure on the app?</p>
<br/>
We take data security seriously. Your personal information is protected using industry-standard security measures, and we do not share your data with third parties without your consent. For more details, please review our Privacy Policy.
<br/><br/><p style={{fontSize:"16px",fontWeight:"700"}}>7. Can I customize the event agenda and schedule?</p>
<br/>
Yes, event organizers can customize the event agenda and schedule using the "Agenda Management" section. You can add sessions, speakers, and activities to create a structured program.
<br/><br/><p style={{fontSize:"16px",fontWeight:"700"}}>8. How can I track event performance and attendance?</p>
<br/>
The app provides data analytics and reporting features to track event performance, including registration numbers and attendance rates. You can access these reports in the "Event Analytics" section.
<br/><br/><p style={{fontSize:"16px",fontWeight:"700"}}>9. What payment methods are accepted for event ticket purchases?</p>
<br/>
The app integrates with popular payment gateways to accept various payment methods, including credit/debit cards and online payment platforms.
<br/><br/><p style={{fontSize:"16px",fontWeight:"700"}}>10. How do I get technical support for the app?</p><br/>
- For technical support, you can contact our support team via email at [Technical Support Email Address] or call [Technical Support Contact Number]. Our support team is available during [Technical Support Business Hours].
<br/>
We hope these FAQs have been helpful. If you have any other questions or need further assistance, please do not hesitate to reach out to us. Thank you for using our Event Management Application!
<br/><br/><br/>
Best regards,
The iDo EventZ Team</p></div>
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
