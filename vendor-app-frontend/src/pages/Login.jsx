
import React from 'react'
import './Login.css';


const Login = () => {

    const handleLogin =() => {

        localStorage.setItem('user', JSON.stringify({name: 'Test User'}));
        window.location.href='./dashboard';

    };

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h2>Login with Google</h2>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>

    );
};

export default Login;