import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from './App.module.css';

const App = () => {
    const initialState = {
        items: [
            {
                value: 'сделать react-приложение',
                isDone: false,
                id: null
            }
        ]
    };

useEffect(() => {
    console.log('componentDidMount');
}, []);

useEffect(() => {
    console.log('componentDidUpdate');
});

const [items, setItems] = useState(initialState.items);


const onClickDone = id => {
    const newItemList = items.map(item => {
        const newItem = { ...item };
        if (item.id === id) {
            newItem.isDone = !item.isDone;
        }

        return newItem;
    });

    setItems(newItemList);
};

const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);

    setItems(newItemList);
};

const onClickAdd = value => {
    const newItemList = [
        ...items,
        {
            value,
            isDone: false,
            id: items.length + 1
        }
    ];
    setItems(newItemList);
  
};

return (
    <div className={styles.wrap}>
        <h1 className={styles.title}>Важные задачи:</h1>
        <InputItem onClickAdd={onClickAdd} />
        <ItemList items={items}  onClickDone={onClickDone} onClickDelete={onClickDelete}/>
        <Footer count={items.length} />
    </div>
    );
};

export default App;
