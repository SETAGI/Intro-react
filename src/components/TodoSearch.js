import '../style/TodoSearch.css'
import React, {useContext} from 'react'
import { TodoContext } from '../context/TodoContext'

function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext)

    const onSearchValue = (event) =>{
        setSearchValue(event.target.value);
    }

    return( 
        <input 
            className="TodoSearch" 
            placeholder='Search'
            value={searchValue}
            onChange={onSearchValue}
        /> 
    )  
}

export { TodoSearch }