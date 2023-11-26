import React, { useState } from "react";
import axios from "axios";
import "./authController.css";
import { useNavigate } from "react-router-dom";

const AuthController = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://rahatikbackend.onrender.com/login", {
        username: username,
        password: password,
      });
      if (response.data && response.data.response && response.data.response.token) {
        navigate("/table");
      } else {
        console.log("Invalid response from the server");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Formun varsayılan davranışını engelle
    handleLogin(); // Login işlemini gerçekleştir
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="auth-label">Username:</label>
          <input
            type="text"
            className="auth-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="login-button" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AuthController;
