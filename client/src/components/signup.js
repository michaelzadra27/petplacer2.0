import "./signup.css";

import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { SIGN_UP } from "../utils/mutations"
import { useHistory } from "react-router-dom"

const Signup = () => {

    const [ formData , setFormData ] = useState({email: '', password: ''})
    const [addUser] = useMutation(SIGN_UP)
    const history = useHistory();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value})
    }

    const handleFormSubmit= async (event) => {
        event.preventDefault()
        console.log(formData)
        const newUser = await addUser({ variables: {...formData}})
        console.log(newUser)
        if (newUser){
            history.push('/')

        }
    }




    return (
        <div className="signupForm">
            <div className="card">
            <h2>Create an Account</h2>
                <form onSubmit={handleFormSubmit}>
                <label>Email</label>
                <input
                    type = "text"
                    name='email'
                    onChange={handleInputChange}
                    value={formData.email}
                />
                <label>Password</label>
                <input
                    type = "text"
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