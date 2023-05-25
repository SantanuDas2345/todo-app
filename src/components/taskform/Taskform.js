import React, { useEffect, useState } from 'react';
import './taskform.css'
import { RxCross2 } from 'react-icons/rx'

const TaskForm = ({ addTask, updateTask, currentTask, setCurrentTask, setShow }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [tag, setTag] = useState('');
  const [status, setStatus] = useState('');

  // useEffect(() => {
  //   console.log('Current Task:', currentTask);

  //   if (currentTask) {
  //     setTitle(currentTask.title);
  //     setDescription(currentTask.description);
  //     setDueDate(currentTask.dueDate);
  //     setTag(currentTask.tag);
  //     setStatus(currentTask.status);
  //   } else {
  //     resetForm();
  //   }
  // }, [currentTask]);

  const validate = () => {
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentTask) {
      updateTask(currentTask.id, title, description, dueDate, tag, status);
      setCurrentTask(null);
    } else {
      addTask(title, description, dueDate, tag, status);
    }

    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
    setTag('');
    setStatus('');
    setShow(false);
  };

  console.log('Rendered with Title:', title);
  console.log('Rendered with Description:', description);
  console.log('Rendered with Due Date:', dueDate);
  console.log('Rendered with Tag:', tag);
  console.log('Rendered with Status:', status);

  return (
    <div className="task-container">
      <form onSubmit={handleSubmit} className="task-wrapper">
        <div className="taskHeading">
          <span style={{ fontSize: "20px" }}>Add task</span>
          <RxCross2 style={{ cursor: 'pointer', fontSize: '20px' }} />
        </div>

        <div className="title">
          <label htmlFor="title">Title:</label>
          <input
            className='sub-title'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="description">
          <label htmlFor="description">Description:</label>
          <textarea
            className="sub-description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="duedate">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>

        <div className="tag">
          <label htmlFor="tag">Tag:</label>
          <input
            className="sub-tag"
            type="text"
            id="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            required
          />
        </div>

        <div className="status">
          <label htmlFor="status">Status:</label>
          <input
            className="sub-status"
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="submitbutton">
            {currentTask ? 'Update' : 'Submit'}
          </button>
          <button type="button" className="cancelbutton" onClick={resetForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
