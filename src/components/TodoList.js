// src/components/TodoList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/Action';
import { Link } from "react-router-dom";
import { 
  Card, CardContent, Button, Typography, 
  Box, Snackbar, Alert, Dialog, DialogActions, 
  DialogContent, DialogContentText, DialogTitle 
} from '@mui/material';

import { motion, AnimatePresence } from 'framer-motion';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Open confirmation dialog
  const handleOpenDialog = (id) => {
    setSelectedId(id);
    setOpenDialog(true);
  };

  // Confirm delete
  const handleConfirmDelete = () => {
    dispatch(deleteTodo(selectedId));
    setOpenDialog(false);
    setOpenSnackbar(true);
  };

  return (
    <>
      <Box sx={{ mt: 3 }}>
        <AnimatePresence>
          {todos.map(todo => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.35 }}
            >
              <Card sx={{ mb: 2, boxShadow: 4, borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6">{todo.task}</Typography>

                  <Box sx={{ mt: 1, display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      color="warning"
                      component={Link}
                      to={`/edit/${todo.id}`}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleOpenDialog(todo.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </Box>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this task?  
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setOpenDialog(false)}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button 
            variant="contained"
            color="error"
            onClick={handleConfirmDelete}
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert variant="filled" severity="info">
          Task deleted successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

export default TodoList;
