import "./signup.css";

import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { SIGN_UP } from "../utils/mutations"

const Signup = () => {

    const [ formData , setFormData ] = useState({email: '', password: ''})
    const [addUser] = useMutation(SIGN_UP)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value})
    }

    const handleFormSubmit= async (event) => {
        event.preventDefault()
        console.log(formData)
        const newUser = addUser({ variables: {...formData} })
    }

    return (
        <div className="signupForm">
            <div className="card">
            <h2>Create an Account</h2>
                <form onSubmit={handleFormSubmit}>
                <label>Email</label>
                <input
                    type = "text"
                    required
                    name='email'
                    onChange={handleInputChange}
                    value={formData.email}
                />
                <label>Password</label>
                <input
                    type = "text"
                    required
                    name='password'
                    onChange={handleInputChange}
                    value={formData.password}
                />
                <button className="create-account-button">Create Account</button>        
                </form>
            </div>
        </div>
      );
    }
    
export default Signup;