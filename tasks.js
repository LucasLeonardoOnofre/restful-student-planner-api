// Importing db functions
import {
    getTasksdb,
    getTaskByIDdb,
    getTaskByStatusdb,
    getTaskByTitledb,
    addTaskdb,
    updateTaskdb,
    deleteTaskdb,
    deleteAllTasksdb
} from "./db.js";
// Handler functions for each endpoint
export async function getTasks(req, res) {
    try{
        const tasks = await getTasksdb();

        res.status(200).json({success: true, data: tasks});
    }
    catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}
export async function getTaskByID(req, res) {
    try {
        const id = req.params.id;
        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: "Invalid ID" });
        }
        const task = await getTaskByIDdb(id);
        if(!task) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }
        res.status(200).json({ success: true, data: task });
    }
    catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}
export async function getTaskByStatus(req, res) {
    try {
        const status = req.query.status;
        const tasks = await getTaskByStatusdb(status);
        res.status(200).json({ success: true, data: tasks });
    }
    catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}
export async function getTaskByTitle(req, res) {
    try {
        const title = req.query.title;
        const tasks = await getTaskByTitledb(title);
        res.status(200).json({ success: true, data: tasks });
    }
    catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}
export async function addTask(req, res) {
    try {
        const { title, course, due_date, priority, status } = req.body;
        if (!title || !course || !due_date || !priority || !status) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const id = await addTaskdb({ title, course, due_date, priority, status});
        res.status(201).json({ success: true, data: { id } });
    }
    catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}
export async function updateTask(req, res) {
    try {
        const id = req.params.id;
        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: "Invalid ID" });
        }
        const { title, course, due_date, priority, status } = req.body;
        const updated = await updateTaskdb(id, { title, course, due_date, priority, status });
        if (!updated) {
            return res.status(404).json({ success: false, message: "Not found" });
        }
        res.status(200).json({ success: true, data: updated });
    }
    catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}
export async function deleteTask(req, res) {
    try {
        const id = req.params.id;
        const deleted = await deleteTaskdb(id);
        if (!deleted) {
            return res.status(404).json({ success: false, message: "Not found" });
        }
        res.status(200).json({ success: true, message: "Task deleted" });
    }
    catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}
export async function deleteAllTasks(req, res) {
    try {
        const deleted = await deleteAllTasksdb();
        res.status(200).json({ success: true, message: `${deleted} tasks deleted` });
    }
    catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}