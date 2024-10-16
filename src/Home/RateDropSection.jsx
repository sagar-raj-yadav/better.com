import React from 'react';
import styles from './RateDropSection.module.css';
import RateDropAlert from './RateDropAlert';
import ApprovalForm from './ApprovalForm';
import RatingDisplay from './RatingDisplay';
import ProductHighlight from './ProductHighlight';
import QuestionSection from './QuestionSection';
import Header from './Header';

const RateDropSection = () => {
  return (
    <section className={styles.rateDropSection}>
      <div className={styles.contentWrapper}>
      <Header/>
        <RateDropAlert />
        <h1 className={styles.mainHeading}>
          The rate drop you've <br /> been waiting for
        </h1>
        <div className={styles.formContainer}>
          <ApprovalForm />
          <RatingDisplay />
        </div>
      </div>
      <ProductHighlight />
      <QuestionSection />
    </section>
  );
};

export default RateDropSection;