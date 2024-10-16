import React from 'react';
import styles from './BackedBy.module.css';

const BackedBy = () => {
  return (
    <section className={styles.backedBySection}>
      <h2 className={styles.backedByTitle}>Backed by</h2>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/54eaeaa34573ba71a6ed05561e57c620e6873393f8376754197ea0f47cbeb765?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Backed by companies" className={styles.backedByImage} />
    </section>
  );
};

export default BackedBy;