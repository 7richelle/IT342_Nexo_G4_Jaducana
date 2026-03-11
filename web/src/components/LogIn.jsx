import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/SignUpPage.css";
import NexoLogo from "../assets/NEXO.png";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ get values passed from signup
  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState(location.state?.password || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    // temporary login logic
    console.log("Email:", email);
    console.log("Password:", password);

    // redirect to dashboard
    navigate("/userDashboard");
  };

  // 🔹 Redirect user to backend Google OAuth endpoint
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="signup-layout">

      {/* LEFT SIDE */}
      <div className="left-side">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>
            Ready for <br />
            Your Next <br />
            Experience?
          </h1>
          <p>
            Log in and stay connected to the events you love.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-side">
        <div className="form-wrapper">

          <div className="logo">
            <img src={NexoLogo} alt="Nexo Logo" />
          </div>

          <h2>Welcome Back</h2>
          <p className="subtitle">
            Sign in to access your tickets and saved events.
          </p>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Log In</button>
          </form>

          {/* 🔹 Google Login Button */}
          <div style={{ margin: "20px 0" }}>
            <button
              type="button"
              onClick={handleGoogleLogin}
              style={{
                backgroundColor: "#4285F4",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Sign in with Google
            </button>
          </div>

          <p className="login-text">
            Don’t have an account? <Link to="/">Join the Nexus</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LogIn;