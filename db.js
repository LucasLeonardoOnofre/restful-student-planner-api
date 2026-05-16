import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise()

//Get all tasks 
export async function getTasksdb() {
  const [rows] = await pool.query(
    `SELECT * FROM tasks`);
  return rows;
}
// Get a task by ID
export async function getTaskByIDdb(id) {
  const [rows] = await pool.query(
    `SELECT * FROM tasks WHERE id = ? `, 
    [id]);
  return rows [0];
}
// Get task by Status
export async function getTaskByStatusdb(status) {
  const [rows] = await pool.query(
    `SELECT * FROM tasks WHERE status = ?`, 
    [status]);
  return rows;
}
// Search for tasks by title
export async function getTaskByTitledb(title) {
  const [rows] = await pool.query(
    `SELECT * FROM tasks WHERE title LIKE ?`,
    [`%${title}%`]
  );
  return rows;
}
// add a new task
export async function addTaskdb(task) {
    const { title, course, due_date, priority, status } = task;
    const [result] = await pool.query(
        `INSERT INTO tasks (title, course, due_date, priority, status) VALUES (?, ?, ?, ?, ?)`,
        [title, course, due_date, priority, status]
    );
    return result.insertId;
}
// Update a task
export async function updateTaskdb(id,task) {
  const [result] = await pool.query(
    `UPDATE tasks SET title = ?, course = ?, due_date = ?, priority = ?, status = ? WHERE id = ?`, 
    [task.title, task.course, task.due_date, task.priority, task.status, id]);
  return result.affectedRows;
}

//Delete a task
export async function deleteTaskdb(id) {
  const [result ] = await pool.query(
    `DELETE FROM tasks WHERE id = ?`, 
    [id]);
  return result.affectedRows;
}
// Delete all tasks
export async function deleteAllTasksdb() {
  const [result] = await pool.query(
    `DELETE FROM tasks`
  );
  return result.affectedRows;
}
