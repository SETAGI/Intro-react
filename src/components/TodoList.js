import React from 'react'
import '../style/TodoList.css'

function TodoList(props) {
    return (
        <ul>
            {props.children}
        </ul>  
    )
}

export { TodoList }