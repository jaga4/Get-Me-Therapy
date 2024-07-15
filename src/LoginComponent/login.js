import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (email === "") {
      isValid = false;
      setEmailError("Please enter your email address");
    }
    if (password === "") {
      isValid = false;
      setPasswordError("Please enter your password");
    }

    if (email !== "" && password !== "") {
      const formData = {
        email: email,
        password: password
      };
      console.log(formData);
    }
    if(isValid){
      navigate("/success");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h4>Login to your account.</h4>
        <p className="p-heading">Please sign in to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
          
            />
            {emailError && (<p className="error-message">{emailError}</p>)}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              
            />
            {passwordError && (<p className="error-message">{passwordError}</p>)}
            <span className="forgot-password">Forgot password?</span>
          </div>
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
          <div className="or-sign-in">
            <div className="line1"></div>
            <span>Or sign in with</span>
            <div className="line2"></div>
            <Link to={"/success"} className="google-sign-in">
              <img src="google.png" alt="google" />
            </Link>
          </div>
        </form>
        <p className="register-link">
          Don't have an account? <Link to={"/register"}>Register</Link>
        </p>
      </div>
      <div className='end-line-forms'></div>
    </div>
  );
};

export default Login;
