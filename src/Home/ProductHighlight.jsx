import React from 'react';
import styles from './RateDropSection.module.css';

const ProductHighlight = () => {
  const testimonials = ['Arian', 'Amanda', 'Paul'];

  return (
    <section className={styles.productHighlight}>
      <div className={styles.testimonialSection}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/01bfdd6f5e48980ba326bee4610160faf2e982db9d04cfccadb76e5fcc1a6073?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Customer testimonial" className={styles.testimonialImage} />
        <div className={styles.testimonialButtons}>
          {testimonials.map((name, index) => (
            <button key={index} className={styles.testimonialButton}>{name}</button>
          ))}
        </div>
      </div>
      <div className={styles.callToAction}>
        <h2 className={styles.ctaHeading}>
          Find out why <br /> we're better.
        </h2>
        <a href="#stories" className={styles.ctaLink}>See all our stories</a>
        <div className={styles.trustpilot}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd81a9e3ac6241e7c118c0038d601787dfe3131b0067a80be76c32ba5cb15ce4?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Trustpilot logo" className={styles.trustpilotLogo} />
          <span className={styles.trustpilotRating}>Excellent</span>
          <span className={styles.trustpilotScore}>4.4 <span className={styles.outOf}>out of 5</span></span>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;