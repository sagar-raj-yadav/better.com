import React from "react";
import styles from './Header.module.css';
import NavigationLink from './NavigationLink';

const navLinks = [
  { text: "Buy", className: styles.navLink, to: "/" },
  { text: "Refinance", className: styles.navLink, to: "/" },
  { text: "HELOC", className: styles.navLink, to: "/" },
  { text: "Rates", className: styles.navLink, to: "/" },
  { text: "Better+", className: styles.navLink, to: "/" },
  { text: "Start", className: styles.navLink, to: "/start" },
  { text: "About Us", className: styles.navLink, to: "/about" },
  { text: "Calculator", className: styles.navLink, to: "/calculator" },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <nav className={styles.navigationLinks}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8507857921e272ffee04eb9897c6962066b7153774004dfed0d109ea2f8c8b80?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" className={styles.logo} alt="Company logo" />
          {navLinks.map((link, index) => (
            <NavigationLink key={index} {...link} />
          ))}
        </nav>
        <div className={styles.userActions}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf8a74d9333406f16f8eb4eac6bdbd58000db2f50800b22f3ea45fc41f8feca9?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" className={styles.userIcon} alt="" />
          <button className={styles.navLink}>Sign in</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
