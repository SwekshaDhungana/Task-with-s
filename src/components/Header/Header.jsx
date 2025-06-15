import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import bar from "../../images/hamburger.png";

import "./Header.css"; // Assuming you have a CSS file for styling
function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  let isLoggedIn = false;

  let db = JSON.parse(localStorage.getItem("db")) || { users: [], tasks: [] }; //
  let tasks = db.tasks;
  let users = db.users || [];

  if (users.length > 0) {
    isLoggedIn = users.some((user) => user.isLoggedin);
  }

  function handleLogout() {
    console.log(JSON.parse(localStorage.getItem("db")));
    let db1 = JSON.parse(localStorage.getItem("db"));
    const updatedUsers = users.map((user) => {
      return { ...user, isLoggedin: false };
    });

    db1.users = updatedUsers;
    // db1.tasks = tasks;

    localStorage.setItem("db", JSON.stringify(db1));
    isLoggedIn = false;
  }

  function SidebarClose() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active-sidebar");
  }
  return (
    <>
      <header>
        <div className="bar" onClick={SidebarClose}>
          <img className="bar-icon" src={bar} alt="bar" />
        </div>
        <Link className={currentPath === "/" ? "active-dashboard" : ""} to="/">
          {" "}
          {/* <h1>My Dashboard</h1> */}
          <img width={70} src={logo} alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <button className="head-task-btn">
                <Link className="task-link" to="/taskmanager">
                  Task Manager
                </Link>
              </button>
            </li>
            <li>
              <Link
                className={currentPath === "/about" ? "active-link" : ""}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={currentPath === "/sales" ? "active-link" : ""}
                to="/sales"
              >
                Sales
              </Link>
            </li>
            <li>
              <Link
                className={currentPath === "/profile" ? "active-link" : ""}
                to="/profile"
              >
                Profile
              </Link>
            </li>

            {isLoggedIn ? (
              <li>
                <Link to="/login" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
