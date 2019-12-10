import React, { Component } from 'react';
// import axios from 'axios';
import './login.css';

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
                   <button>2</button>
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
