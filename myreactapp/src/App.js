import './App.css';
import { useState } from "react"; //to create a state
//CRUD

function App() {
  const [todoList, setTodoList] = useState([]); //Array with no initial value
  const [newTask, setNewtask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button className="glass-button" onClick={addTask} > Add Task </button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div className="task">
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}> X </button>
              </div>
          );
        })} 
      </div>
    </div>
  );
}
export default App;
