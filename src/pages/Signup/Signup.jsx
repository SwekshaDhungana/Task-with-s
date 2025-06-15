import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
function Signup() {
  const navigate = useNavigate();
  function handleSignUp(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    let db = JSON.parse(localStorage.getItem("db")) || { users: [], tasks: [] };
    console.log("db", db);

    const userExists = db.users.find((user) => user.email === email);
    if (userExists) {
      alert("This email is already registered. Please log in! ");
      return;
    } //
    const userId = Math.floor(Math.random() * 10000);
    db.users.push({ userId, username, email, password, isLoggedin: false });
    localStorage.setItem("db", JSON.stringify(db));
    alert("Signup Successful. You can now login");
    navigate("/login");
  }

  return (
    <form className="signup-form" onSubmit={handleSignUp}>
      <h1>Signup</h1>
      <div className="forms-group aa">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div className="forms-group bb">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="forms-group cc">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>

      <button type="submit">Sign Up</button>
      <p className="login-link">
        Already have an account?{" "}
        <Link className="login-btn" to="/login">
          Login
        </Link>
      </p>
    </form>
  );
}

export default Signup;
