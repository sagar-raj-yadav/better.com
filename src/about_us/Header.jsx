import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <nav className={styles.navigation}>
    <Link to="/">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c5220c1642b3f7515f1b55107524562c15f3cf04ab55dc6f946cf59a330ae59?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Better logo" className={styles.logo} />
        </Link>
          <ul className={styles.navLinks}>
            <li><a href="#buy">Buy</a></li>
            <li><a href="#refinance">Refinance</a></li>
            <li><a href="#heloc">HELOC</a></li>
            <li><a href="#rates">Rates</a></li>
            <li><a href="#better-plus">Better+</a></li>
          </ul>
        </nav>
        <div className={styles.userActions}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e46ac9a4662f29f67fdbc6439f7b2ae5f93bc78a7ba07a4c3c2d17a14aeb854f?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="User icon" className={styles.userIcon} />
          <a href="#sign-in" className={styles.signIn}>Sign in</a>
        </div>
      </div>
    </header>
  );
};

export default Header;