import React from "react";
import "./sign.css";
import { Mail, Lock, MoveRight } from "lucide-react";

const Stusignin = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="icon-wrapper">
          <span className="arrow-icon"><MoveRight /></span>
        </div>

        <h2 className="signup-title">Sign In for Students</h2>

        <form className="signup-form">
          <div className="input-group">
            <span className="input-icon"><Mail /></span>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <span className="input-icon"><Lock /></span>
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="submit-btn">
            Sign In
          </button>

          <div className="signin-btn-wrapper">
            Don’t have an account? Sign Up

          </div>
        </form>
      </div>
    </div>
  );
};

export default Stusignin;