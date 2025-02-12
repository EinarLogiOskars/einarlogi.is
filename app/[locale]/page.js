'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import styles from '../styles/home.module.css';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className={styles.hero}>
      <div className={styles.container}>
        <section className={styles.mainSection}>
          <motion.div
            className={styles.einarImgSection} 
            layoutId='einarImg'
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 40,
              duration: 1.5,
            }}
          >
            <img className={styles.einarImg} src='../einarlogi.webp' alt="Einar Logi" />
          </motion.div>
          <motion.div
            className={styles.textSection} 
            layoutId='textSection'
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 1.5,
            }}
          >
            <p className={styles.iAm}>
              {t('iAm')}
            </p>
            <p className={styles.name}>
              {t('name')}
            </p>
          </motion.div>
          <div className={styles.botSection}>
            <Link className={styles.aboutLink} href="/about">{t('aboutLink')}</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
