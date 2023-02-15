import { createContext } from "react";
import { tasks as data } from "../Task";
import { useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskcontextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(title, description) {
    const newTask = {
      id: tasks.length,
      title,
      description,
    };
    setTasks([...tasks, newTask]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
