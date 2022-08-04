import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = (event) => {
        event.preventDefault();
        // login logic
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history("/");
            })
            .catch((e) => alert(e.message));
    };
    const register = (event) => {
        event.preventDefault();
        // register logic
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history("/");
            })
            .catch((e) => alert(e.message));
    };
    const history = useNavigate();

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                    alt="amazon logo"
                />
            </Link>
            <div className="login-container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <h5>password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                        onClick={login}
                        type="submit"
                        className="login-signInButton"
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use &
                    Sale. Please see our Privacy Notice, our Cookies Notice and
                    our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login-registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
