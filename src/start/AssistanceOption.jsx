import React from 'react';
import styles from './BettyAssistant.module.css';

function AssistanceOption({ icon, text }) {
  return (
    <button className={styles.assistanceOption}>
      <img src={icon} alt="" className={styles.optionIcon} />
      <span className={styles.optionText}>{text}</span>
    </button>
  );
}

function AssistanceOptions() {
  const options = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/42dcc5fd401a32cd1016c630eeb71cd2d1e784889c9fe4173a9f13f56d18b656?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", text: "Buying a home" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6884decde5c757e2ba2f39c0f0380b81ad1b5d4e51b51c1bd586145967ed677?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", text: "Refinance my mortgage" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4ea08d90750c447795143b1e7b7d7b1313370f390c4c625282a52fcbfc3f10d?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec", text: "Get cash from my home" }
  ];

  return (
    <section className={styles.assistanceOptions}>
      {options.map((option, index) => (
        <AssistanceOption key={index} icon={option.icon} text={option.text} />
      ))}
    </section>
  );
}

export default AssistanceOptions;