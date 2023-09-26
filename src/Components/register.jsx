import React from "react";
import "../css/register.css"

export default function logout() {
    return (
        <>
            <header>

            </header>
            <div>            
                <div className="form-box register wrapper">
                <h2>Register</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <input type="text" required />
                        <label>Username</label>
                    </div>
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
                        <label><input type="checkbox" />agree to the terms & conditions </label>

                    </div>
                    <button type="submit" className="btn">Register</button>
                    <div className="logo-register">
                        <p>Already have an account?<a href="./loginpage1.html" className="login-link">Login</a></p>
                    </div>
                </form>
            </div>
            </div>

        </>
    );
}