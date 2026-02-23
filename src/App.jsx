import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  }, [tasks]);

  function addTask(name) {
    setTasks((prev) => [
      ...prev, { name: name, done: false }
    ]);
  }

  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task key={index} {...task} />
      ))}
    </main>
  );
}

export default App;