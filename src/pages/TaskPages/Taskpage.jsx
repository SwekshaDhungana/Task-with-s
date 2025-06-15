import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Taskpage.css";
const TaskPage = () => {
  const db = JSON.parse(localStorage.getItem("db")) || {
    users: [],
    tasks: [],
  };
  const { section } = useParams();
  const users = db.users;
  const tasks = db.tasks;
  const user = users.filter((user) => user.isLoggedin === true);
  const userId = user[0].userId;
  const filterTasks = tasks.filter((task) => task.userId === userId);
  const subFilterTask = filterTasks.filter(
    (filterTask) => filterTask.name === section
  );
  console.log("subfiltertask", subFilterTask);
  const subTask = subFilterTask[0].tasks;
  console.log("subtask", subTask);
  if (!subTask)
    return (
      <div className="task-page">
        <h2 className="task-name">Section Not Found</h2>
      </div>
    );

  return (
    <div className="task-page">
      <div className="page-container">
        <h2 className="task-name">{subTask.name} Tasks</h2>
        <div className="task-div">
          <ul className="tasks-ul">
            {subTask.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
