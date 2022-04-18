import React, {useContext, useState} from 'react'
import { TodoContext } from '../context/TodoContext'
import '../style/TodoForm.css'

function TodoForm () {

    const { addTodo, setModal } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('');

    const onChange = (event) =>{
        setNewTodoValue( event.target.value) ;
    }

    const onCancel = () =>{
        setModal(false)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label> Enter a new Todo! </label>
            <textarea
                onChange = {onChange}
                placeholder='Enter a new Todo'
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className='TodoForm-button TodoForm-button-cancel'
                    type='button'
                    onClick = {onCancel}
                > Cancel </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type='submit'
                > Add </button>
            </div>
        </form>
    )
}

export { TodoForm }
