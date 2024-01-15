
import {createTask} from "../utils";


function AddTaskForm({
                        newTask,
                        setNewTask,
                        projectId,
                        reloadTasks
}) {
    const clearTaskCreate = () => {
        setNewTask({title: '', description: ''});
    };
    const submitTaskCreate = () => {
        createTask(newTask, projectId).then(() => {
            setNewTask({title: '', description: ''});
            reloadTasks();
        });
    };

    return (
        <>
            <h2 className="add-task-header">Add Task</h2>

            <h3 className="add-task-header">Title</h3>
            <input type="text"
                   className="add-task-input"
                   onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                   value={newTask.title} />
            <h3 className="add-task-input-header">Description</h3>
            <textarea className="add-task-textarea"
                      onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                      value={newTask.description || ''} />

            <div className="add-task-actions">
                <button className="add-task-btn add-task-btn-cancel"
                        onClick={clearTaskCreate}>Clear
                </button>
                <button className="add-task-btn add-task-btn-submit"
                        onClick={submitTaskCreate}>Add</button>
            </div>
        </>
    );
}

export default AddTaskForm;
