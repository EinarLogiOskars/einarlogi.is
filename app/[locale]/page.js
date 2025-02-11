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
            transition={{ type: "keyframes", duration: 1.0, ease: "easeInOut"}}
          >
            <img className={styles.einarImg} src='./einarlogi.webp' />
          </motion.div>
          <motion.div
            className={styles.textSection} 
            layoutId='textSection'
            transition={{ type: "keyframes", duration: 1.0, ease: "easeInOut"}}
          >
            <p className={styles.iAm}>
              {t('iAm')}
            </p>
            <p className={styles.name}>
              {t('name')}
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
