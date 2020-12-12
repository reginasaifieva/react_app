import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete, filterItems }) => (
  <ul className={styles.list}>
    { filterItems().map((item) => <li className={styles.li} key={item.value}>
    <Item
      value={item.value}
      isDone={item.isDone}
      id={item.id}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
    />
  </li>)}
</ul>);

export default ItemList;
