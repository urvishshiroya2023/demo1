import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    // store data in local storage
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        // <Link to={"/login"}></Link>
        navigate("/login");
    }

    return (
        <div>
            <h1>
                CREATE AN ACCOUNT
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fname">First name:</label>
                    <input type="text" id="fname" name="firstName" value={input.firstName} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                    <label htmlFor="lname">Last name:</label>
                    <input type="text" id="lname" name="lastName" value={input.lastName} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="email"> Email:</label>
                    <input type="email" id="email" value={input.email} name="email" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" id="pwd" value={input.password} name="password" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
            <div>
                <p>Already  have an account? <Link to={"/login"}>Login Here</Link></p>
            </div>
        </div>
    )
}

export default Register
