import React from 'react';
import Item from '../Item/Item';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './ItemList.module.css';

const ItemList = ({items}) => (<div className={styles.list}>
	{items.map(item => (
											<FormControlLabel
            control={<Checkbox checked={item.isDone} />}
            label={<Item value={item.value} isDone={item.isDone} />}         
           />))}
	</div>
	);

export default ItemList;