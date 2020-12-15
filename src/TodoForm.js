import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { v4 as uuid } from 'uuid'

function TodoForm(){
    const [formData, setFormData] = useState({
        task: ""
    });

    const dispatch = useDispatch();

    const handleChange = (evt) => {
        const {name, value} = evt.target
        setFormData({ ...formData, [name]: value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({ type: "ADD", payload: { ...formData, id: uuid() }});
    }

    return(
        <div>
            <h3>Add a new task to the list:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Enter a task:</label>
                <input type="text" name="task" id="task" value={formData.task} onChange={handleChange}></input>
                <div>
                    <button>Add to the list!</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;