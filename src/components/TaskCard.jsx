import { useContext } from 'react';
import { TaskContext } from '../context/Taskcontext'


export function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext);

  return (
    <div className='bg-gray-600 p-4 rounded text-white' >
      <h1 className='text-xl font-bold mb-2'>{task.title}</h1>
      <p className='mb-2'>{task.description}</p>
      <button className='bg-red-300 p-1 rounded hover:bg-red-500' onClick={() => deleteTask(task.id)}>❌Eliminar</button>
    </div>
  );
}
