import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations";
import Auth from '../utils/auth';
import "./login.css";

const LoginForm = async () => {
    const [login] = useMutation(LOGIN_USER)
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const validated = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault()

    //     try {
    //         const { data } = await login({
    //             variables: { ...userFormData }
    //         });

    //         Auth.login(data.login.token);
    //     } catch (err) {
    //         console.error(err);
    //         setShowAlert(true)
    //     }
    // }


    setUserFormData({
        username: '',
        password: ''
    })

    return (
        <div className="loginForm">
            <div className="card">
                <h2>Welcome to Pet Placer!</h2>
                <form noValidate validated={() => validated} onSubmit={console.log('hit')}>
                    <label>Username</label>
                    <input
                        type='text'
                        placeholder='Your email'
                        name='email'
                        onChange={() => handleInputChange}
                        value={() => userFormData.email}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="text"
                        required
                    />
                    <button className="login-button">Log In</button>
                    <button className="signup-button">Not a Member? Sign Up Here</button>
                </form>
            </div>
        </div >
    );
}

export default LoginForm;