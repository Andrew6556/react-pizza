// import React from 'react';

import Header from './Components/Header';
import Categories from './Components/Categories';
import PizzaBlock from './Components/PizzaBlock';
import Sort from './Components/Sort';
import pizzaData from "./assets/pizza.json";


import './scss/app.scss';

function App() {
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
							pizzaData.map(pizza =>(
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
