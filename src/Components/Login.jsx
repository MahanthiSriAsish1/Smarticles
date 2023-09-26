import React from "react";
import "../css/login.css";


export default function login(){
    return (
        <>
        <header>
            <h2 className="logo">Logo</h2>
            <nav className="navigation">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <button className="btn">Login</button>
            </nav>
        </header>
        <div className="wrapper">
            <div className="form-box login">
                <h2>Login</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <input type="password" required />
                        <label>password</label>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="logo-register">
                        <p>Don't have an account?<a href="./index.html" className="register-link">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}