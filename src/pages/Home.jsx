import React from 'react';

import Categories from '../Components/Categories';
import PizzaBlock from '../Components/PizzaBlock';
import Skeleton from '../Components/PizzaBlock/Skeleton';
import Sort from '../Components/Sort';

const Home = () => {
    const [items, setItems]           = React.useState([]);
	const [isLoading, setIsLoading]   = React.useState(true);

    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType]     = React.useState({
        name:"популярности",
        sort:"rating"
        // {name:"цене", sort:"price"},
        // {name:"алфавиту", sort:"title"}
    });


	React.useEffect(() => {
        setIsLoading(true)
        const urlDataPizza = "https://65255e5567cfb1e59ce72930.mockapi.io/items";

		const getPizza = async () =>{
			setItems(await(await fetch(
                categoryId === 0 ? urlDataPizza: `https://65255e5567cfb1e59ce72930.mockapi.io/items?category=${categoryId}`)).json()
            )
			setIsLoading(false)
		}
		getPizza()
        window.scrollTo(0, 0)
	}, [categoryId, sortType])

    return (
        <>
            <div className="content__top">
                {/* Categories component */}
                <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} />
                {/* Sort component */}
                <Sort valueSort={sortType} onChangeSort={(indexType) => setSortType(indexType)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading 
                        ? [...new Array(6)].map((item, itemIndex) => <Skeleton key={itemIndex} />)
                        : items.map(pizza => (
                            <PizzaBlock 
                                key   = {pizza.id} 
                                title = {pizza.title} 
                                price = {pizza.price} 
                                img	  = {pizza.imageUrl}
                                sizes = {pizza.sizes}
                                types = {pizza.types}
                            />
                        ))
                }
            </div>
        </>
    )
}
export default Home