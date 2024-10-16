import React from "react";
import styles from "./MonthlyBreakdown.module.css";

function MonthlyBreakdown({ monthlyPayment }) {
  const breakdownItems = [
    { label: "Principal & interest", color: "green", amount: 1517 },
    { label: "Property taxes", color: "purple", amount: 265 },
    { label: "Homeowners insurance", color: "blue", amount: 132 },
    { label: "HOA fees", color: "yellow", amount: 132 },
    { label: "Utilities", color: "orange", amount: 100 },
  ];

  return (
    <section className={styles.monthlyBreakdown}>
      <h2 className={styles.title}>Monthly payment breakdown</h2>
      <p className={styles.totalPayment}>${monthlyPayment}/mo</p>
      <div className={styles.chart}>
        {/* Chart implementation goes here */}
      </div>
      <ul className={styles.breakdownList}>
        {breakdownItems.map((item, index) => (
          <li key={index} className={styles.breakdownItem}>
            <span className={`${styles.colorIndicator} ${styles[item.color]}`}></span>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.amount}>${item.amount}</span>
          </li>
        ))}
      </ul>
      <button className={styles.copyButton}>Copy estimate link</button>
    </section>
  );
}

export default MonthlyBreakdown;