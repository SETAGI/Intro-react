import React, {useContext} from 'react'
import { TodoContext } from '../context/TodoContext'
import '../style/CreateTodoButton.css'


function CreateTodoButton() {

    const {modal, setModal} = useContext(TodoContext);
   
    const toogleModal = () =>{
        setModal( prevState => !modal) // -> a better way to create toogle buttons in react
    }

    return (
        <button 
            onClick={toogleModal} 
            className="CreateTodoButton" 
        > + </button>
    )
}

export { CreateTodoButton }