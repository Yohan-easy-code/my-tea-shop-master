"use client";

import React from 'react';
import WheelComponent from './components/Wheel';
import './globals.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Form from './components/Form.js';
import ParticipationInstructions from './components/ParticipationInstructions';
import PrizeList from './components/PrizeList';

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <ParticipationInstructions />
        <WheelComponent />
        <PrizeList />
      </main>
      <Footer />
    </div>

  );
};

export default Home;
