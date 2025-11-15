// src/App.js
import React from 'react';
import Home from './components/Home';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography 
          variant="h3" 
          sx={{ textAlign: "center", fontWeight: "bold", mb: 5 }}
        >
          Redux Todo App
        </Typography>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Add Task */}
          <Route path="/add" element={<TodoForm />} />

          {/* View Tasks */}
          <Route path="/view" element={<TodoList />} />

          {/* Edit Task */}
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>

      </Container>
    </BrowserRouter>
  );
}

export default App;
