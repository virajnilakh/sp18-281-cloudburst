import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import * as API from '../api/API.js';
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    signIn  = () => {
        console.log("in signin - 281")
        var data = this.state;
        API.signin(data)
            .then((res) => {
                console.log(res);
                this.props.history.push("/");
            });
    }
  render() {
    return (  
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4 login-block">
            <form>
                <div>
                    <label className="login-heading-style" for="Email">Email Address</label><br></br>
                    <input className="login-textbox-style" classname="login-textbox-style" id="Email" maxlength="64"
                           name="Email" type="text"
                           value={this.state.email}
                           onChange={(event) => {
                               this.setState({
                                   email: event.target.value
                               });
                           }}></input>
                </div>
                <div id="EmailAddressHint"></div>
                <div>
                    <label className="login-heading-style" for="Password">Password</label><br></br>
                    <input className="login-textbox-style" id="Password" maxlength="1024" name="Password" type="password"
                           value={this.state.password}
                           onChange={(event) => {
                               this.setState({
                                   password: event.target.value
                               });
                           }}></input>
                   </div>
                <button onClick={ () =>{this.signIn()}}  className="login-button" id="btnLogin" type="button">Login</button>


            </form>
        </div>
            <div className="col-md-4">
            </div>
        </div>
    );
  }
}

export default withRouter(Signin);

