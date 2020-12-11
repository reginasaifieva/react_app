import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    error: false,
    errorMessage: '',
    items: []
  };

  onButtonClick = () => {
    if (this.state.inputValue !== '') {
      if (this.props.items.find((item) => this.state.inputValue === item.value)) {
        this.setState({
          error: true,
          errorMessage: 'Что-то пошло не так...'
        });
      } else {
        this.setState({
          inputValue: '',
          error: false,
          errorMessage: ''
        });
        this.props.onClickAdd(this.state.inputValue);
      }
    } else {
      this.setState({
        error: true,
        errorMessage: 'Что-то пошло не так...'
      });
    }
  }

  render () {
    return (<div className={styles.container}>
        <div className={styles.input}>
          <TextField
            helperText={this.state.errorMessage}
            label="Задача"
            defaultValue="Добавить задачу"
            helperText="Введите задачу для списка дел"
            margin="dense"
            variant="outlined"
            value={this.state.inputValue}
            error={this.state.error}
            onChange={(event) => this.setState({ inputValue: event.target.value })}
          />
        </div>
        <div className={styles.button_wrap}>
          <Button
            size="large"
            onClick={this.onButtonClick}
          >
            Добавить
          </Button>
        </div>
    </div>);
  }
}

export default InputItem;
