import React from "react";
import styles from "./Calculator.module.css";

function Calculator({
  homePrice,
  setHomePrice,
  downPayment,
  setDownPayment,
  interestRate,
  setInterestRate,
  loanTerm,
  setLoanTerm,
  calculateMonthlyPayment,
  monthlyPayment,
}) {
  return (
    <div className={styles.calculator}>
      <div className={styles.inputGroup}>
        <label htmlFor="homePrice" className={styles.label}>Home price</label>
        <div className={styles.inputWrapper}>
          <span className={styles.currencySymbol}>$</span>
          <input
            type="number"
            id="homePrice"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="downPayment" className={styles.label}>Down payment</label>
        <div className={styles.inputWrapper}>
          <span className={styles.currencySymbol}>$</span>
          <input
            type="number"
            id="downPayment"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="interestRate" className={styles.label}>Interest rate</label>
        <div className={styles.inputWrapper}>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className={styles.input}
          />
          <span className={styles.percentSymbol}>%</span>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="loanTerm" className={styles.label}>Length of loan</label>
        <select
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
          className={styles.select}
        >
          <option value="30">30 years</option>
          <option value="15">15 years</option>
        </select>
      </div>

      <div className={styles.resultGroup}>
        <span className={styles.label}>Monthly payment</span>
        <span className={styles.monthlyPayment}>${monthlyPayment}/mo</span>
      </div>

      <button onClick={calculateMonthlyPayment} className={styles.ctaButton}>
        Calculate payment
      </button>
    </div>
  );
}

export default Calculator;
