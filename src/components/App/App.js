import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
       <div className={styles.menu}>
        <Link to='/' className={styles.link}>
          <div className={styles.item}>
            Обо мне
          </div>
        </Link>
        <Link to='/todo' className={styles.link}>
          <div className={styles.item}>
            Дела
          </div>
        </Link>
        <Link to='/contacts' className={styles.link}>
          <div className={styles.item}>
            Контакты
          </div>
        </Link>
       </div>
      </div>
      <div>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </div>
      <div className={styles.footer}>
      </div>
    </Router>
  )
}

export default App;