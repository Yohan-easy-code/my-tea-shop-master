import React from 'react';
import styles from './styles/PrizeList.module.css';

const PrizeList = () => (
  <div className={styles.prizeList}>
    <h2>Liste des lots :</h2>
    <ul>
      <li>lot 1</li>
      <li>lot 2</li>
      <li>lot 3</li>
    </ul>
    <div className={styles.prizeImages}>
      <img src="images/prize1.png" alt="Lot 1" />
      <img src="images/prize2.png" alt="Lot 2" />
    </div>
  </div>
);

export default PrizeList;
