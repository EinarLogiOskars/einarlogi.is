'use client';

import styles from './styles/home.module.css';

export default function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h5 className={styles.title}>Einar Logi</h5>
        </header>
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
