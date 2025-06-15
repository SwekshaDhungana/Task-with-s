import React, { useState, useEffect } from "react";

import TaskManagement from "../../pages/TaskManagement/TaskManagement";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Assuming you have a CSS file for styling

function Sidebar() {
  // const [db, setDb] = useState(JSON.parse(localStorage.getItem("db"))); k jo tyo vanya, um

  const db = JSON.parse(localStorage.getItem("db"));
  const users = db.users;
  const tasks = db.tasks;

  const filterUser = users.filter((user) => user.isLoggedin === true);

  const userId = filterUser[0].userId;
  const filterTasks = tasks.filter((task) => task.userId === userId);

  return (
    <div className="sidebar">
      {/* <button className="side-task-btn">
        <Link to="/taskmanager">Task Manager</Link>
      </button>  */}
      <ul className="sidebar-list">
        {filterTasks.map((task) => {
          return (
            <li>
              <Link to={`/${task.name}`}>{task.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
