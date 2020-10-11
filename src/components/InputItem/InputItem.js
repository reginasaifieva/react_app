import React from 'react';
import TextField from '@material-ui/core/TextField'; 

const InputItem = () => (
		<div>
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
