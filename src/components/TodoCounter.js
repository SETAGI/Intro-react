import React, {useContext} from 'react'
import { TodoContext  } from '../context/TodoContext'
import '../style/TodoCounter.css'

function TodoCounter() {

    const {todos, todosPending} = useContext(TodoContext)
    return (
        <h2 className="TodoCounter" >You have {todosPending} Todos pending and a total of {todos.length} Todos</h2>
    )
}

export { TodoCounter }