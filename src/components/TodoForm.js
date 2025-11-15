// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/Action';
import { TextField, Button, Box, Snackbar, Alert } from '@mui/material';

function TodoForm() {
  const [task, setTask] = useState("");
  const [open, setOpen] = useState(false); // Snackbar state
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() === "") return;

    dispatch(addTodo(task));
    setTask("");
    setOpen(true); // show success message
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <TextField
          fullWidth
          label="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Box>

      {/* Snackbar Message */}
      <Snackbar 
        open={open} 
        autoHideDuration={2500} 
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert variant="filled" severity="success">
          Task added successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

export default TodoForm;
