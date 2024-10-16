import React from 'react';
import styles from './BettyAssistant.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
    <Link to="/">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9585c2e64976b00173681790acff0357541670d73828722aed0626375633a64?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Better logo" className={styles.logo} />
    </Link>  
      <div className={styles.contactInfo}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b839b29fba1cde988e5db723d4a80c4bf4b0b5560cff39fbf256312542dee6?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="" className={styles.contactIcon} />
        <p className={styles.contactText}>Need help? Call (415) 523 8837</p>
      </div>
    </header>
  );
}

export default Header;