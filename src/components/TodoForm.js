// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/Action';
import { TextField, Button, Box, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function TodoForm() {
  const [task, setTask] = useState("");
  const [open, setOpen] = useState(false); // Snackbar state
  const dispatch = useDispatch();
  const navi=useNavigate();
  const handleAdd = () => {
    if (task.trim() === "") return;

    dispatch(addTodo(task));
    setTask("");
    setOpen(true);
    navi('/');
     // show success message
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <TextField
  fullWidth
  label="Enter Task"
  value={task}
  onChange={(e) => setTask(e.target.value)}
  InputLabelProps={{
    style: { color: "white" }  // label color
  }}
  inputProps={{
    style: { color: "white" }  // text color
  }}
  placeholder="Enter Task"
  sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",      // default border
      },
      "&:hover fieldset": {
        borderColor: "white",      // on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",      // on focus
      },
    },
    "& .MuiInputBase-input::placeholder": {
      color: "white",
      opacity: 1,                  // required for placeholder
    },
  }}
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
