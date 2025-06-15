function Group({ name, tasks, addTask, index }) {
  const handleAddTask = () => {
    const task = prompt("Enter Task:");
    if (task) {
      addTask(index, task);
    }
  };

  return (
    <div className="column">
      <h3>{name}</h3>
      <button className="task-btn" onClick={handleAddTask}>
        ADD TASK
      </button>
      {tasks.map((task, i) => (
        <div className="task" key={i}>
          {task}
        </div>
      ))}
    </div>
  );
}

export default Group;
