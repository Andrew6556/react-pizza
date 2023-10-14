import React from 'react';

import Categories from '../Components/Categories';
import PizzaBlock from '../Components/PizzaBlock';
import Skeleton from '../Components/PizzaBlock/Skeleton';
import Sort from '../Components/Sort';

const Home = () => {
    const [items, setItems]         = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const getPizza = async () =>{
			setItems(await(await fetch("https://65255e5567cfb1e59ce72930.mockapi.io/items")).json())
			setIsLoading(false)
		}
		getPizza()
        window.scrollTo(0, 0)
	}, [])

    return (
        <>
            <div className="content__top">
                {/* Categories component */}
                <Categories />
                {/* Sort component */}
                <Sort />
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