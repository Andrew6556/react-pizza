import React from 'react'

import { SearchContext } from '../../App'
import styles from "./Search.module.scss"
import close from "./img/close.svg"


const Search = () => {
    const {searchValue, setSearchValue} = React.useContext(SearchContext)
    return (
        <div className={styles.input__wrapper}>
            <input 
                className = {styles.input}
                value  = {searchValue}
                onChange = {(event) => setSearchValue(event.target.value)}
                placeholder = 'Поиск пиццы...'/>
                
            {searchValue && (
                <img 
                    className = {styles.input__close} 
                    src = {close}
                    onClick = {() => setSearchValue("")}
                />)
            }
        </div>
        
    )
}
export default Search