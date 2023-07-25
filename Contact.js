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
export default function Contact() {
  return (
    <>
    <div className='homehome'>
    
<div className='termbg'>
<p className='termtitle'>Contact US</p><br/>
<div className='termbcont'><p style={{fontSize:"18px"}}>Thank you for using our Event Management Application. If you have any questions, concerns, or feedback, please feel free to contact us using the information provided below. We value your input and are committed to providing the best possible user experience.</p><br/>
<p>
<br/>
General Inquiries:
<br/>
Email: [Your Email Address]
Phone: [Your Contact Number]
Business Hours: [Your Business Hours]<br/>
Technical Support:<br/>

Email: [Technical Support Email Address]
Phone: [Technical Support Contact Number]
Business Hours: [Technical Support Business Hours]<br/>
Feedback and Suggestions:<br/>
We welcome your feedback and suggestions for improving the Event Management Application. Please feel free to share your thoughts with us at [Feedback Email Address].
<br/>
Privacy Concerns:<br/>
If you have any privacy-related concerns or questions regarding our Privacy Policy, please reach out to us at [Privacy Email Address].
<br/>
Social Media:<br/>
Connect with us on social media to stay updated on the latest news, features, and events:
<br/>
Facebook: [Facebook Page URL]
Twitter: [Twitter Handle]
Instagram: [Instagram Handle]
We strive to respond to all inquiries promptly, and your satisfaction is essential to us. Thank you for using our Event Management Application, and we look forward to hearing from you!
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
