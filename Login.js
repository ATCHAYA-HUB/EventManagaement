import React from 'react'
import './Login.css';
import Cookies from 'js-cookie';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { login } from './Redux/userSlice';
import { mailin } from './Redux/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios'
export default function Login() {
  const[name,setName] = useState("");
  const[mail,setMail] = useState("");
  const[password,setPassword] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange = async(e) => {
      e.preventDefault()
      if(mail.length !== 0 && (/^\S+@\S+\.\S+$/).test(mail) && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password) && password.length >= 8 ){
        try{
         const response=await axios
            .post('http://127.0.0.1:8080/api/v1/auth/authenticate', {
              name: name,
              email: mail,
              password: password,
            });
            Cookies.set("user",name);
            Cookies.set("mail",mail);
            navigate('/Home');
            let user=response.data.userResponse;
            let token =response.data.token;
            let uid=response.data.id;
            let uname=name;
            localStorage.setItem('uid',uid);
            localStorage.setItem('uname',uname);
            localStorage.setItem('token',token);
            localStorage.setItem('user',JSON.stringify(user))
            
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
    <div class="background1"></div>
    <div class="container1">
        <div class="item">
            <h2 class="logo">Welcome to
             iDo EventZ</h2>
            <div class="text-item">
                <p>We don't rermember the days,<br></br>but rather the moments!</p>
            </div>
        </div>
        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>Log In</h2>
                    <div class="input-box">
                        <input type="text" placeholder='UserName' required  style={{color:"white"}} onChange = {e => setName(e.target.value)}/>
                        <div className='error'>{name.length===0?"Enter Your Name":""}</div>
                    </div>

                    <div class="input-box">
                        <input type="email" placeholder='Email-id'style={{color:"white"}}  required onChange = {e => setMail(e.target.value)}/>
                        <div className='error'> {mail.length === 0 || !((/^\S+@\S+\.\S+$/).test(mail))?"Please enter your valid Email-ID" : ""}</div>
                    </div>
                    <div class="input-box">
                        <input type="password" style={{color:"white"}}  pattern="^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$%^&+=]).{8,}$" 
                title="Password must contain letters [ Both Uppercase and LowerCase ] and numbers and one special character" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password)) ?"Please enter valid Password" : ""} </div>
                   
                    </div>
                    <button onClick={handleChange} class="btn">Log In</button>
                    <div class="create-account">
                        <p>Don't have an Account? <Link to="/signup">Sign Up</Link> </p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    
</body>
</form>
</>
  )
}
