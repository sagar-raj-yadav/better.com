import React from "react";
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <nav className={styles.mainNav}>
    <Link to="/">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f18374aa2f6f087845e4cabec19d942af8e8c3047b4074bcf94d21bfe7b6ef51?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Company Logo" className={styles.logo} />
         </Link>
          <ul className={styles.navList}>
            <li><a href="#buy" className={styles.navLink}>Buy</a></li>
            <li><a href="#refinance" className={styles.navLink}>Refinance</a></li>
            <li><a href="#heloc" className={styles.navLink}>HELOC</a></li>
            <li><a href="#rates" className={styles.navLink}>Rates</a></li>
            <li><a href="#better" className={styles.navLink}>Better+</a></li>
          </ul>
        </nav>
        <div className={styles.userActions}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c30544a65be218deccf4acdf67c534ba2981b167b53eb7be6d7d5657d1a04545?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="" className={styles.userIcon} />
          <a href="#signin" className={styles.signInLink}>Sign in</a>
        </div>
      </div>
    </header>
  );
}

export default Header;