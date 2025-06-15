import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css"; // Assuming you have a CSS file for styling

function Login() {
  const navigate = useNavigate();
  function handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // const localUserData = JSON.parse(localStorage.getItem("userData"));

    // if (localUserData.email !== email || localUserData.password !== password) {
    //   alert("Invalid email or password. Please try again.");
    //   return;
    // }
    // if (localUserData.email === email && localUserData.password === password) {
    //   // Simulate a successful login
    //   navigate("/");
    // }
    let db = JSON.parse(localStorage.getItem("db")) || { users: [], tasks: [] };
    const userExists = db.users.find(
      (user) => user.email === email && user.password === password
    );
    if (userExists) {
      userExists.isLoggedin = true;
      localStorage.setItem("db", JSON.stringify(db));
      alert("Login Successful!");
      navigate("/");
    }
    if (!userExists) {
      alert("Invalid username or password. Try again");
    }
  }
  return (
    <>
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>

        <div className="form-group aa">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group bb">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit">Log In</button>
        <p className="signup-link">
          Don't have an account?{" "}
          <Link className="signup-btn" to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </>
  );
}

export default Login;
