
import {Modal} from "react-responsive-modal";
import React from "react";
import {editTask} from "../utils";


function ModalEdit({
                       isModalEditOpen,
                       setIsModalEditOpen,
                       modalEditTask,
                       setModalEditTask,
                       reloadTasks
}) {
    const submitTaskEdit = () => {
        setIsModalEditOpen(false);
        editTask(modalEditTask).then(() => {
            reloadTasks();
        });
    };

    return (
        <Modal open={isModalEditOpen} onClose={() => setIsModalEditOpen(false)} center>
            <div className="modal-content">
                <h2 className="modal-header">Edit Task</h2>

                <h3 className="modal-input-header">Title</h3>
                <input type="text" value={modalEditTask.title}
                       className="modal-input"
                       onChange={(e) => setModalEditTask({...modalEditTask, title: e.target.value})}/>
                <h3 className="modal-input-header">Description</h3>
                <textarea className="modal-textarea"
                          onChange={(e) => setModalEditTask({...modalEditTask, description: e.target.value})}
                          value={modalEditTask.description || ''} />

                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalEditOpen(false)}
                    >Close
                    </button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitTaskEdit}
                    >Save</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalEdit;
