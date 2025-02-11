'use client';

import Hamburger from '@/components/Hamburger/Hamburger';
import styles from './styles/home.module.css';

export default function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles.container}>
        <section className={styles.einarImgSection}>
            <img className={styles.einarImg} src='./einarlogi.webp' />
        </section>
        <section className={styles.mainSection}>
          <p className={styles.iAm}>
            I am
          </p>
          <p className={styles.name}>
            Einar Logi.
          </p>
        </section>
      </div>
    </main>
  );
}
