import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Icon */}
        <div className="icon-wrapper">
          <span className="arrow-icon">➜</span>
        </div>

        {/* Heading */}
        <h2 className="signup-title">Sign up for instructors</h2>

        {/* Form */}
        <form className="signup-form">
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <span className="input-icon">🔑</span>
            <input type="text" placeholder="Personal Token" required />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="submit-btn">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
