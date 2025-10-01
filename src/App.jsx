import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Landing from "./components/landing"
import Stusignin from "./components/stusignin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Landing />} />
        <Route path="/Instructor/SignUp" element={<Signup />} />
        <Route path="/Instructor/SignIn" element={<Signin />} />
        <Route path="/Student/SignIn" element={<Stusignin />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
