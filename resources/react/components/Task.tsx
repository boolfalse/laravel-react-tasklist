
function Task({
                  task,
                  setIsModalEditOpen,
                  setModalEditTask,
                  setIsModalDeleteOpen,
                  setModalDeleteTaskId
}) {
    const handleEdit = () => {
        setModalEditTask(task);
        setIsModalEditOpen(true);
    };

    const handleDelete = () => {
        setModalDeleteTaskId(task.id);
        setIsModalDeleteOpen(true);
    };

    return (
        <div className="task-item-content">
            <span className="task-project">
                <span className="task-project-name">{task.project.name}</span>
                <span className="task-time">Created {task.created}</span>
            </span>
            <span className="task-title">{task.title}</span>
            <div className="task-actions">
                <button className="task-edit-btn" onClick={handleEdit}>Edit</button>
                <button className="task-delete-btn" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Task;
