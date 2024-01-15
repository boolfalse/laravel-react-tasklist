
import axiosConfig from './axiosConfig';
import { toast } from 'react-toastify';



export const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error)
}

export const getTasks = async (projectId) => {
    if (!projectId) {
        toast.error("Project is required!");
        return;
    }

    try {
        const response = await axiosConfig.get(`/tasks?project_id=${projectId}`);
        const { success, tasks, message } = response.data;

        if (success) {
            return tasks;
        } else {
            toast.error(message);
            return [];
        }
    } catch (err) {
        toast.error(getErrorMessage(err));
        return [];
    }
}

export const reorderTasks = async (projectId, start, end) => {
    try {
        const response = await axiosConfig.put('/tasks', {
            project_id: projectId,
            start,
            end,
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const editTask = async (task) => {
    if (!task.id) return;
    if (!task.title) {
        toast.error("Title is required!");
        return;
    }

    try {
        const response = await axiosConfig.put(`/tasks/${task.id}`, {
            title: task.title,
            description: task.description,
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const deleteTask = async (id) => {
    if (!id) {
        toast.error("Invalid task!");
        return;
    }

    try {
        const response = await axiosConfig.delete(`/tasks/${id}`);
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}

export const createTask = async (task, projectId) => {
    if (!projectId) {
        toast.error("Project is required!");
        return;
    }
    if (!task.title) {
        toast.error("Title is required!");
        return;
    }

    try {
        const response = await axiosConfig.post(`/tasks?project_id=${projectId}`, {
            title: task.title,
            description: task.description,
        });
        const { success, message } = response.data;

        toast[success ? 'success' : 'error'](message);
    } catch (err) {
        toast.error(getErrorMessage(err));
    }
}
