import React from 'react';
import styles from './ChangingThings.module.css';

const ChangingThings = () => {
  return (
    <section className={styles.changingThingsSection}>
      <div className={styles.changingThingsContent}>
        <h2 className={styles.changingThingsTitle}>How we're changing things</h2>
        <p className={styles.changingThingsDescription}>
          Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home <br />
          finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are <br />
          misaligned with consumers'.
        </p>
        <p className={styles.changingThingsApproach}>
          That's why Better.com is redefining the homeownership process from the ground up. We're using technology to make it faster and more <br />
          efficient, and humans to help make it friendly and enjoyable.
        </p>
      </div>
    </section>
  );
};

export default ChangingThings;