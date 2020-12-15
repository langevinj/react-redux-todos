import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './Todo'
import { v4 as uuid } from 'uuid'

function TodoList(){
    const todos = useSelector(st => st.todos)
    const dispatch = useDispatch();

    //on clicking a todolist item remove it from the todolist
    const remove = (evt) => {
        evt.preventDefault();
        dispatch({ type: "DELETE", payload: evt.target.id})
    }

    return (
        <ul className="Todolist">
           {todos ? todos.map(todo => <li key={uuid()}><Todo todo={todo} remove={remove}/></li>) : null}
        </ul>
    )
}

export default TodoList;