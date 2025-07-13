import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong. Please try again.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      padding: '20px',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '1.2rem',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        padding: '2.5rem 2.5rem 2rem 2.5rem',
        maxWidth: '400px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Logo or Icon */}
        <div style={{ marginBottom: '1.5rem' }}>
          <img src="/logo192.png" alt="Logo" style={{ width: 60, height: 60, borderRadius: '50%' }} />
        </div>
        <h2 style={{ color: '#0077b6', marginBottom: '1.5rem', fontWeight: 700 }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: '1.2rem' }}>
            <label htmlFor="email" style={{ fontWeight: 500, marginBottom: 6, display: 'block', color: '#333' }}>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              required
              style={{
                width: '100%',
                padding: '0.7rem',
                borderRadius: '0.5rem',
                border: '1px solid #bdbdbd',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.2s',
                marginTop: 4,
              }}
              onFocus={e => e.target.style.border = '1.5px solid #0077b6'}
              onBlur={e => e.target.style.border = '1px solid #bdbdbd'}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="password" style={{ fontWeight: 500, marginBottom: 6, display: 'block', color: '#333' }}>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
              style={{
                width: '100%',
                padding: '0.7rem',
                borderRadius: '0.5rem',
                border: '1px solid #bdbdbd',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.2s',
                marginTop: 4,
              }}
              onFocus={e => e.target.style.border = '1.5px solid #0077b6'}
              onBlur={e => e.target.style.border = '1px solid #bdbdbd'}
            />
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '0.8rem',
            background: 'linear-gradient(90deg, #0077b6 0%, #00b4d8 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 600,
            fontSize: '1.1rem',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px 0 rgba(0, 119, 182, 0.08)',
            marginBottom: '1rem',
            transition: 'background 0.2s',
          }}>
            Login
          </button>
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <span style={{ color: '#666', fontSize: '0.97rem' }}>
              Don't have an account? <Link to="/signup" style={{ color: '#0077b6', textDecoration: 'underline', fontWeight: 500 }}>Signup</Link>
            </span>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;