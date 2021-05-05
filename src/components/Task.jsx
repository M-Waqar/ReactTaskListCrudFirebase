import React from "react";
import firebase from "../firebase";

const Task = ({ task }) => {
  const handleComplete = () => {
    const dbRef = firebase.database().ref("TASK").child(task.id);
    dbRef.update({
      complete: !task.complete,
    });
  };

  const handleDelete = () => {
    const dbRef = firebase.database().ref("TASK").child(task.id);
    dbRef.remove();
  };
  return (
    <div
      className={
        task.complete
          ? "alert alert-success mb-2"
          : "alert alert-secondary mb-2"
      }
      role="alert"
    >
      {task.item}
      <span className="float-right">
        <button onClick={handleComplete} className="btn btn-sm btn-light mr-2">
          Complete
        </button>
        <button onClick={handleDelete} className="btn btn-sm btn-light mr-2">
          Delete
        </button>
      </span>
    </div>
  );
};

export default Task;
