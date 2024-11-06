import React from "react";
import "./task.css";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <>
      <div className="tasks-box">
        <div className="task-head">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="task-checkbox"
          />
          <h2 className="task-text">{task.text}</h2>
        </div>

        <div className="task-details">
          <span className="task-description">{task.description}</span>
        </div>

        <div className="date-and-dlt">
          <span>Date: {task.date}</span>
          <span onClick={() => onDelete(task.id)} className="dlt-btn">
            Delete
          </span>
        </div>
      </div>
    </>
  );
};

export default Task;
