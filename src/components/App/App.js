import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
		state = {
				items: [
						{
								value: 'Написать новое приложение',
								isDone: true
						},
						{
								value: 'прописать props-ы',
								isDone: true
						},
						{
								value: 'распределить время по заданиям',
								isDone: false
						}
				]
		};
	render () {
		return (
					<div className={styles.wrap}>
						<h1 className={styles.title}>Важные дела:</h1>
						<InputItem/>
						<ItemList items={this.state.items}/>
						<Footer count={6}/>
				</div>
				)
		}
}

export default App;