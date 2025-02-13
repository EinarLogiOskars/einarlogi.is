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
            transition={{
              type: "keyframes",
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
              damping: 40,
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
            <motion.div
              key="box"
              initial={{translateX: -1000}}
              animate={{translateX: 0}}
              className={styles.botSection}
            >
              <Link key="link" className={styles.aboutLink} href="/about">{t('aboutLink')}</Link>
            </motion.div>
        </section>
      </div>
    </main>
  );
}
