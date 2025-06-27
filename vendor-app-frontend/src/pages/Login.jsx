import React from 'react';
import './Login.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Login = () => {

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log('Google User:', decoded);

    localStorage.setItem('user', JSON.stringify({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture
    }));

    window.location.href = '/dashboard';
  };

  const handleLoginError = () => {
    alert('Google Login Failed');
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login with Google</h2>

        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </div>
    </div>
  );
};

export default Login;
