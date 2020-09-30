import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
	const items = [
		{
			value: 'Написать новое приложение'
		},
		{
			value: 'прописать props-ы'
		},
		{
		value: 'распределить время по заданиям'
		}
	];

	return (
		<div className='wrap'>
					<h1 className="wrap__title">Важные дела:</h1>
					<ItemList items={items}/>
					<Footer count={6}/>
	</div>);
}

export default App;