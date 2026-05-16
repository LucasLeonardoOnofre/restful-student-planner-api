DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  course VARCHAR(100) NOT NULL,
  due_date DATE NOT NULL,
  priority ENUM('low', 'medium', 'high') NOT NULL,
  status ENUM('todo', 'in-progress', 'completed') NOT NULL
);

INSERT INTO tasks (title, course, due_date, priority, status) VALUES
('Finish COMPX322 Assignment 3', 'COMPX322', '2026-05-18', 'high', 'todo'),
('Prepare COMPX322 API demo notes', 'COMPX322', '2026-05-16', 'medium', 'in-progress'),
('Revise SQL joins for quiz', 'COMPX201', '2026-05-09', 'high', 'completed'),
('Read chapter 6 on REST design', 'COMPX322', '2026-05-08', 'low', 'completed'),
('Plan weekly study schedule', 'GENED101', '2026-05-10', 'medium', 'todo'),
('Write lab report draft', 'ENGEE203', '2026-05-12', 'high', 'todo'),
('Submit internship application', 'COMPX299', '2026-05-20', 'high', 'in-progress'),
('Check assignment specification again', 'COMPX322', '2026-05-07', 'low', 'completed'),
('Review API status codes', 'COMPX322', '2026-05-11', 'medium', 'todo'),
('Create Postman test collection', 'COMPX322', '2026-05-14', 'medium', 'in-progress'),
('Update study planner database schema notes', 'COMPX201', '2026-05-13', 'low', 'todo'),
('Revise recursion exercises', 'COMPX123', '2026-05-15', 'medium', 'todo'),
('Prepare group meeting agenda', 'MNGMT202', '2026-05-17', 'low', 'in-progress'),
('Finish final proofreading for report', 'ENGEE203', '2026-05-19', 'high', 'todo'),
('Search for scholarship deadline details', 'GENED101', '2026-05-21', 'medium', 'todo');