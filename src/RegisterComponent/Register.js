import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import src from "C:/Users/JAGADEESH/OneDrive/Desktop/tasks/GetMeTherapy/analogclock/src/images/google.png"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [formError, setFormError] = useState("");
  const [agreeChecked, setAgreeChecked] = useState(false); // State to track checkbox state
  const navigate = useNavigate();
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleCheckboxChange = (e) => {
    setAgreeChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character"
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!userName) {
      setUserNameError("User Name is required");
      isValid = false;
    }else if (userName.length < 5) {
           
        setUserNameError("User Name must be at least 5 characters long");
        isValid = false;
    
    } else {
      setUserNameError("");
    }

    if (!agreeChecked) {
      setFormError("Please agree to the Terms of Service and Privacy Policy");
      isValid = false;
    } else {
      setFormError("");
    }

    if (isValid) {
      console.log("Form submitted successfully", {
        email,
        password,
        userName,
      });
      navigate("/login");
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <div className="Reg-container">
      <div className="Reg-form">
        <h4>Create your new account</h4>
        <p className="p-heading">
          Create an account to start looking for the food you like
        </p>
        <form onSubmit={handleSubmit} action="./login.js">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="error-message">{emailError}</p>
            )}
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {userNameError && (
              <p className="error-message">{userNameError}</p>
            )}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="error-message">{passwordError}</p>
            )}
          </div>
          <div className="agree">
            <input
            className="check"
              type="checkbox"
              checked={agreeChecked}
              onChange={handleCheckboxChange}
            />
            <span className="agree-text">
            I Agree with <span style={{ color: "#fe8c00" }}>Terms of Service</span> and{" "}
              <span style={{ color: "#fe8c00" }}>Privacy Policy</span>
            </span>
          </div>
          <button type="submit" className="sign-in-btn">
          Register
          </button>
          {formError && (
            <p className="form-error-message">{formError}</p>
          )}
          <div className="or-sign-in">
            <div className="line1"></div>
            <span>Or sign in with</span>
            <div className="line2"></div>
            <Link to={"/success"} className="google-sign-in">
              <img
                src={src}
                alt="Google Sign-In"
              />
            </Link>
          </div>
        </form>
        <p className="register-link">
        Have an account?{" "}
          <Link to={"/login"}>Sign In</Link>
        </p>
      </div>
      <div className='end-line-reg'></div>
    </div>
  );
};

export default Register;
