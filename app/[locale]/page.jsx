'use client';

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import styles from '../styles/home.module.css';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className={styles.hero}>
      <div className={styles.container}>
        <section className={styles.topSection}>
          <motion.div
            className={styles.einarImgSection} 
            layoutId='einarImg'
            transition={{ duration: 1.5, ease: "easeInOut"}}
          >
            <img className={styles.einarImg} src='../einarlogi.webp' alt="Einar Logi" />
          </motion.div>
          <motion.div
            className={styles.textSection} 
            layoutId='textSection'
            transition={{ duration: 1.5, ease: "easeInOut"}}
          >
            <p className={styles.iAm}>
              {t('iAm')}
            </p>
            <p className={styles.name}>
              {t('name')}
            </p>
          </motion.div>
          <motion.div
            key="box"
            layoutId='aboutLink'
            transition={{ duration: 1.0, ease: "easeInOut"}}
            className={styles.linkSection}
          >
            <Link className={styles.aboutLink} href="/about">{t('aboutLink')}</Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
