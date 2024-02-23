import React, { useContext } from "react";
import Logo from "../img/logo.png";
import {Link} from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "./Navbar.css";

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="nav_container">
                <div className="logo">
                    <Link to='/'><img src={Logo} alt="" /></Link>
                </div>
                <div className="links">
                    {currentUser ? (
                        <>
                            <button className="nav_btn"><Link className="mainLink" to={`/`}><h3>Home</h3></Link></button>
                            <Link className="mainLink" to="/"><button className="nav_btn" onClick={logout}><h3>Logout</h3></button></Link>
                            <button className="nav_btn"><Link className="mainLink" to='/recipes'><h3>Recipes</h3></Link></button>
                        </>
                    ) : (
                        <>
                            <button className="nav_btn"><Link className="mainLink" to={`/`}><h3>Home</h3></Link></button>
                            <button className="nav_btn"><Link className="mainLink" to={`/login`}><h3>Login</h3></Link></button>
                            <button className="nav_btn"><Link className="mainLink" to='/recipes'><h3>Recipes</h3></Link></button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;