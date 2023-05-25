import React, { useState } from 'react';
import TaskForm from './components/taskform/Taskform';
import Task from './components/task/Task';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [show, setShow] = useState(false)

  const addTask = (title, description, dueDate, tag, status) => {

    const newTask = {
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
      title,
      description,
      dueDate,
      tag,
      status,
    };
    setTasks([...tasks, newTask]);
  };

  const taskAddButton = () => {
    setShow(!show);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  const updateTask = (taskId, title, description, dueDate, tag, status) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
            ...task,
            title,
            description,
            dueDate,
            tag,
            status,
          }
          : task
      )
    );
  };

  return (
    <>
    <section className="app">
      <header className="header">
        <h3 className="todo">TO-DO APP</h3>
      </header>
      <hr/>
      <div className='searchAndAddTAsk'>
        <input className="inputSearch" type="text" placeholder='search task to view and edit'/>
        <button onClick={taskAddButton} className="addTaskButton">Add Task</button>
      </div>
      <hr/>
      </section>
      {
        show && <TaskForm
          addTask={addTask}
          updateTask={updateTask}
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          setShow={setShow}
        />
      }
      <table>
        <thead>
          <tr>
            <th>Created at</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Tag</th>
            <th>Status</th>
            <th>Option</th>
          </tr>
        </thead>
      </table>
      <tbody>
          <div style={{paddingTop:'20px'}}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
              setShow={setShow}
            />
          ))}
          </div>
        </tbody>
    </>
  );
};

export default App;

