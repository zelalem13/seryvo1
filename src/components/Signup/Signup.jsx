import React, { useState } from "react";
import "../Login/Login.css";
import Cards from '../Cards/Cards';
import GoogleIcon from "@mui/icons-material/Google"  
import FacebookIcon from "@mui/icons-material/Facebook"  
//import TwitterIcon from "@mui/icons-material/Twitter";
import AppleIcon from "@mui/icons-material/Apple";
//import {database} from '../../utils/database';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';

const Signup = ({setIsSignedUp}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    email: "Invalid email",
    password: "Invalid password",
    noEmail: "Please enter your email",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    if (!email) {
      // Username input is empty
      setErrorMessages({ name: "noEmail", message: errors.noEmail });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }
    else{
      setErrorMessages({});
      setIsSignedUp(true);
    }
    // Search for user credentials
    //const currentUser = database.find((user) => user.email === email);

    //if (currentUser) {
      //if (currentUser.password !== password) {
        // Wrong password
        //setErrorMessages({ name: "password", message: errors.password });
      //} else {
        // Correct password, log in user
        //setErrorMessages({});
        //setIsLoggedIn(true);
      //}
    //} else {
      // Username doens't exist in the database
      //setErrorMessages({ name: "email", message: errors.email });
    //}
  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

return (
  
    <div className="teret">
      <Cards>
    <div className="tedr"> 
       <h1 className="title">Create your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs_container">
           
            <img src={email_icon} alt="" /> 
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {renderErrorMsg("email")}
          {renderErrorMsg("noEmail")}
            
            
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
         
          
        </div>
        <input type="submit" value="Sign up" className="login_button" />
      </form>
        <label>Or continue with:</label>
        <div id="iconGroup" className="test12">
        <FacebookIcon style={{ color: '#1266f1' }} />
        <GoogleIcon style={{ color: '#EA4335' }} />
        <AppleIcon style={{ color: '#000' }} />
        </div>
      </div>
      </Cards>
      </div>
    
  );
  
};


export default Signup;