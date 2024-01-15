
import {Modal} from "react-responsive-modal";
import {deleteTask} from "../utils";


function ModalDelete({
                         isModalDeleteOpen,
                         setIsModalDeleteOpen,
                         modalDeleteTaskId,
                         reloadTasks
}) {
    const submitTaskDelete = () => {
        setIsModalDeleteOpen(false);
        deleteTask(modalDeleteTaskId).then(() => {
            reloadTasks();
        });
    };

    return (
        <Modal open={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)} center>
            <div className="modal-content">
                <h2 className="modal-header">Delete Task</h2>

                <p className="modal-question">Are you sure you want to delete this task?</p>

                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalDeleteOpen(false)}
                    >Cancel</button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitTaskDelete}
                    >Yes</button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalDelete;
