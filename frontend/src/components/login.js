import React from 'react';
import './login.css'
const Login = () => {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-center vh-100" id="image">
        <div className="d-flex border border-5 p-4 bg-white">
          <form>
            <h2 className="text-center text-danger">Login Page</h2>
            <div className="mb-3 mx-1">
              <label htmlFor="Email">Email</label>
              <input type="email" placeholder="Enter Your Email" className="form-control" />
            </div>
            <div className="mb-3 mx-1">
              <label htmlFor="Password">Password</label>
              <input type="password" placeholder="Enter Your Password" className="form-control" />
            </div>
            <div className="mb-3">
              <input type="checkbox" className="mx-1" />
              <label>Remember Your Password</label>
            </div>
            <div className="d-grid">
              <button className="btn btn-success mx-1">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
