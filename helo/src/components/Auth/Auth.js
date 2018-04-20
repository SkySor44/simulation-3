import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {authUpdateRedux} from '../../ducks/reducer';
import logo from './helo_logo.png';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            redirect: false
         }
         this.registerNewUser = this.registerNewUser.bind(this)
    }

    updateUsername(e){
        this.setState({
            username: e
        })
    }

    updatePassword(e){
        this.setState({
            password: e
        })
    }

    registerNewUser(){
        const {username, password} = this.state;
        var newObj = {
            username: username,
            password: password
        }
        axios.post('http://localhost:4000/register', newObj).then(res => {
            this.setState({
                redirect: true
            })
            this.props.authUpdateRedux(res.data.id, res.data.username, res.data.profilePic)
        })
        this.setState({
            username: '',
            password: '',
            redirect: false
        })
    }

    loginUser(){
        const {username, password} = this.state;
        var newObj = {
            username: username,
            password: password
        }
        axios.post('http://localhost:4000/login', newObj).then(res => {
            this.setState({
                redirect: true
            })
            this.props.authUpdateRedux(res.data.id, res.data.username, res.data.profile_pic)
        })
        this.setState({
            username: '',
            password: '',
            redirect: false
        })
    }



    render() { 
      var render =   this.state.redirect ? <div>
            <Redirect to = '/dashboard'/>
        </div> : <div className = 'login-div'>
        <div className = 'login-contain'>
                <img src = {logo} alt = 'logo'/>
                <h1 className = 'brand-name'>Helo</h1>
                <div className = 'username'>
                    <label>Username: </label>
                    <input value = {this.state.username} type = 'text'  onChange = {(e) => this.updateUsername(e.target.value)}/>
                </div>
                <div className = 'username'>
                    <label>Password: </label>
                    <input value = {this.state.password} type = 'text'  onChange = {(e) => this.updatePassword(e.target.value)}/>
                </div>
                <div className = 'login-btn'>
                    <button className = 'login-btns' onClick = {() => this.loginUser()}>Login</button>
                    <button className = 'login-btns' onClick = {() => this.registerNewUser()}>Register</button>
                </div>
                
                
            </div>
            {/* <div className= 'loader'></div> */}
            </div>
        return (
            <div>
            {render}
            </div>
         )
    }
}
 

export default connect(null, {authUpdateRedux})(Auth);