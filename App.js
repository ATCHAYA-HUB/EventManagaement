import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Myevent from './Myevent';
import Fag from './Fag';
import Terms from './Terms';
import Privacy from './Privacy';
import Contact from './Contact';
import{ BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Home';
import {Calender}from './Calendar/Calender';
import Inviations from './Invitations';
import Fan from './Fan';
import Ticket from './Ticket';
import Etick from './Etick';
import Concert from './Concert';
import Audio from './Audio';
import Concert1 from './Concert1';
import Chat from './Chat';
import Updateevent from './Updateevent';
import Deleteevent from './Deleteevent';
import Deleteaccount from './Deleteaccount'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Profile" element={<Profile/>}></Route>
      <Route path="/Chat" element={<Chat/>}></Route>
      <Route path="/Myevent" element={<Myevent/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/Fag" element={<Fag/>}></Route>
      <Route path="/Terms" element={<Terms/>}></Route>
      <Route path="/Privacy" element={<Privacy/>}></Route>
      <Route path="/signin" element={<Login/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Calendar" element={<Calender/>}></Route>
      <Route path="/Invitations" element={<Inviations/>}></Route>
      <Route path="/Fan" element={<Fan/>}></Route>
      <Route path="/Audio" element={<Audio/>}></Route>
      <Route path="/Concert" element={<Concert/>}></Route>
      <Route path="/Ticket" element={<Ticket/>}></Route>
      <Route path="/Etick" element={<Etick/>}></Route>
      <Route path="/Concert1" element={<Concert1/>}></Route>
      <Route path="/Updateevent" element={<Updateevent/>}></Route>
      <Route path="/Deleteevent" element={<Deleteevent/>}></Route>
      <Route path="/Deleteaccount" element={<Deleteaccount/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
