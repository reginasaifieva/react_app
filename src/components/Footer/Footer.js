import React from 'react'; 
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({count}) => (<div className={styles.footer}>Осталось выполнить вот столько дел:{count}</div>);


Footer.propTypes = {
    count: PropTypes.number.isRequired
};


export default Footer;