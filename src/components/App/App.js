import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

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
		<div>
					<h1>Важные дела:</h1>
					<ItemList items={items}/>
					<Footer count={6}/>
	</div>);
}

export default App;