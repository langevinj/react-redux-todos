const INITIAL_STATE = { todos: [] }

function rootReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ADD":
            return { ...state, todos: [...todos, action.payload]}
        
        case "DELETE":
            return { ...state, todos: todos.filter(todo => todo.id !== action.payload.id)}

        default:
            return state;
    }
}

export default rootReducer;