import React from 'react';
import './signup.css';
const Signup = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card glass-card"> {/* Add 'glass-card' class */}
            <div className="card-body p-4">
              <h2 className="card-title mb-4">Create a New Account</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <hr />
                <p className="text-center">Already have an account? <a href="/login">Log In</a></p>
              </form>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body text-center">
              <p>Library © {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
