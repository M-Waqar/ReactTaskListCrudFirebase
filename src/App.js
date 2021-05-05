import React from "react";
import Forms from "./components/Forms";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <div className="shadow m-5">
        <div className="text-center p-3">
          <h1>Task List Crud Operation</h1>
        </div>
        <Forms />

        <TaskList />
      </div>
    </div>
  );
}

export default App;
