import React from 'react';
import styles from './BettyAssistant.module.css';

function StatItem({ value, description }) {
  return (
    <div className={styles.statItem}>
      <p className={styles.statValue}>{value}</p>
      <p className={styles.statDescription}>{description}</p>
    </div>
  );
}

function Statistics() {
  const stats = [
    { value: "$100B", description: "home loans funded entirely online" },
    { value: "400K", description: "Customers who chose a Better Mortgage" }
  ];

  return (
    <section className={styles.statistics}>
      {stats.map((stat, index) => (
        <StatItem key={index} value={stat.value} description={stat.description} />
      ))}
    </section>
  );
}

export default Statistics;