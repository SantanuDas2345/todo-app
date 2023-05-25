import React,{useState} from 'react';
import './task.css';
import Confirmdelete from '../confirmdelete/Confirmdelete';
import { BiTrashAlt } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'

const Task = ({ task, deleteTask, editTask, setShow }) => {

  const [click, setClick] = useState(false);

  const handleDelete = () => {
    // deleteTask(task.id);
    setClick(true);
  };

  const handleEdit = () => {
    editTask(task);
    setShow(true)
  };

  const onDeleteConfirm = () => {
    deleteTask(task.id);
  }

  const onDeleteCancelled = () => {
    setClick(false);
  }

  return (
    <>
    <tr className="itemslist">
      <td>{task.createdAt}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.dueDate}</td>
      <td>{task.tag}</td>
      <td>{task.status}</td>
      <td className="buttons">
        <button onClick={handleEdit} style={{height:'30px', border:'none'}}><AiOutlineEdit /></button>
        <button onClick={handleDelete} style={{height:'30px', border:'none'}}><BiTrashAlt /></button>
      </td>
    </tr>
    {
      click && <Confirmdelete onDeleteConfirm={onDeleteConfirm} onDeleteCancelled={onDeleteCancelled}/>
    }
    </>
  );
};

export default Task;
