import React, { useState } from "react";
import Task from "../components/task";
import "./tasklist.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const addTask = () => {
    if (input.trim() && date) {
      const newTask = {
        id: Date.now(),
        text: input,
        description: description,
        date: new Date(date).toLocaleDateString(),
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setInput("");
      setDescription("");
      setDate("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div>
        <div className="inputs">
          <div className="input-group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
              className="input-task"
            />
          </div>

          <div className="input-group">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description..."
              className="description-task"
            />
          </div>

          <div className="input-group">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="date-picker"
            />
          </div>
          <button className="add-btn" onClick={addTask}>
            ADD TASK
          </button>
        </div>

        <div className="line"></div>
        
        <div className="task-list">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTaskCompletion}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
