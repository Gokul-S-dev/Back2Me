import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Password: "",
    RePassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const { Name, Email, Phone, Password, RePassword } = formData;
    if (!Name.trim() || !Email.trim() || !Phone.trim() || !Password) {
      return "Please fill out all fields.";
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(Email.trim())) return "Enter a valid email address.";
    if (Password.length < 6) return "Password must be at least 6 characters.";
    if (Password !== RePassword) return "Passwords do not match.";
    const phoneRe = /^\+?\d{7,15}$/;
    if (!phoneRe.test(Phone.trim())) return "Enter a valid phone number.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: formData.Name.trim(),
        email: formData.Email.trim().toLowerCase(),
        phone: formData.Phone.trim(),
        password: formData.Password,
      };

      const res = await axios.post("/api/auth/signup", payload, {
        headers: { "Content-Type": "application/json" },
      });

      const data = res.data;
      if (data?.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/";
        return;
      }

      // If signup returns a message instead of token, show success message then redirect to login
      if (data?.message) {
        window.alert(data.message);
        window.location.href = "/login";
      } else {
        window.location.href = "/login";
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.response?.data ||
        err.message ||
        "Signup failed";
      setError(typeof msg === "string" ? msg : JSON.stringify(msg));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card" role="main" aria-labelledby="signup-heading">
        <h2 id="signup-heading">Create account</h2>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {error && <div className="login-error">{error}</div>}

          <label htmlFor="Name" className="sr-only">
            Name
          </label>
          <input
            id="Name"
            name="Name"
            type="text"
            placeholder="Full name"
            value={formData.Name}
            onChange={handleChange}
            required
            autoComplete="name"
          />

          <label htmlFor="Email" className="sr-only">
            Email
          </label>
          <input
            id="Email"
            name="Email"
            type="email"
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange}
            required
            autoComplete="email"
          />

          <label htmlFor="Phone" className="sr-only">
            Phone
          </label>
          <input
            id="Phone"
            name="Phone"
            type="tel"
            placeholder="+1234567890"
            value={formData.Phone}
            onChange={handleChange}
            required
            autoComplete="tel"
          />

          <label htmlFor="Password" className="sr-only">
            Password
          </label>
          <input
            id="Password"
            name="Password"
            type="password"
            placeholder="Password (min 6 chars)"
            value={formData.Password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />

          <label htmlFor="RePassword" className="sr-only">
            Confirm Password
          </label>
          <input
            id="RePassword"
            name="RePassword"
            type="password"
            placeholder="Confirm password"
            value={formData.RePassword}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <div className="login-foot">
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
