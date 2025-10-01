import React from "react";
import { GraduationCap, Users, LogIn } from "lucide-react";
import "./sign.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="login-selection-container">
      <div className="login-selection-content">
        {/* Student Login Card */}
        <div className="login-card student-card">
          <div className="login-icon">
            <GraduationCap size={50} />
          </div>
          <h2 className="login-title">Student Login</h2>
          <Link to="/Student/SignIn"><button className="login-button student-btn">
            <LogIn size={18} /> 
          </button>
          </Link>
        </div>

        {/* Instructor Login Card */}
        <div className="login-card instructor-card">
          <div className="login-icon">
            <Users size={50} />
          </div>
          <h2 className="login-title">Instructor Login</h2>
          <Link to="/Instructor/SignIn"><button className="login-button instructor-btn">
            <LogIn size={18} /> 
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
