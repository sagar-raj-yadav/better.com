import React from 'react';
import styles from './Mission.module.css';

const Mission = () => {
  return (
    <section className={styles.missionSection}>
      <h1 className={styles.missionTitle}>Our mission</h1>
      <p className={styles.missionStatement}>
        We're making homeownership simpler, faster —<br />
        and most importantly, more accessible for all <br />
        Americans.
      </p>
      <div className={styles.missionContent}>
        <div className={styles.missionText}>
          <h2 className={styles.statusQuoTitle}>The status quo is broken</h2>
          <p className={styles.statusQuoDescription}>
            The traditional processes around homeownership are opaque <br />
            and stressful. Fees aren't transparent and some are simply <br />
            outrageous in size. Traditional mortgage lending is rife with <br />
            unnecessary fees and slow, painful processes. It's a system set <br />
            up to benefit insiders — not you. Better.com CEO, Vishal Garg, <br />
            set out to change that.
          </p>
          <a href="#vishal-story" className={styles.storyLink}>Read Vishal's story</a>
        </div>
        <div className={styles.missionImage}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e868b6b9848ce3d45458b9fec463fcf547968af55aa1341cdd1dbc5be42e366?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Mission background" className={styles.backgroundImage} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b194938a2984a16588210f1b2aeb7c593f190d09a040cb3cdab9dd3f6fe762ce?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Mission icon" className={styles.iconImage} />
        </div>
      </div>
    </section>
  );
};

export default Mission;