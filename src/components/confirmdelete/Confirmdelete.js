import React from 'react'
import './confirmdelete.css'
import {RiErrorWarningLine} from 'react-icons/ri'

const Confirmdelete = ({onDeleteConfirm, onDeleteCancelled}) => {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="confirm">
                    <RiErrorWarningLine style={{ color: 'red', fontSize: '30px' }} />
                    Confirm
                </div>
                <div className="textDelete">Want to remove the item?</div>
                <div className="buttons">
                    <button onClick={onDeleteCancelled} className="leaveButton" style={{opacity:'.7', borderRadius:'5px'}}>Leave</button>
                    <button onClick={onDeleteConfirm} className="removeButton">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Confirmdelete
