import React from 'react';
import styles from './BettyAssistant.module.css';
import Header from './Header';
import AssistantIntro from './AssistantIntro';
import AssistanceOptions from './AssistanceOption';
import Statistics from './Statistics';
import UnlockFeatures from './UnlockFeatures';
import Footer from './Footer';

function BettyAssistant() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <AssistantIntro />
        <AssistanceOptions />
        <Statistics />
        <UnlockFeatures />
      </main>
      <Footer />
    </div>
  );
}

export default BettyAssistant;