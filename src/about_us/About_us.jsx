import React from 'react';
import Header from './Header';
import Mission from './Mission';
import ChangingThings from './ChangingThing';
import BackedBy from './BackedBy';
import Timeline from './Timeline';
import Footer from './Footer';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
         <Header />
        <Mission />
        <ChangingThings />
        <BackedBy />
        <Timeline />
      <Footer />
    </div>
  );
};

export default AboutUs;