import './App.css';
import React, {useState} from 'react';
import Button from './components/Button/index';
import Input from './components/Input/index';

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (newTask) => {
    setTask(newTask);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTaskList([...taskList, task]);
      setTask(""); 
    }
  };

  const handleDeleteTask = (deleteIndex) => {
    setTaskList(taskList.filter((value, index) => index !== deleteIndex));
  };

  return (
    <>
      <div>
        <Input value={task} onChange={handleChange} />
        <Button onClick={handleAddTask} />
        <ul>
          {taskList.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
