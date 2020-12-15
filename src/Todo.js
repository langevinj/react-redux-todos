import React from 'react' 

function Todo({ todo }){

    return (
        <span key={todo.id} id={todo.id}>
            {todo.task}</span>
    )
}

export default Todo;