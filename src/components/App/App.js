import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class App extends React.Component {
		state = {
				items: [
						{
								value: 'Написать новое приложение',
								isDone: true,
								id: 1
						},
						{
								value: 'прописать props-ы',
								isDone: true,
								id: 2
						},
						{
								value: 'распределить время по заданиям',
								isDone: false,
								id: 3
						}
				],
				count: 6
		};

		onClickDone = id => {
			const newItemList = this.state.items.map(item => {
				const newItem = {...item};

				if (item.id === id) {
					newItem.isDone = !item.isDone;
				}
				return newItem;
			})
			this.setState({items: newItemList});
		};


	render () {
		return (
					<div className={styles.wrap}>
						<Card>
							<CardContent>
										<h1 className={styles.title}>Важные дела:</h1>
										<InputItem/>
										<ItemList items={this.state.items} onClickDone={this.onClickDone}/>
										<Footer count={this.state.count}/>
							</CardContent>
						</Card>
				</div>
				)
		}
}

export default App;