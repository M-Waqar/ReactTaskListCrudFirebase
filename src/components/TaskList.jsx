import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    const dbRef = firebase.database().ref("TASK");
    dbRef.on("value", (screenshot) => {
      const tasks = screenshot.val();
      const tasklist = [];
      for (let id in tasks) {
        tasklist.push({ id, ...tasks[id] });
      }
      setTaskList(tasklist);
    });
  }, []);

  return (
    <div className="m-5 p-3">
      {taskList && taskList.map((task) => <Task key={uuidv4()} task={task} />)}
    </div>
  );
};

export default TaskList;
