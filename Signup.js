import React from 'react'
import './Signup.css';
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { login } from './Redux/userSlice';
import { mailin } from './Redux/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
export default function Signup() {
  const[name,setName] = useState("");
  const[mail,setMail] = useState("");
  const[password,setPassword] = useState("");
  const[contact,setCont] = useState("");
  const[city,setCity]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange = async (e) => {
    e.preventDefault()
    if(mail.length !== 0 && (/^\S+@\S+\.\S+$/).test(mail) && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password) && password.length >= 8 && contact.length>9&&city.length>2){
        try{
         const response= await axios
          .post('http://127.0.0.1:8080/api/v1/auth/register', {
              name: name,
              email: mail,
              password: password,
              contact: contact,
              city:city,
            });
              // Assuming your server responds with user data upon successful login
              if(response.status ===200){
                const user=response.data;
                dispatch(login({ user: user.name }));
                dispatch(mailin({ mail: user.mail }));
             
              navigate('/');
              setName('');
              setMail('');
              setPassword('');
              setCity('');
              setCont('');
              }
        }
            catch(error) {
              console.error('Login failed:', error);
            };
    }
    dispatch(login({user:name}));
    dispatch(mailin({mail:mail}));
}
  return (
    <>
    <form>
    <body>
   <header class="header">
   </header>
    
    <div class="signbackground1"></div>
    <div class="signcontainer1">
        <div class="signitem">
            <h2 class="signlogo">Welcome to
             iDo EventZ</h2>
            <div class="signtext-item">
                <p>We don't rermember the days,<br></br>but rather the moments!</p>
            </div>
        </div>
        <div class="signlogin-section">
            <div class="signform-box login">
                <form action=""><center>
                    <h2>Sign Up</h2>
                    <div class="signinput-box">
                        <input type="text" placeholder='UserName' value={name} required   onChange = {e => setName(e.target.value)}/>
                        <div className='signerror'>{name.length===0?"Enter Your Name":""}</div>
                    </div>
                    <div class="signinput-box">
                        <input type="text" placeholder='City' required value={city} onChange = {e => setCity(e.target.value)}/>
                        <div className='signerror'>{city.length<2?"Enter City":""}</div>
                    </div>
                    <div class="signinput-box">
                        <input type="tel" minLength="10" pattern="[0-9]{10}" placeholder='Contact-No' required value={contact} onChange = {e => setCont(e.target.value)}/>
                        <div className='signerror'>{((contact.length<10))?"Enter Valid Contact No":""}</div>

                    </div>
                    <div class="signinput-box">
                        <input type="email" placeholder='Email-id' value={mail} required onChange = {e => setMail(e.target.value)}/>
                        <div className='signerror'>{mail.length === 0 || !((/^\S+@\S+\.\S+$/).test(mail))?"Please enter your valid Email-ID" : ""}</div>

                    </div>
                    <div class="signinput-box">
                        <input type="password" pattern=" ^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$%^&+=]).{8,}$" value={password}
                title="Password may only contain letters [ Both Uppercase and LowerCase ] and numbers" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='signerror'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password)) ?"Please enter valid Password" : ""} </div>
                    </div>
                    <button onClick={handleChange} class="signbtn">Sign Up</button>
                    <div class="create-account">
                        <p style={{marginTop:"-8px"}}>Have an Account? <Link to="/signin">Log In</Link> </p>
                    </div></center>
                </form>
            </div>
            </div>
        </div>
    
</body>
</form>
</>
  )
}
