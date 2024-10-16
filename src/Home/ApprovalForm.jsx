import React from 'react';
import styles from './RateDropSection.module.css';

const ApprovalForm = () => {
  return (
    <form className={styles.approvalForm}>
      <button type="submit" className={styles.submitButton}>Start my approval</button>
      <div className={styles.formInfo}>
        <span className={styles.timeEstimate}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/abd44802aeca4390d8f409057f74e97fc115ba1de0d218f672f3d12711e14809?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="" className={styles.clockIcon} />
          3 min
        </span>
        <span className={styles.creditImpact}>| No credit impact</span>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/79d095e06abfdcf5f5f4a3d0d99595cba3c49aaf27014737190d04f73c5c72ee?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Approval process illustration" className={styles.approvalImage} />
    </form>
  );
};

export default ApprovalForm;