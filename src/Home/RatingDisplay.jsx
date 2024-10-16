import React from 'react';
import styles from './RateDropSection.module.css';

const RatingDisplay = () => {
  return (
    <div className={styles.ratingContainer}>
      <div className={styles.starRating}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0c663bc675bec4f59ffefb8136baf2382773a71fb35dc05e7ba77fc490a140d?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Star icon" className={styles.starIcon} />
        {[...Array(4)].map((_, index) => (
          <img key={index} src="https://cdn.builder.io/api/v1/image/assets/TEMP/610d5913aeea23d515fee82bb89f87fb846e07098200a9a2e164961f4f2a954f?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="" className={styles.starIcon} />
        ))}
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/180007f407697e2a3d7593d264fa9833dbc8c98aa440d1d9b2bacc4753d58fb6?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="" className={styles.starIcon} />
      </div>
      <p className={styles.ratingText}>4.6 Stars | 3177 Google reviews</p>
    </div>
  );
};

export default RatingDisplay;