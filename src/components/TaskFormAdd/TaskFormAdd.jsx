import React, { useState } from 'react';
import '../../bootstrap-5.3.3-dist/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './style.css';

function TaskFormAdd(props) {
    const {onClose , onAdd} = props;


    const [taskContent, setTaskContent] = useState('');
    const [taskPriority,setTaskPriority] = useState('');
    const [error, setError] = useState('');

    const handleAdd = (event) => {
        event.preventDefault();

        if(taskContent.trim().length < 5 || taskContent.trim().length > 100){
            setError(true);
            return;
        }

        let color = '';
        if (taskPriority === 'High'){
            color = 'text-danger';
        }
        else if (taskPriority === 'Medium'){
            color = 'text-warning';
        }
        else if (taskPriority === 'Low'){
            color = 'text-success';
        }

        onAdd({taskContent: taskContent, taskPriority: taskPriority, color: color, taskState: 'To Do',} );
        onClose();

    };


    // const handleChangePriority = (value) => {
    //     setTaskPriority(value);
    // };


    return (
        <div className="add-form">
            <header>
                <h3>Add Task</h3>
                <button className="close" onClick={onClose}>&times;</button>
            </header>
            <h5>Task</h5>
            <label>
                <input
                    type="text"
                    placeholder="Type your task here..."
                    onChange={(event) => setTaskContent(event.target.value)}
                />
                {error && <p className={"text-danger"}>Task must be at least 5 characters long and most 100 characters long.</p>}
            </label>
            <h5>Priority</h5>
            <div className="priority-buttons">
                <button
                    className={"btnH rounded border-danger" + (taskPriority === 'High' ? "selected" : "")}
                    onClick={() => setTaskPriority('High')}>High
                </button>
                <button
                    className={" btnM rounded border-warrior" + (taskPriority === 'Medium' ? "selected" : "")}
                    onClick={() => setTaskPriority('Medium')}>Medium
                </button>
                <button
                    className={"btnL rounded border-success" + (taskPriority === 'Low' ? "selected" : "")}
                    onClick={() => setTaskPriority('Low')}>Low
                </button>
            </div>
            <div className="add">
                <button className="add text-white bg-secondary rounded" onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
}

export default TaskFormAdd;