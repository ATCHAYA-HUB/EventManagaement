import React, { Component } from 'react'
import './Signup.css';
import {Link} from 'react-router-dom';
export class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
        name:'',
        mail:'',
        password:'',
        num:'',
        };
}
handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
handleNumChange = (event) => {
    this.setState({ num: event.target.value });
  };
handleEmailChange = (event) => {
    this.setState({ mail: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      mail: this.state.mail,
      password: this.state.password,  
      name: this.state.name,
    };
};
  render() {
    return (
        <>
        <form onSubmit={this.handleSubmit}>
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
                        <h2>Sign Up</h2>
                        <div class="input-box">
                            <span class="icon"><i class='bx bxs-envelope'></i></span>
                            <input type="text" placeholder='UserName' required value={this.state.name}  onChange={this.handleNameChange}/>
                        </div>
                        <div class="input-box">
                            <span class="icon"><i class='bx bxs-envelope'></i></span>
                            <input type="tel" placeholder='Contact-No' required value={this.state.num}  onChange={this.handleNumChange}/>
                        </div>
                        <div class="input-box">
                            <span class="icon"><i class='bx bxs-envelope'></i></span>
                            <input type="email" placeholder='Email-id' required value={this.state.mail}  onChange={this.handleEmailChange}/>
                        </div>
                        <div class="input-box">
                            <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                            <input type="password" placeholder='Password'required value={this.state.password}  onChange={this.handlePasswordChange}/>
                        </div>
                        <div class="remember-password">
                            <label for=""><input type="checkbox"/>Remember Me</label>
                        </div>
                       <Link to="/home"> <button class="btn">Sign Up</button></Link>
                        <div class="create-account">
                            <p>Have an Account? <Link to="/signin"><a href="#">Log In</a></Link> </p>
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
}
export default Signup
