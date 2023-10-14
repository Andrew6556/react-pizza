// import React from 'react'

function Categories({ value, onClickCategory }){
    const listCategories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

    return(
        <div className="categories">
            <ul>
                {
                    listCategories.map((nameCategory, index) => (
                        <li 
                            key={index} 
                            onClick={() => onClickCategory(index)} 
                            className={value === index ? "active": ""}>
                            {nameCategory}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}



export default Categories

