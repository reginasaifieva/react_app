import React from 'react';
import TextField from '@material-ui/core/TextField'; 
import styles from './InputItem.module.css';

const InputItem = () => (
		<div className={styles.InputItem}>
			<TextField
			  id="standard-string"
     label="Введите новое дело"
     type="string"
     InputLabelProps={{
     		shrink: true,
    	}}
    />
		</div>
)
export default InputItem;
