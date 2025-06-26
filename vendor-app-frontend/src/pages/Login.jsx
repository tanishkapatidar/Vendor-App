
import React from 'react'

const Login = () => {

    const handleLogin =() => {

        localStorage.setItem('user', JSON.stringify({name: 'Test User'}));
        window.location.href='./dashboard';

    };

    return (
        <div style={{ textAlign:'center', marginTop:'20%'}}>
            <h2>Login with Google</h2>
            <button onClick = {handleLogin}>Login</button>
        </div>
    );
};

export default Login;