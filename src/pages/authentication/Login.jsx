import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.css";

const Login = () => {
    //Declare input, error, navigation, and login function variables
    const [inputs,setInputs] = useState({
        username:"",
        password:"",
    });
    const [err,setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    //Function adds the input typed to the correct variables
    const handleChange = (e) =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    //Function calls the login function to the context
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await login(inputs);
            navigate("/");
        }catch(err){
            setError(err.response.data);
        }
    };

    return (
        <div className="auth">
            <div className="form_bounce">
                <form>
                    <h1>Login</h1>
                    <input required type="text" 
                    placeholder="username"
                    name="username"
                    onChange={handleChange}/>
                    <input required type="password" 
                    placeholder="password"
                    name="password"
                    onChange={handleChange}/>
                    <button onClick={handleSubmit}>Login</button>
                    {err && <p>{err}</p>}
                    <span>Don't have an account? <Link to="/register" className="underline decoration-indigo-500 text-blue-800">Register</Link></span>
                </form>
            </div>
        </div>
    );
};

export default Login;