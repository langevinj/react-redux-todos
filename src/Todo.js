import React from 'react' 
import './Todo.css'

function Todo({ todo, remove }){
    
    return (
        <div key={todo.id} id={todo.id} onClick={remove}>
            <span id={todo.id} onClick={remove}>{todo.task}</span>
        </div>
    )
}

export default Todo;