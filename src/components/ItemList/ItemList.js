import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import List from '@material-ui/core/List';

const ItemList = ({items, onClickDone}) => (<List className={styles.list}>
	{items.map(item => (
										<li key={item.value}><Item value={item.value} isDone={item.isDone} id={item.id} onClickDone={onClickDone}/></li>))}
	</List>
	);

export default ItemList;