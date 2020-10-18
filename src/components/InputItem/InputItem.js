import React from 'react';
import TextField from '@material-ui/core/TextField'; 
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
    state = {
        inputValue: ''
    };
    onButtonClick = (inputValue) => {
        try {
           if (this.state.inputValue !== '') {this.setState({
                inputValue: ''
            })
            this.props.onClickAdd(this.state.inputValue.toUpperCase())}
            else {
                alert('Поле пустое')
            }
        }
        catch(e) {
            alert('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
        }
    }
    render() {
        const {onClickAdd} = this.props;
        return (
        <div className={styles.InputItem}>
            <TextField
              id="standard-string"
              label="Введите новое дело"
              type="string"
              style={{ margin: 5 }}
              fullWidth
              value={this.state.inputValue}
              onChange={event => this.setState({ inputValue: event.target.value })}
    />
    <Button
        variant="contained" 
        color="primary"
        fullWidth
        onClick={this.onButtonClick}>Добавить
    </Button>
    </div>) 
    }
}
export default InputItem;