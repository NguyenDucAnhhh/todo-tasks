import React, { useState } from 'react';
import '../../bootstrap-5.3.3-dist/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import '../../fontawesome-free-6.5.2-web/fontawesome-free-6.5.2-web/css/all.min.css';
import './style.css';
import initialList from '../../data/data.json';
import TaskFormAdd from "../TaskFormAdd/TaskFormAdd";
import CircularProgress from "../TaskFormAdd/CircularProgress";

function TaskList(props) {
    const [tasks, setTasks] = useState(initialList);
    const handleAdd = (newTask) => {
        setTasks([...tasks,newTask]);
    };

    const[showAddForm, setShowAddForm] = useState(false);
    const handleCloseAddForm = () => {
        setShowAddForm(false);
    };

    const handleDelete = (key) => {
        const newTask = tasks.filter((_, index) => index !== key);
        setTasks(newTask);
    };

    // const [editTask, setEditTask] = useState(null);
    // const handleEdit = (index) => {
    //     const taskEdit = tasks[index];
    //     setEditTask(taskEdit);
    // }

    return (
        <div className="container">
            <header>
                <h1>Task List</h1>
                <button className="btn" onClick={() => setShowAddForm(true)}>
                    <i className="fa-solid fa-plus"></i> Add Task
                </button>
            </header>
            <div className="list">
                {tasks.map((task , index) => (
                    <div className="row bg-white mx-auto item mb-2 p-3 align-items-center" key={index}>
                        <div className="col">
                            <span>Task</span>
                            <p>{task.taskContent}</p>
                        </div>
                        <div className="col">
                            <span>Priority</span>
                            <p className={task.color}>{task.taskPriority}</p>
                        </div>
                        <div className="col">
                            <p className="taskState">{task.taskState}</p>
                        </div>
                        <div className="col">

                        </div>
                        <div className="col">
                            <i
                                className=" pen fa-regular fa-pen-to-square">
                                {/*onClick={() => }*/}
                            </i>
                            {/*<i className="fa fa-edit"></i>*/}
                            <i
                                className=" trash fa-regular fa-trash-can text-danger"
                                onClick={() => handleDelete(index)}
                                style={{cursor: 'pointer'}}
                            ></i>
                        </div>
                    </div>
                ))}
            </div>
            {showAddForm && (
                <TaskFormAdd
                    onClose={handleCloseAddForm}
                    onAdd={handleAdd}
                />
            )}
        </div>
    );
}

export default TaskList;