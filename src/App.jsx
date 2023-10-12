// import React from 'react';
import {Routes ,Route } from "react-router-dom";

import Header from './Components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart'
import NotFound from "./pages/NotFound"

import './scss/app.scss';

function App() {
	return (
		<div className="wrapper">
			{/* Header component */}
			<Header />
			<div className="content">
				<div className="container">
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/cart" element={<Cart/>}/>
						<Route path="*" element={<NotFound/>}/>
					</Routes>
					{/* <Home/> */}
				</div>
			</div>
		</div>
	)
}

export default App
