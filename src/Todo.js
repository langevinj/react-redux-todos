import React from 'react' 

function Todo({ todo, remove }){

    return (
        <div key={todo.id} id={todo.id} onClick={remove}>
            {todo.task}</div>
    )
}

export default Todo;