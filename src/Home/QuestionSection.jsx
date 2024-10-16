import React from 'react';
import styles from './RateDropSection.module.css';

const QuestionSection = () => {
  const topics = ['Our products', 'Calculators', 'Guides & FAQs'];

  return (
    <section className={styles.questionSection}>
      <h2 className={styles.questionHeading}>
        Got questions? <br /> We've got answers
      </h2>
      <div className={styles.topicButtons}>
        {topics.map((topic, index) => (
          <button key={index} className={styles.topicButton}>{topic}</button>
        ))}
      </div>
    </section>
  );
};

export default QuestionSection;