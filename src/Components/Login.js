import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" id="pwd" name="pwd" />
                </div>
                <div>
                    <button>Login</button>
                </div>
                <div>
                    <p>Don't have an account? <Link to={"/register"}>Register Here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;
