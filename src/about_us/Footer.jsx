import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <div className={styles.footerLogo}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/83b158ee66f9deb3c23662faf3aab4c1a56c0e0f1e93995d043a89d5ea3251db?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Better logo" className={styles.logo} />
            <p className={styles.logoDescription}>
              Better is a family of companies serving all your homeownership needs.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <h3 className={styles.footerLinksTitle}>Resources</h3>
            <div className={styles.footerLinksGrid}>
              {/* Add footer links here */}
            </div>
          </div>
          <div className={styles.footerCompany}>
            <h3 className={styles.footerCompanyTitle}>Company</h3>
            <nav className={styles.footerNav}>
              <ul>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#media">Media</a></li>
                <li><a href="#partner-with-us">Partner With Us</a></li>
                <li><a href="#learning-center">Learning center</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#investor-relations">Investor Relations</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.footerContact}>
            <h3 className={styles.footerContactTitle}>Contact Us</h3>
            <p className={styles.contactEmail}>hello@better.com</p>
            <p className={styles.contactPhone}>415-523-8837</p>
            <nav className={styles.footerLegalNav}>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#glossary">Glossary</a></li>
              </ul>
            </nav>
            <h3 className={styles.footerLegalTitle}>Legal</h3>
            <nav className={styles.footerLegalNav}>
              <ul>
                <li><a href="#nmls-consumer-access">NMLS Consumer Access</a></li>
                <li><a href="#privacy-policy">Privacy Policy</a></li>
                <li><a href="#terms-of-use">Terms of Use</a></li>
                <li><a href="#disclosures-licensing">Disclosures & Licensing</a></li>
                <li><a href="#affiliated-business">Affiliated Business</a></li>
                <li><a href="#browser-disclaimer">Browser Disclaimer</a></li>
              </ul>
            </nav>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0197d8275ddc3af5bc5771394dcb79bb1b16c5addbf0b8e459a2024131bca00?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Equal Housing Opportunity" className={styles.equalHousingLogo} />
          </div>
        </div>
        <div className={styles.footerSocial}>
          <a href="#facebook" aria-label="Facebook"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0239d208bc9dbeb93c1a6075039689420f19ba8b42eca306753c2cf5e8ea55d7?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="" className={styles.socialIcon} /></a>
          <a href="#twitter" aria-label="Twitter"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6d6a7261e86f6c989dff353167ab90f4e19a9a1784d836df46036caff2f522b?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="" className={styles.socialIcon} /></a>
          <a href="#linkedin" aria-label="LinkedIn"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0883024d3166605d6f7dbb18fa2755bf4752ee70048d3aab776cbd7f0d84b7ca?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="" className={styles.socialIcon} /></a>
        </div>
        <div className={styles.footerLegal}>
          {/* Add legal text here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;