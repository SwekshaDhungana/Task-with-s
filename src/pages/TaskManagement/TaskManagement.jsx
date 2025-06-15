import React, { useState, useEffect } from "react";
import Group from "./Group";
import "./TaskManager.css";

function TaskManagement() {
  const [groups, setGroups] = useState([]);
  const [db, setDb] = useState(JSON.parse(localStorage.getItem("db")));

  const users = db.users;

  const user = users.filter((user) => user.isLoggedin === true);

  const userId = user[0].userId;

  // Load data from localStorage
  useEffect(() => {
    let storedDb = JSON.parse(localStorage.getItem("db")) || {
      users: [],
      tasks: [],
    };
    const filterTasks = storedDb.tasks.filter((task) => task.userId === userId);
    const filterDb = { ...storedDb, tasks: filterTasks };

    setDb(filterDb);
    setGroups(filterDb.tasks || []);
  }, []);

  // Save database updates to localStorage,
  // useEffect(() => {
  //   const updatedDb = { ...originalDb, tasks: groups };
  //   setDb(updatedDb);
  //   localStorage.setItem("db", JSON.stringify(updatedDb));
  // }, [groups]);
  useEffect(() => {
    if (!userId) return;

    let updatedTasks = db.tasks.filter((task) => task.userId !== userId);
    updatedTasks = [...updatedTasks, ...groups]; // only modify current user's task

    const updatedDb = { ...db, tasks: updatedTasks };
    setDb(updatedDb);
    localStorage.setItem("db", JSON.stringify(updatedDb));
  }, [groups]);

  // Add a new group and store it in db.tasks
  const addGroup = () => {
    const name = prompt("Enter the section name:");
    if (name) {
      const newGroups = [...groups, { userId, name, tasks: [] }];
      setGroups(newGroups);
    }
  };

  // Add a task to a specific group and update database
  const addTask = (groupIndex, taskText) => {
    if (!taskText) return;

    const newGroups = [...groups];
    newGroups[groupIndex].tasks.push(taskText);
    setGroups(newGroups);
  };
  console.log("group", groups);
  return (
    <div>
      <div className="board">
        <button className="group-btn" onClick={addGroup}>
          Add Group
        </button>
        <div className="columns">
          {groups.map((group, index) => (
            <Group
              key={index}
              index={index}
              name={group.name}
              tasks={group.tasks}
              addTask={addTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskManagement;
