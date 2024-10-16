import React, { useState } from "react";
import Header from "./Header";
import Calculator from "./Calculator";
import MonthlyBreakdown from "./MonthlyBreakdown";
import ResourceSection from "./ResourceSection";
import Footer from "./Footer";
import styles from "./MortgageCalculator.module.css";

function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(3.5); // Example rate
  const [loanTerm, setLoanTerm] = useState(30); // Example term in years
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Function to calculate monthly mortgage payment
  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;
    const monthly =
      principal *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
    
    setMonthlyPayment(monthly.toFixed(2)); // Rounding to 2 decimals
  };

  return (
    <div className={styles.mortgageCalculator}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.calculatorSection}>
          <h1 className={styles.title}>Mortgage calculator</h1>
          <p className={styles.description}>
            Our mortgage calculator includes key factors like homeowners association fees, property taxes, and
            private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
          </p>
          <Calculator
            homePrice={homePrice}
            setHomePrice={setHomePrice}
            downPayment={downPayment}
            setDownPayment={setDownPayment}
            interestRate={interestRate}
            setInterestRate={setInterestRate}
            loanTerm={loanTerm}
            setLoanTerm={setLoanTerm}
            calculateMonthlyPayment={calculateMonthlyPayment}
            monthlyPayment={monthlyPayment}
          />
        </section>
        <MonthlyBreakdown monthlyPayment={monthlyPayment} />
        <ResourceSection />
      </main>
      <Footer />
    </div>
  );
}

export default MortgageCalculator;
