import React from 'react';
import styles from './item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const stl = {
	done: {
		textDecoration: 'line-through'
	}
}
class Item extends React.Component {
	componentDidMount() {
		this.timerID = setInterval(() => console.log('interval'), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	render() {
		const {value, isDone, classes, onClickDone, id, onClickDelete} = this.props;
		return (
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
	} 
}


Checkbox.defaultProps = {
  isDone: false
};
Item.propTypes = {
  isDone:  PropTypes.bool,
  value: PropTypes.string.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
export default withStyles(stl)(Item);