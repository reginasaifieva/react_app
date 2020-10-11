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

		onClickDone = (isDone) => console.log(isDone);


	render () {
		return (
					<div className={styles.wrap}>
						<Card>
							<CardContent>
										<h1 className={styles.title}>Важные дела:</h1>
										<InputItem/>
										<ItemList items={this.state.items} onClickDone={this.onClickDone}/>
										<Footer count={6}/>
							</CardContent>
						</Card>
				</div>
				)
		}
}

export default App;