// import React from 'react';

import Header from './Components/Header';
import Categories from './Components/Categories';
import PizzaBlock from './Components/PizzaBlock';
import Sort from './Components/Sort'

import './scss/app.scss';

function App() {
	return (
		<>	
			<div className="wrapper">
				{/* Header component */}
				<Header></Header>
				<div className="content">
					<div className="container">
						<div className="content__top">
							{/* Categories component */}
							<Categories></Categories>
							{/* Sort component */}
							<Sort></Sort>
						</div>
						<h2 className="content__title">Все пиццы</h2>
						<div className="content__items">
							{/* pizza component */}
							<PizzaBlock></PizzaBlock>
							<PizzaBlock></PizzaBlock>
							<PizzaBlock></PizzaBlock>
							<PizzaBlock></PizzaBlock>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
