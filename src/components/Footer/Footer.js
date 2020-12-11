import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Footer = ({ count, onClickFilter, filter, onClickDeleteComplited }) => {

  return (<div className={styles.footer}>
    <span className={styles.item}>{count} дел всего</span>
    <div className={styles.item}>
      <ButtonGroup 
        className={styles.buttons}
        value={filter}
      >
        <Button onClick={() => onClickFilter('all')}>Все</Button>
        <Button onClick={() => onClickFilter('active')}>В работе</Button>
        <Button onClick={() => onClickFilter('done')}>Завершенные</Button>
      </ButtonGroup>
    </div>
    <div className={styles.item}>
      <Button
        size="small"
        onClick={() => onClickDeleteComplited()}
      >
      </Button>
    </div>
  </div>)
};

export default Footer;
