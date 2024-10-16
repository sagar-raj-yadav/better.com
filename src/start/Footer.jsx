import React from 'react';
import styles from './BettyAssistant.module.css';

function Footer() {
  const companyInfo = [
    { logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/af58fa4830c1c9195a32755e0fa4f8604ac21a3f51410bdb7052702a8fd58c22?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", description: "Better is a family of companies serving all your homeownership needs." },
    { logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/9685443d62c3c6594f045b1211d327aa8b6f34e9c1b78ed61a9182156525f6fd?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", description: "We can't wait to say \"Welcome home.\" Apply 100% online, with expert customer support." },
    { logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/5731710fb79802b7231492a68c1d30a14a03f207c393d1a19d7252863161db85?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", description: "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save." },
    { logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/61e3e29385879f087016bca2508c98d09b19232c4461ad9fa248fa506c83916b?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", description: "Shop, bundle, and save on insurance coverage for home, auto, life, and more." },
    { logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba51823ff97874eeb2c4f911735954cc1d988384c2d5c34534ca832762156d43?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", description: "Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee." },
    { logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/88e6b2efbce2a2ac4d9ad329013f0f5882312405b12adc983d3ddba4d9aac0c2?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", description: "Get transparent rates when you shop for title insurance all in one convenient place." }
  ];

  const footerSections = [
    {
      title: "Resources",
      links: ["Home affordability calculator", "Mortgage calculator", "Free mortgage calculator", "Mortgage calculator with taxes", "Mortgage calculator with PMI", "Rent vs buy calculator", "HELOC payment calculator", "HELOC vs cash-out refinance calculator", "Buy a home", "Sell a home", "Get home inspection"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Media", "Partner With Us", "Learning center", "FAQs", "Investor Relations"]
    },
    {
      title: "Contact Us",
      links: ["hello@better.com", "415-523-8837", "FAQ", "Glossary"]
    },
    {
      title: "Legal",
      links: ["NMLS Consumer Access", "Privacy Policy", "Terms of Use", "Disclosures & Licensing", "Affiliated Business", "Browser Disclaimer"]
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.companyInfoSection}>
        {companyInfo.map((info, index) => (
          <div key={index} className={styles.companyInfoItem}>
            <img src={info.logo} alt="" className={styles.companyLogo} />
            <p className={styles.companyDescription}>{info.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.footerLinksSection}>
        {footerSections.map((section, index) => (
          <div key={index} className={styles.footerLinkColumn}>
            <h3 className={styles.footerLinkTitle}>{section.title}</h3>
            <ul className={styles.footerLinkList}>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}><a href="#" className={styles.footerLink}>{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.socialMediaSection}>
        <a href="#" className={styles.socialMediaLink}><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/66c5c3947039843cc6d1301ff8d1eaf4f4da7e516a6e431008ce8a761facb17c?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Facebook" /></a>
        <a href="#" className={styles.socialMediaLink}><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c128aba5d751703bd421b277090bf5351d66dd91b13f87f434dc227fada7bec?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Twitter" /></a>
      </div>
      <div className={styles.legalSection}>
        <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/520709b3e132424d523202ebebaa38d4bfb844ae5f3568db363ba4660ef5acbf?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Legal document 1" /></a>
          <a href="#" className={styles.legalLink}><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b327bef8054d9a4c289b145a3c0f9b714ae5d23c61a2b5fbe11ae9017c9a49ee?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Legal document 2" /></a>
          <a href="#" className={styles.legalLink}><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9afc9b4f0f63b64291f3bb10f2bfb75a297cbdc5e9e6b045cabd2fb1a8c87a44?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Legal document 3" /></a>
        </div>
        <hr className={styles.footerSeparator} />
        <div className={styles.legalText}>
          <p>© 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.</p>
          <p>Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a href="#" className={styles.legalLink}>NMLS Consumer Access</a></p>
          <p>Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC's <a href="#" className={styles.legalLink}>license numbers</a>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents ("Better Real Estate Partner Agents"). Equal Housing Opportunity. All rights reserved.</p>
          <p><a href="#" className={styles.legalLink}>New York State Housing and Anti-Discrimination Notice</a><br />New York Standard Operating Procedures</p>
          <p>Texas Real Estate Commission: <a href="#" className={styles.legalLink}>Information About Brokerage Services</a> | <a href="#" className={styles.legalLink}>Consumer Protection Notice</a></p>
          <p>Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.</p>
          <p>Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.</p>
          <p>Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC's <a href="#" className={styles.legalLink}>license numbers</a>.</p>
          <p>Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.</p>
          <p>Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, LLC dbs Better Attorney Match, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.</p>
          <p>Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;