import React, { useState } from 'react';
import TaskForm from './components/taskform/Taskform';
import Task from './components/task/Task';
import './App.css'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc')
  const [sortCounter, setSortCounter] = useState(0)

  const addTask = (title, description, dueDate, tag, status) => {

    const newTask = {
      id: Date.now(),
      createdAt: new Date().toLocaleDateString(),
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

  const handleSort = () => {
    if (tasks.length > 0) {
      let sortTasks;
      let sortString;


      // else {
      sortString = sortOrder === 'asc' ? 'desc' : 'asc';
      sortTasks = [...tasks].sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.title.localeCompare(b.title)
        }
        else {
          return b.title.localeCompare(a.title);
        }
      }
      );
      setTasks(sortTasks);
      setSortOrder(sortString);
      // setSortCounter(sortCounter + 1);
      // }
    }
  }

  return (
    <>
      <section className="app">
        <header className="header">
          <h3 className="todo">TO-DO APP</h3>
        </header>
        <hr style={{ opacity: '.1' }} />
        <div className='searchAndAddTAsk'>
          <input className="inputSearch" type="text" onChange={(e) => setSearch(e.target.value)} placeholder='search task to view and edit' />
          <button onClick={taskAddButton} className="addTaskButton">Add Task</button>
        </div>
        <hr style={{ opacity: '.1' }} />
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
            <th style={{ display: 'flex', justifyContent: 'space-around', borderRight: '1px solid #0000005c' }} >
              <span>Created at</span>
              <span style={{ display: 'flex', flexDirection: 'column', height: '1.5rem' }}>
                <AiFillCaretUp />
                <AiFillCaretDown />
              </span>
            </th>
            <th onClick={handleSort} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-around', borderRight: '1px solid #0000005c' }}>
              <span>Title</span>
              <span style={{ display: 'flex', flexDirection: 'column', height: '1.5rem' }}>
                <AiFillCaretUp />
                <AiFillCaretDown />
              </span>
            </th>
            <th style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-around', borderRight: '1px solid #0000005c' }}>
              <span>Description</span>
              <span style={{ display: 'flex', flexDirection: 'column', height: '1.5rem' }}>
                <AiFillCaretUp />
                <AiFillCaretDown />
              </span>
            </th>
            <th style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-around', borderRight: '1px solid #0000005c' }}>
              <span>Due date</span>
              <span style={{ display: 'flex', flexDirection: 'column', height: '1.5rem' }}>
                <AiFillCaretUp />
                <AiFillCaretDown />
              </span>
            </th>
            <th>
              <label for="tag">Tag: </label>
              <select id="tag">
                <option value="">select Tag</option>
                <option value="Default">Default</option>
                <option value="Default">Urgent</option>
                <option value="Default">Important</option>
              </select>
            </th>
            <th>
              <label for="status">Status: </label>
              <select id="status">
                <option value="">select Tag</option>
                <option value="Default">Default</option>
                <option value="Default">Open</option>
                <option value="Default">Working</option>
                <option value="Default">Done</option>
                <option value="Default">Overdue</option>
              </select>
            </th>
            <th>Option</th>
          </tr>
        </thead>
      </table>
      <hr style={{ opacity: '.1' }} />
      {tasks.filter((task) => task.title.toLowerCase().includes(search)).map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          setShow={setShow}
        />
      ))}
    </>
  );
};

export default App;

