'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import styles from '../styles/home.module.css';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className={styles.hero}>
      <div className={styles.container}>
        <section className={styles.einarImgSection}>
            <img className={styles.einarImg} src='./einarlogi.webp' />
        </section>
        <section className={styles.mainSection}>
          <p className={styles.iAm}>
            {t('iAm')}
          </p>
          <p className={styles.name}>
            {t('name')}
          </p>
        </section>
      </div>
    </main>
  );
}
