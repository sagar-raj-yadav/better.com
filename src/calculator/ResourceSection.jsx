import React from "react";
import styles from "./ResourceSection.module.css";

function ResourceSection() {
  const resources = [
    {
      title: "Get pre-approved to see how much you can borrow",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/50682a6981ac4623dfa1d6b252c1ac8d9ccfa1ac6f79f9957190737ed4ddbe02?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec",
      cta: "Get started →",
      note: "Won't impact your credit",
    },
    {
      title: "See today's rates in your area",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c59cd26bb5fef8ccf1cf618c353bf19a299bf390ec7524bb2c42354d26a7861?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec",
      cta: "See rates →",
    },
    {
      title: "Find out your max homebuying budget",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3cf986cf4ffda21b9326ba1036ebc7c26c16eaf7cf1eaea50b52f431a89fd9af?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec",
      cta: "Try our mortgage calculator →",
    },
  ];

  return (
    <section className={styles.resourceSection}>
      <h2 className={styles.title}>More resources</h2>
      <div className={styles.resourceGrid}>
        {resources.map((resource, index) => (
          <div key={index} className={styles.resourceCard}>
            <img src={resource.icon} alt="" className={styles.resourceIcon} />
            <h3 className={styles.resourceTitle}>{resource.title}</h3>
            <a href="#" className={styles.resourceCta}>{resource.cta}</a>
            {resource.note && <p className={styles.resourceNote}>{resource.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResourceSection;