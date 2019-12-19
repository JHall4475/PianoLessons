import React, { Component } from 'react';
// import axios from 'axios';
import './login.css';
import calvin from '../../assets/CalvinHobbes.gif';
import graveyard from '../../assets/07. Graveyard Base.mp3';
import foyer from '../../assets/01. Foyer.mp3';

class Login extends Component{

    state = {
           username: '', 
           password: '',

    };
   

    login(){};
    registerNewUser(){};
    onInputChangeUsername(){};
    onInputChangePassword(){};
    
   


    render() {
        return (
            <div className='login-wpr'>
                <div className='login-title'>
                   <div>Welcome to Piano Lessons</div> 
                   <br></br>
                   <img src={calvin} alt='loading...'></img>
                   <audio ref='audio-tag' controls autoPlay>
                       <source src= {graveyard}></source>
                   </audio>
                   {/* <audio ref='audio-tag' controls>
                       <source src= {foyer}></source>
                   </audio> */}


                </div>
                <div className='login-input'>
                    <input
                      onChange={this.onInputChangeUsername}
                      value={this.state.username}
                      type="text"
                      placeholder="Username"
                    ></input>
                      <input
                      onChange={this.onInputChangePassword}
                      value={this.state.password}
                      type="text"
                      placeholder="Password"
                    ></input>
                    <button className="auth-button" onClick={() => this.login()}>Login</button>
                    <button className="auth-button" onClick={() => this.registerNewUser()}>Register</button>

                </div>
            </div>
        )
    
    }
}
export default Login;
