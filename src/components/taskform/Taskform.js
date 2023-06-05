import React, { useEffect, useState } from 'react';
import './taskform.css'
import { RxCross2 } from 'react-icons/rx'
import Select from 'react-select';
const options = [
  { value: 'default', label: 'Default' },
  { value: 'urgent', label: 'Urgent' },
  { value: 'important', label: 'Important' }
];

const statusOptions = [
  { value: 'open', label: 'Open' },
  { value: 'working', label: 'Working' },
  { value: 'done', label: 'Done' },
  { value: 'overdue', label: 'Overdue' }
];


const TaskForm = ({ addTask, updateTask, currentTask, setCurrentTask, setShow }) => {

  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [tag, setTag] = useState('');
  const [status, setStatus] = useState('');
  // const [validateData, setValidateData] = useState({});
  const [showvalidation, setShowValidation] = useState(false);

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setDueDate(currentTask.dueDate);
      setTag(currentTask.tag);
      setStatus(currentTask.status);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      setShowValidation(true);
      return;
    }

    if (currentTask) {
      updateTask(currentTask.id, title, description, dueDate, tag, status);
      setCurrentTask(null);
      console.log(currentTask.id);
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
    setCurrentTask(null)
  };

  const handleTagChange = (selectedOption) => {
    setTag(selectedOption.value);
  };

  
  const handleStatusChange = (selectedOption) => {
    setStatus(selectedOption.value);
  };


  return (
    <div className="task-container">
      <form onSubmit={handleSubmit} className="task-wrapper">
        <div className="taskHeading">
          <span style={{ fontSize: "20px" }}>Add task</span>
          <RxCross2 style={{ cursor: 'pointer', fontSize: '20px' }} />
        </div>
        <div className="title">
          <label htmlFor="title">Title:</label>
          <input type="text" 
          className="form-control sub-title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />

          {showvalidation && title.length === 0 ? <p>empty</p> :''}
        </div>

        <div className="description">
          <label htmlFor="description">Description:</label>
          <textarea
            className=" form-control sub-description"
            id="description"
            placeholder="enter the descriptions here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
           {showvalidation && description.length === 0 ? <p>empty</p> :''}
        </div>

        <div className="duedate">
          <label htmlFor="dueDate" style={{width: '6rem'}}>Due Date:</label>
          <input
          className="form-control"
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>

        <div className="tag">
          <label htmlFor="tag">Tag:</label>
          <Select
            className="sub-tag"
            options={options}
            value={options.find((option) => option.value === tag)}
            onChange={handleTagChange}
          />
        </div>

        <div className="status">
          <label htmlFor="status">Status:</label>
          <Select
            className="sub-status"
            options={statusOptions}
            value={statusOptions.find((option) => option.value === status)}
            onChange={handleStatusChange}
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
