import React, {useContext} from 'react'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { TodoSearch } from './components/TodoSearch'
import { TodoCounter } from './components/TodoCounter'
import { CreateTodoButton } from './components/CreateTodoButton'
import { TodoContext } from './context/TodoContext'

function AppUI () {

    const {
        loading, 
        error, 
        searchedTodos, 
        checkToogleTodo, 
        deleteTodo
    } = useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                { loading && <p>wait a second</p>}
                { error && <p>we have an error</p> }
                { ( !loading && searchedTodos.length === 0 ) && <p> Please create your first TODO!! </p> }
                {
                    !loading && searchedTodos.map( todo =>(  
                        < TodoItem 
                        key={todo.todoMessage} 
                        text={todo.todoMessage} 
                        done={todo.done}
                        onComplete = {()=> checkToogleTodo(todo.todoMessage, todo.done)}
                        onDelete = {() => deleteTodo(todo.todoMessage) }
                        />
                    ))
                }
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI};
