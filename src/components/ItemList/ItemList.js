import React from 'react';
import Item from '../Item/Item'
const ItemList = ({todoItem}) => (
	<ul>
		<li><Item todoItem={todoItem}/></li>
		<li><Item todoItem={'прописать props-ы'}/></li>
		<li><Item todoItem={'распределить время по заданиям'}/></li>
	</ul>
	);

export default ItemList;