import {useEffect, useState} from 'react'

function useLocalStorage (itemName, initialValue) {

    const [todosArray, setTodosArray] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect( () => {
        setTimeout( () => {
            try{
                let actualTodos;
                if(!localStorage.getItem(itemName)){

                localStorage.setItem(itemName, JSON.stringify( initialValue ));
                actualTodos =  JSON.parse( localStorage.getItem(itemName));

                }else{
                actualTodos = JSON.parse( localStorage.getItem(itemName) )
                }

                setTodosArray(actualTodos);
                setLoading(false);
            
            }catch(error){
                setError(error)
            }
        }, 1000);
    },[itemName, initialValue])

    const saveTodos = ( arrayTodos ) =>{
        try{
            localStorage.setItem(itemName, JSON.stringify( arrayTodos ))
            setTodosArray(arrayTodos);
        }catch(error){
            setError(error);
        }   
    }

    return{ 
        todosArray,
        saveTodos,
        loading,
        error
    };
}

export { useLocalStorage }