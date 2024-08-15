import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <div className="login-box">
        <h2 className="text-center">Log In to your account</h2>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username or email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <div className="register-link">
          <Link to="/register">No account? Register now!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
