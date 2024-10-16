import React from 'react';
import styles from './BettyAssistant.module.css';

function FeatureItem({ icon, text }) {
  return (
    <li className={styles.featureItem}>
      <img src={icon} alt="" className={styles.featureIcon} />
      <span className={styles.featureText}>{text}</span>
    </li>
  );
}

function UnlockFeatures() {
  const features = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c848e81e076909953d8a00c871d558728a79a8cc387fa3dd7b536c7dd3cec61?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", text: "Custom mortgage rates" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb69ef10a3171a796735a4155b47e75206644a6729874e26ea464cddbc3d1592?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", text: "Exclusive offers" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8c0796ffd137b95def2ac87524c7a50c820bec5f27e281bae441b56bd10cd45?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", text: "A personalized dashboard" }
  ];

  return (
    <section className={styles.unlockFeatures}>
      <h2 className={styles.unlockTitle}>After a few questions, you'll unlock:</h2>
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} text={feature.text} />
        ))}
      </ul>
    </section>
  );
}

export default UnlockFeatures;