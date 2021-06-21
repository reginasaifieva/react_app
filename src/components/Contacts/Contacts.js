import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => (<div className={styles.container}>
  <h1 className={styles.title}>Контакты</h1>
  <div className={styles.wrap}>
    <div className={styles.item}>
      <label className={styles.label}>Город:</label>
      <p className={styles.text}>Санкт-Петербург</p>
    </div>
    <div className={styles.item}>
      <label className={styles.label}>Телефон:</label>
      <p className={styles.text}>8 (953) 835 25 90</p>
    </div>
    <div className={styles.item}>
      <label className={styles.label}>Ник телеграмма:</label>
      <a href='https://tele.gs/wijifq' className={styles.link}>@regina_r_s</a>
    </div>
    <div className={styles.item}>
      <label className={styles.label}>E-mail:</label>
      <a className={styles.link} href='mailto:saifieva98@gmail.com'>regina-saifieva@mail.ru</a>
    </div>
  </div>
</div>)

export default Contacts;