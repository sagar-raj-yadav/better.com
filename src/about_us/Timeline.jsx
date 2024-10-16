import React from 'react';
import TimelineEvent from './TimeLineEvent';
import styles from './Timeline.module.css';

const timelineData = [
  {
    year: '2014',
    description: "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all."
  },
  {
    year: '2015',
    description: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)."
  },
  {
    year: '2016',
    description: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors."
  },
  {
    year: '2017',
    description: "Better expands into the real estate market with Better Real Estate."
  },
  {
    year: '2018',
    description: "Better Mortgage partners with Ally Bank to build Ally powered by Better."
  },
  {
    year: '2019',
    description: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers."
  },
  {
    year: '2021',
    description: "Better acquires Trussle — The UK's most innovative online mortgage broker."
  },
  {
    year: '2022',
    description: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online."
  },
  {
    year: '2023',
    description: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
    additionalInfo: [
      "Better Mortgage launches the fully digital 3-day HELOC².",
      "Better Mortgage launches One Day Verified Approval Letter."
    ]
  },
  {
    year: 'Today',
    description: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
    cta: "Get started"
  }
];

const Timeline = () => {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.timelineTitle}>Company timeline</h2>
      <div className={styles.timelineEvents}>
        {timelineData.map((event, index) => (
          <TimelineEvent key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;