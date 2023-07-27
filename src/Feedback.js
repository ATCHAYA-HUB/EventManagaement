import React from 'react'
import './Feedback.css'
import { TextField,FormControl,Button } from '@mui/material'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Feedback() {
  // const[feedBackId,setFeedBackId] = useState(0);
  
    const[email,setEmail] = useState("");
    const[feedback,setFeedback] = useState("");
    const navigate = useNavigate();
    let token = localStorage.getItem('token');
    console.log(token);


    const handleChange = async(event) => {
      if( email.length !== 0 && (/$^|.+@.+..+/).test(email)&& feedback.length !== 0){
        console.log(email);
        try{
    console.log(email);

            const response= axios.post("http://localhost:8080/api/v1/users/addUserFeedback",{ 
           

              email:email,
              feedback:feedback,
            },
            {
              headers:{
                "Authorization":`Bearer ${token}`,
                "cache-control":'no-cache', 
              }
            }
        
            );
            window.alert('Response submitted')
            navigate('/Home')
          
          }

            catch(error){
              console.log(error);
            }
            }
          }
  return (
    <div className='feedback-background'>


        <center><h2 className='feedback-title'>FEEDBACK</h2>
        <br/>
        <FormControl>


       


        <TextField required label = "Email-id" onChange = {e => setEmail(e.target.value)} sx = {{width:350,position:"relative",left:130}}></TextField>
        <div className = "feedback-error">
        {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Enter a valid email" : ""}</div><br/>


        <TextField id="feedback" required label="feedback" multiline rows={4} defaultValue="Give your Feedback.." style = {{width:600}} onChange = {e => setFeedback(e.target.value)}/><br/>
        <div className = "feedback-error">
        {feedback.length === 0 ?"*required" : ""}
        </div>
<br/>


        <Button onClick = {handleChange} className = "feedback-login" variant = "contained" type = "submit" sx = {{width:70,position:"absolute",left:267,top:400}}>SUBMIT</Button><br/>
</FormControl>
</center>
    </div>
  )
}


export default Feedback