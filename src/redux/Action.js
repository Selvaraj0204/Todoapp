// src/redux/Actions.js
export const addTodo = (task) => ({
    type: "ADD_TODO",
    payload: task
});

export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: id
});

export const updateTodo = (id, newTask) => ({
    type: "UPDATE_TODO",
    payload: { id, newTask }
});
