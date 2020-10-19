import React from 'react'; 
import styles from './Footer.module.css';


const Footer = ({count}) => (<div className={styles.footer}>Осталось выполнить вот столько дел:{count}</div>);

Footer.defaultProps = {
    count: 0
};
export default Footer;