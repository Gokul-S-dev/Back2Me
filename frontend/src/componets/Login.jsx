import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.email || !formData.password) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      const data = res.data;
      if (data?.token) localStorage.setItem("token", data.token);
      window.location.href = "/";
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.response?.data ||
        err.message ||
        "Login failed";
      setError(typeof msg === "string" ? msg : JSON.stringify(msg));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card" role="main" aria-labelledby="login-heading">
        <h2 id="login-heading">Sign in</h2>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {error && <div className="login-error">{error}</div>}

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <div className="login-foot">
          Don't have an account? <Link to={"/signup"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
