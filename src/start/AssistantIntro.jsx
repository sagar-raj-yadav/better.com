import React from 'react';
import styles from './BettyAssistant.module.css';

function AssistantIntro() {
  return (
    <section className={styles.assistantIntro}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/873daee9f20aeda17271718fba73abaffe1f41b41a2b20f5b1dc33fb6cfd2f5f?placeholderIfAbsent=true&apiKey=d35f81b3699b43f08a6b303ba769e4ec" alt="Betty Assistant" className={styles.assistantAvatar} />
      <h1 className={styles.assistantGreeting}>
        Hi, I'm Betty!<br />
        What can I help you with?
      </h1>
    </section>
  );
}

export default AssistantIntro;