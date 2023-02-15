import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/Taskcontext";

export function Tasklist() {
  const {tasks}= useContext(TaskContext)
  if (tasks.length == 0) {
    return <h1>No hay tareas </h1>;
  } else {
    return (
      <div className="grid grid-cols-4 gap-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))}
      </div>
    );
  }
}
