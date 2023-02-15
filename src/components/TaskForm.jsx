import { useState,useContext } from "react";
import { TaskContext } from "../context/Taskcontext";

export function TaskForm() {
  const {createTask}= useContext(TaskContext)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handledSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-gray-600 p-10 mb-4 rounded" onSubmit={handledSubmit}>
        <input
          className="w-full bg-slate-300 mb-3 rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          autoFocus
          placeholder="Escribe el titulo de la tarea"
        />
        <textarea
          className="w-full bg-slate-300 mb-3 rounded"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Escribe la descripcion"
        />
        <button className="bg-green-300 rounded p-4" type="submit">Guardar</button>
      </form>
    </div>
  );
}
