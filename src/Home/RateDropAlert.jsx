import React from 'react';
import styles from './RateDropSection.module.css';

const RateDropAlert = () => {
  return (
    <div className={styles.alertContainer}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d679243301787ee09341b76db0d9175ee795302ea7c3dc3e84debd14500d88f5?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="" className={styles.alertIcon} />
      <span className={styles.alertText}>Rate drop alert</span>
    </div>
  );
};

export default RateDropAlert;