import React from 'react'

function Categories(){
    const [activeIndex, setIndex] = React.useState(0);
    const listCategories          = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

    return(
        <>
            <div className="categories">
                <ul>
                    {
                        listCategories.map((nameCategory, index) => (
                            <li 
                                key={index.id} 
                                onClick={() => setIndex(index)} 
                                className={activeIndex === index ? "active": ""}>
                                {nameCategory}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}



export default Categories

