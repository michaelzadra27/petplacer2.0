import React from 'react';
import { useState } from 'react'
import {LOGIN_USER} from '../utils/mutations'
import { useMutation } from '@apollo/react-hooks'
import Auth from '../utils/auth'
import "./login.css";

const Login = () => {
    const [formState, setFormState] = useState('')
    const [login] = useMutation(LOGIN_USER)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleLogin = async (event) => {
        event.preventDefault()
        const { data } = await login({variables: {...formState}})
        Auth.login(data.login.token)
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
                    <button className="signup-button">Not a Member? Sign Up Here</button>
                </form>
            </div>
        </div >
    )
}

export default Login;