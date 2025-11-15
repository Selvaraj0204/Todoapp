// src/redux/Reducer.js
const initialState = {
    todos: []
};

export function Reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                id: Date.now(),
                task: action.payload
            };
            return { ...state, todos: [...state.todos, newTodo] };

        case "DELETE_TODO":
            return { ...state, todos: state.todos.filter(t => t.id !== action.payload) };

        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map(t =>
                    t.id === action.payload.id
                        ? { ...t, task: action.payload.newTask }
                        : t
                )
            };

        default:
            return state;
    }
}
