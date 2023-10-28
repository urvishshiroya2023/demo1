import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        console.log(loggedUser);
        if (input.email === loggedUser.email && input.password === loggedUser.password) {
            localStorage.setItem("loggedin", true);
            navigate("/");
        } else {
            alert("Wrong Email Or Password")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        {/* <input type="email" id="email" name="email" /> */}
                        <input type="email" id="email" value={input.email} name="email" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="pwd">Password:</label>
                        {/* <input type="password" id="pwd" name="pwd" /> */}
                        <input type="password" id="pwd" value={input.password} name="password" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    <div>
                        <p>Don't have an account? <Link to={"/register"}>Register Here</Link></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
