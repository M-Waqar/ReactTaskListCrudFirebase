import React, { useState } from "react";
import firebase from "../firebase";

const initial = {
  item: "",
  complete: false,
};

const Forms = () => {
  const [task, setTask] = useState(initial);

  const addTask = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref("TASK");
    dbRef.push(task);
    setTask(initial);
  };
  return (
    <div className="m-5 p-3">
      <form onSubmit={addTask}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label col-form-label-sm">
            Task
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={task.item}
              onChange={(e) => setTask({ ...task, item: e.target.value })}
              className="form-control form-control-sm"
              placeholder="Enter Task Here"
            />
          </div>
        </div>
        <button className="btn btn-primary btn-sm">Add Task</button>
      </form>
    </div>
  );
};

export default Forms;
