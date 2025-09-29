import React from "react";
import "./signup.css";
import { Mail } from "lucide-react";
import { Key } from "lucide-react";
import { Lock } from "lucide-react";
import { MoveRight } from "lucide-react";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="icon-wrapper">
          <span className="arrow-icon"><MoveRight /></span>
        </div>

        <h2 className="signup-title">Sign Up For Instructors</h2>

        <form className="signup-form">
          <div className="input-group">
            <span className="input-icon"><Mail /></span>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <span className="input-icon"><Key /></span>
            <input type="text" placeholder="Personal Token" required />
          </div>

          <div className="input-group">
            <span className="input-icon"><Lock /></span>
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
