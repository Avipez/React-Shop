import React from 'react';
import "../styles/Login.scss";

const Login = () => {
    return (
        <div className="login">
        <div className="form-container">
            <img src="../assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <form action="/" className="form">
                <label htmlFor="email" className="label">Email address</label>
                <input type="text" id="email" 
                className="input input_email"
                placeholder="avipez@gmail.com" />
                <label htmlFor="password" className="label">Password</label>
                <input type="password" id="new_password" 
                className="input input-password"
                placeholder="********" />
                <input type="submit" value="Login" className="primary_button login-button" />
                <a href="/">Forgot my password</a>
            </form>
            <button className="secondary_button signup_button">Sign up</button>
        </div>
    </div>
    );
}

export default Login;
