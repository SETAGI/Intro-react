import React, {createContext, useState} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

const defaultArray = [
    {todoMessage: 'Study React', done: false},
    {todoMessage: 'Study CSS', done: false},
    {todoMessage: 'Study HTML', done: false}
  ];

function TodoProvider ( props ) {

    const {
        todosArray: todos, 
        saveTodos: setTodos, 
        loading, 
        error
    } = useLocalStorage('TODOS_V1', defaultArray );
    const [searchValue, setSearchValue] = useState('');
    const todosPending = todos.filter( todo =>  !todo.done).length;

    let searchedTodos = [];
    if(searchValue.length >= 1){
        searchedTodos = todos.filter( todo => todo.todoMessage.toLocaleLowerCase().includes(  searchValue.toLocaleLowerCase() ))
    } else searchedTodos = todos

    const checkToogleTodo = (text, status) => {
        let newArray = [...todos];
        const todoIndex = newArray.findIndex( todo => todo.todoMessage === text);
        if(newArray[todoIndex].done) newArray[todoIndex].done = false;
        else newArray[todoIndex].done = true;
        setTodos( newArray );
    } 

    const deleteTodo = (text) => {
        let newArray = [...todos];
        const todoIndex = newArray.findIndex( todo => todo.todoMessage === text);
        newArray.splice(todoIndex,1);
        setTodos( newArray );
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            todos,
            todosPending,
            searchValue,
            setSearchValue,
            searchedTodos,
            checkToogleTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoProvider, TodoContext}



