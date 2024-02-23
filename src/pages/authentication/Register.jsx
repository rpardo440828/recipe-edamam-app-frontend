import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Register = () => {
    // Set the useStates for the inputs and error, also declare a navigation variable to traverse the website pages
    const [inputs,setInputs] = useState({
        username:"",
        email:"",
        password:"",
    });
    const [err,setError] = useState(null);
    const navigate = useNavigate();

    //Function to handle the inputs as it is changed before submission
    const handleChange = (e) =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    //Handles the button click by ending the inputs to the backend
    //async is because we are making a call to the backend
    const handleSubmit = async e =>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:8801/api/auth/register", inputs);
            navigate("/login");
        }catch(err){
            setError(err.response.data);
        }
    }

    return (
        <div className="auth">
            <div className="form_bounce">
                <form>
                    <h1>Register</h1>
                    <input required type="text" 
                    placeholder="username"
                    name="username"
                    onChange={handleChange}/>
                    <input required type="text" 
                    placeholder="email"
                    name="email"
                    onChange={handleChange}/>
                    <input required type="password" 
                    placeholder="password"
                    name="password"
                    onChange={handleChange}/>
                    <button onClick={handleSubmit}>Register</button>
                    {err && <p>{err}</p>}
                    <span>Have an account already? <Link to="/login" className='underline decoration-indigo-500 text-blue-800'>Login</Link></span>
                </form>
            </div>
        </div>
    );
};

export default Register;