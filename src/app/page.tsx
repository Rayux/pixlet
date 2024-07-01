'use client';

import { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './page.module.css';

export default function Page() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  useEffect(() => {
    setTimeout(() => {
      flipCard();
    }, 1000);
  });

  return (
    <main className={styles.homepage}>
      <header className={styles.navBar}>
        <div className={styles.navTitle}>PIXLET.</div>
        <nav className="flex space-x-4">
          <a href="#about" className={styles.navItem}>About</a>
          <a href="#contact" className={styles.navItem}>Contact</a>
          <a href="#donate" className={styles.navItem}>Donate</a>
        </nav>
      </header>
      <div className={styles.content}>
        <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
          <div>
            <img src="/flip-watermelon.svg" alt="flipping flower animation" className={styles.animation} />
          </div>
          <div>
            <img src="/flip-flower.svg" alt="flipping watermelon animation" className={styles.animation} />
          </div>
        </ReactCardFlip>
        <p className={styles.subtitle}>
          Get 5 chances to guess why today matters
        </p>
        <div className="flex space-x-4">
          {/* tktk - bolder should be modulized */}
          <button className={styles.primaryButton}>
            How to play
          </button>
          <button className={styles.secondaryButton}>
            Play
          </button>
        </div>
      </div>
    </main>
  );
}