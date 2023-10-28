import React from 'react';
import { useNavigate } from 'react-router-dom';

const Info = () => {
    const userData = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate("/login");
    }

    return (
        <div>
            <div>
                Welcome - {userData.firstName + " " + userData.lastName}
                {/* {console.log(userName)} */}
            </div>
            <div>
                <div>
                    <h1>Personal Data:</h1>
                    <p>
                        FirstName : {userData.firstName}
                    </p>
                    <p>
                        LastName : {userData.lastName}
                    </p>
                </div>
                <button type="button" onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    )
}

export default Info;
