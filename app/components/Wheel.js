"use client";

import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import styles from './styles/Wheel.module.css';

const WheelComponent = ({ size }) => {
  const data = [
    { option: 'Lot 1', style: { backgroundColor: '#EE4040', textColor: 'white' } },
    { option: 'Lot 2', style: { backgroundColor: '#F0CF50', textColor: 'white' } },
    { option: 'Lot 3', style: { backgroundColor: '#815CD1', textColor: 'white' } },
    { option: 'Lot 4', style: { backgroundColor: '#3DA5E0', textColor: 'white' } },
    { option: 'Lot 5', style: { backgroundColor: '#34A24F', textColor: 'white' } },
    { option: 'Lot 6', style: { backgroundColor: '#F9AA1F', textColor: 'white' } },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    // Tout code spécifique au client, par exemple, des événements DOM
    console.log("Le composant est monté côté client");
  }, []);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setWinner(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wheel}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
            setWinner(data[prizeNumber].option);
          }}
        />
      </div>
      <button onClick={handleSpinClick} className={styles.btnPlay}>Tourner la roue</button>
      {winner && <p>Félicitations ! Vous avez gagné : {winner}</p>}
    </div>
  );
};

export default WheelComponent;
