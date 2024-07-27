import React from 'react';
import styles from './styles/Header.module.css';

const Header = () => (
    <header className={styles.header}>
      <img src="images/logo.png" alt="Thé Tip Top Logo" className={styles.logo} />
      <button className={styles.btnLogin}>Connexion</button>
    </header>
  );

export default Header;
