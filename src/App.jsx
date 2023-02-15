import "./App.css";
import { Tasklist } from "./components/Tasklist";
import { TaskForm } from "./components/TaskForm";



function App() {
  
  return (<div className="container mx-auto p-10">
    <TaskForm  />
    <Tasklist  />
  </div>);
}

export default App;
