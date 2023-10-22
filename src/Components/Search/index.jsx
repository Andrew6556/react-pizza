// import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { change} from '../../redux/slices/filterSlice'

// import { SearchContext } from '../../App'
import styles from "./Search.module.scss"
import close from "./img/close.svg"


const Search = () => {
    const searchValue = useSelector((state) => state.filter.value)
    const dispatch = useDispatch()
    console.log(searchValue)
    // const {searchValue, setSearchValue} = React.useContext(SearchContext)
    return (
        <div className={styles.input__wrapper}>
            <input 
                className = {styles.input}
                value  = {searchValue}
                onChange = {(event) => dispatch(change(event.target.value))}
                placeholder = 'Поиск пиццы...'/>
                
            {searchValue && (
                <img 
                    className = {styles.input__close} 
                    src = {close}
                    onClick = {() => dispatch(change(""))}
                />)
            }
        </div>
        
    )
}
export default Search