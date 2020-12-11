import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';


const ItemList = ({items, onClickDone, onClickDelete, onClickAdd}) => (<List className={styles.list}>
  {items.map(item => (
                    <li key={item.value}><Item value={item.value} isDone={item.isDone} id={item.id} onClickDone={onClickDone} onClickDelete={onClickDelete} onClickAdd={onClickAdd}/></li>))}
  </List>
  );
ItemList.propTypes = {
  isDone:  PropTypes.bool,
  value: PropTypes.string.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickAdd: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
export default ItemList;