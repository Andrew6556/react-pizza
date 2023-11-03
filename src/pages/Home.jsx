import React from 'react';
import axios from 'axios';

import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId , setCountPage} from "../redux/slices/filterSlice"

import Categories from '../Components/Categories';
import PizzaBlock from '../Components/PizzaBlock';
import Skeleton from '../Components/PizzaBlock/Skeleton';
import Sort from '../Components/Sort';
import Pagination from '../Components/Pagination';



const Home = () => {
    const {searchValue} = React.useContext(SearchContext)
    const [items, setItems]         = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

    const {categoryId, sort, currentPage} = useSelector((state) => state.filter)
    const dispatch = useDispatch()


    const pizzas = items.map(pizza => (
        <PizzaBlock 
            key   = {pizza.id} 
            id    = {pizza.id}
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
        const url = `https://65255e5567cfb1e59ce72930.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.typeSort}&order=desc${search}`
        
        const getPizzas = async () => {
            try{
                const dataPizzas = await (await axios.get(url)).data
                setItems(dataPizzas)
                setIsLoading(false)
            }catch(error){
                console.log(error,12121)
                alert('Ошибка при получение пиццы!');
            }finally{
                setIsLoading(false)
            }
        }
        getPizzas()

        window.scrollTo(0, 0)
	}, [categoryId, sort, searchValue, currentPage])

    return (
        <>
            <div className="content__top">
                {/* Categories component */}
                <Categories value={categoryId} onClickCategory={(index) => dispatch(setCategoryId(index))} />
                {/* Sort component */}
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? skeleton: pizzas}</div>
            <Pagination onChangePage={indexPage =>  dispatch(setCountPage(indexPage))}/>
        </>
    )
}
export default Home