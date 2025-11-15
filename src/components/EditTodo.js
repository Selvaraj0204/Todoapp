// src/components/EditTodo.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../redux/Action';
import { TextField, Button, Card, CardContent, Typography, Snackbar, Alert } from '@mui/material';

function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);
  const todo = todos.find(t => t.id === id);

  const [task, setTask] = useState(todo.task);
  const [open, setOpen] = useState(false); // Snackbar state

  const handleUpdate = () => {
    dispatch(updateTodo(todo.id, task));
    setOpen(true);

    // Navigate after message disappears
    setTimeout(() => {
      navigate("/view");
    }, 1500);
  };

  return (
    <>
      <Card sx={{ mt: 3, p: 2 }}>
        <CardContent>
          <Typography variant="h5">Edit Task</Typography>

          <TextField
            fullWidth
            sx={{ mt: 2 }}
            value={task}
            onChange={e => setTask(e.target.value)}
          />

          <Button
            sx={{ mt: 2 }}
            variant="contained"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </CardContent>
      </Card>

      {/* Snackbar Message */}
      <Snackbar 
        open={open} 
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert variant="filled" severity="success">
          Task updated successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

export default EditTodo;
