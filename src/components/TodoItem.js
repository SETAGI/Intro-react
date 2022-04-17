import React, {useContext} from 'react'
import { TodoContext } from '../context/TodoContext'
import '../style/TodoItem.css'

function TodoItem({text, done, onComplete, onDelete}) {

    return(
        <li className="TodoItem" >
             <span 
                className={`Icon Icon-check ${done && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                √
            </span>
            <p className={`TodoItem-p ${done && 'TodoItem-p--complete'}`} >
                {text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                X
            </span>
        </li>
    )
}

export { TodoItem }