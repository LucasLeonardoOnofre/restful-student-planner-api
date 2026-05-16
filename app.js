
import express from 'express';
const app = express();
// Importing db functions
import {
    getTasks,
    getTaskByID,
    getTaskByStatus,
    getTaskByTitle,
    addTask,
    updateTask,
    deleteTask,
    deleteAllTasks
} from  './tasks.js';


// Middleware to parse JSON bodies
app.use(express.json());
// Serve static files from the public directory
app.use(express.static('public'));

// Defining API endpoints
app.get('/tasks', getTasks);

app.get('/tasks/:id', getTaskByID);

app.get('/tasks/status/filter', getTaskByStatus);

app.get('/tasks/search/title', getTaskByTitle);

app.post('/tasks', addTask);

app.put('/tasks/:id', updateTask);

app.delete('/tasks/:id', deleteTask);

app.delete('/tasks', deleteAllTasks);
// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});