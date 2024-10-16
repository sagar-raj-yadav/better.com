import React from 'react';
import styles from './TimelineEvent.module.css';

const TimelineEvent = ({ year, description, additionalInfo, cta }) => {
  return (
    <div className={styles.timelineEvent}>
      <div className={styles.yearBadge}>{year}</div>
      <div className={styles.eventContent}>
        <p className={styles.eventDescription}>{description}</p>
        {additionalInfo && additionalInfo.map((info, index) => (
          <p key={index} className={styles.additionalInfo}>{info}</p>
        ))}
        {cta && (
          <a href="#get-started" className={styles.ctaButton}>{cta}</a>
        )}
      </div>
    </div>
  );
};

export default TimelineEvent;