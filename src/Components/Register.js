import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <h1>
                CREATE AN ACCOUNT
            </h1>
            <div>
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" />
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" />
            </div>
            <div>
                <label htmlFor="email"> Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd" name="pwd" />
            </div>
            <div>
                <button>Register</button>
            </div>
            <div>
                <p>Already  have an account? <Link to={"/login"}>Login Here</Link></p>
            </div>
        </div>
    )
}

export default Register
