import React from 'react';
import styles from './item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const stl = {
	done: {
		textDecoration: 'line-through'
	}
}

const Item = ({value, isDone, classes, onClickDone, id, onClickDelete}) => (
	<ListItem fullWidth>
	<Checkbox
			checked={isDone}
			tabIndex={-1}
			onClick={() => onClickDone(id)}
	/>
	<ListItemText primary={value} classes={{
		root: isDone && classes.done 
	}} />
	<ListItemSecondaryAction>
			<IconButton aria-label="Delete" 
			className={styles.list__delete}>
			<DeleteIcon onClick={() => onClickDelete(id)}/>
			</IconButton>
	</ListItemSecondaryAction>
</ListItem>);

Checkbox.defaultProps = {
  isDone: false
};

export default withStyles(stl)(Item);