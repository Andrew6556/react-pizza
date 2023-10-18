import React from 'react';

import { SearchContext } from '../App';

import Categories from '../Components/Categories';
import PizzaBlock from '../Components/PizzaBlock';
import Skeleton from '../Components/PizzaBlock/Skeleton';
import Sort from '../Components/Sort';
import Pagination from '../Components/Pagination';



const Home = () => {
    const {searchValue} = React.useContext(SearchContext)
    const [items, setItems]           = React.useState([]);
	const [isLoading, setIsLoading]   = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1);

    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType]     = React.useState({
        name:"популярности",
        sort:"rating"
    });

    const pizzas = items.map(pizza => (
        <PizzaBlock 
            key   = {pizza.id} 
            title = {pizza.title} 
            price = {pizza.price} 
            img	  = {pizza.imageUrl}
            sizes = {pizza.sizes}
            types = {pizza.types}
        />
    ));

    const skeleton = [...new Array(6)].map((item, itemIndex) => <Skeleton key={itemIndex} />)
    
	React.useEffect(() => {
        setIsLoading(true)

        const category = categoryId > 0 ? `category=${categoryId}`: "";
        const search   = searchValue ? `&search=${searchValue}`:"";
        const url = `https://65255e5567cfb1e59ce72930.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sort}&order=desc${search}`

		const getPizza = async () =>{
			setItems(await(await fetch(url)).json())
			setIsLoading(false)
		}
		getPizza()
        window.scrollTo(0, 0)
	}, [categoryId, sortType, searchValue, currentPage])

    return (
        <>
            <div className="content__top">
                {/* Categories component */}
                <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} />
                {/* Sort component */}
                <Sort valueSort={sortType} onChangeSort={(objSort) => setSortType(objSort)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? skeleton: pizzas}</div>
            <Pagination onChangePage={indexPage => setCurrentPage(indexPage)} />
        </>
    )
}
export default Home