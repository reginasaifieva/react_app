import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

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
		<div className={styles.wrap}>
					<h1 className={styles.title}>Важные дела:</h1>
					<ItemList items={items}/>
					<Footer count={6}/>
	</div>);
}

export default App;