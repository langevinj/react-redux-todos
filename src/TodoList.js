import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './Todo'
import { v4 as uuid } from 'uuid'

function TodoList(){
    const todos = useSelector(st => st.todos)
    const dispatch = useDispatch();

    const remove = (evt) => {
        evt.preventDefault();
        console.log("CLICKED")
        dispatch({ type: "DELETE", payload: evt.target.id})
    }

    return (
        <ul className="Todolist">
           {todos ? todos.map(todo => <li key={uuid()}><Todo todo={todo} remove={remove}/></li>) : null}
        </ul>
    )
}

export default TodoList;