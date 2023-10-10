import React from 'react';

import Header from './Components/Header';
import Categories from './Components/Categories';
import PizzaBlock from './Components/PizzaBlock';
import Sort from './Components/Sort';

import './scss/app.scss';

function App() {
	const [items, setItems] = React.useState([])

	React.useEffect(() => {
		const getPizza = async () =>{
			setItems(await(await fetch("https://65255e5567cfb1e59ce72930.mockapi.io/items")).json())
		}
		getPizza()
	}, [])
	
	return (
		<div className="wrapper">
			{/* Header component */}
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						{/* Categories component */}
						<Categories />
						{/* Sort component */}
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{
							items.map(pizza =>(
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
				</div>
			</div>
		</div>
	)
}

export default App
