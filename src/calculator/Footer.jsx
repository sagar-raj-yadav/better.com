import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.companyInfo}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4047596c3a3e223201e0897003ef2dd26c013680e8fc1aa7f9dce5a0ea4b341c?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Better Logo" className={styles.footerLogo} />
          <p className={styles.companyDescription}>
            Better is a family of companies serving all your homeownership needs.
          </p>
        </div>
        <nav className={styles.footerNav}>
          <div className={styles.navColumn}>
            <h4 className={styles.navTitle}>Resources</h4>
            <ul className={styles.navList}>
              <li><a href="#calculator">Mortgage calculator</a></li>
              <li><a href="#affordability">Home affordability calculator</a></li>
              <li><a href="#refinance">Refinance calculator</a></li>
              {/* Add more resource links */}
            </ul>
          </div>
          <div className={styles.navColumn}>
            <h4 className={styles.navTitle}>Company</h4>
            <ul className={styles.navList}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
              {/* Add more company links */}
            </ul>
          </div>
          <div className={styles.navColumn}>
            <h4 className={styles.navTitle}>Legal</h4>
            <ul className={styles.navList}>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Use</a></li>
              <li><a href="#licensing">Licensing</a></li>
              {/* Add more legal links */}
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles.legalText}>
        {/* Add legal text and copyright information */}
      </div>
    </footer>
  );
}

export default Footer;