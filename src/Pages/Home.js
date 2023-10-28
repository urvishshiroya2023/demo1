import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const userName = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate("/login");
    }

    return (
        <div>
            <div>
                Welcome - {userName.firstName + " " + userName.lastName}
            </div>
            <div>
                <button type="button" onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    )
}

export default Home;
