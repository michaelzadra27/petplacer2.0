import React from 'react';
import { useState } from 'react'
import {LOGIN_USER} from '../utils/mutations'
import { useMutation } from '@apollo/react-hooks'
import Auth from '../utils/auth'
import "./login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"

const Login = () => {
    const [formState, setFormState] = useState('')
    const [login] = useMutation(LOGIN_USER)
    const history = useHistory();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleLogin = async (event) => {
        event.preventDefault()
        const { data } = await login({variables: {...formState}})
        Auth.login(data.login.token);
        history.push('/navbar2')
    }

    return (
        <div className="loginForm">
            <div className="card">
                <h2>Welcome to Pet Placer!</h2>
                <form onSubmit={handleLogin}>
                    <label>Username</label>
                    <input
                        type='text'
                        placeholder='Your email'
                        name='email'
                        onChange={handleInputChange}
                        value={formState.email}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="text"
                        placeholder='password'
                        name='password'
                        onChange={handleInputChange}
                        value={formState.password}
                        required
                    />
                    <button className="login-button">Log In</button>
                
                </form>
                <button className="signup-button"><Link to = "/signup" style={{ textDecoration: 'none', color: "white"}}>Not a Member? Sign Up Here</Link></button>
            </div>
        </div >
    )
}

export default Login;