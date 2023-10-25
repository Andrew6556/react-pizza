// eslint-disable-next-line no-unused-vars
import React, { useCallback, useRef } from 'react'
import debounce from "lodash.debounce"
// import { useSelector, useDispatch } from 'react-redux'

import { SearchContext } from '../../App'
import styles from "./Search.module.scss"
import close from "./img/close.svg"


const Search = () => {
    const {setSearchValue} = React.useContext(SearchContext)
    const [value, setValue] = React.useState("")

    const inputRef = useRef()
    const onClickClear = () =>{
        setSearchValue("")
        setValue("")
        inputRef.current.focus()
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSeacrhValue = React.useCallback(
        debounce((event) => {
            setSearchValue(event)
        },1000),[]
    )

    const onChangeInput = (event) => {
        setValue(event)
        updateSeacrhValue(event)
    }
    
    // const searchValue = useSelector((state) => state.filter.value)
    // const dispatch = useDispatch()
    // console.log(searchValue)
    return (
        <div className={styles.input__wrapper}>
            <input 
                ref={inputRef}
                className = {styles.input}
                value  = {value}
                onChange = {(event) => onChangeInput(event.target.value)}
                placeholder = 'Поиск пиццы...'/>
                
            {value && (
                <img 
                    className = {styles.input__close} 
                    src = {close}
                    onClick = {() => onClickClear()}
                />)
            }
        </div>
        
    )
}
export default Search