'use client';

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useEffect, useState } from 'react';

import styles from '../styles/home.module.css';

export default function Home() {
  const t = useTranslations('Home');

  const [firstVisit, setFirstVisit] = useState(false);
  
  useEffect(() => {

      const hasVisited = sessionStorage.getItem('hasVisited');

      if (!hasVisited) {
        setFirstVisit(true);
        sessionStorage.setItem('hasVisited', 'true');  
      }

  }, []);

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
          <div className={styles.textSection}>
            <motion.div
              className={styles.nameSection} 
              layoutId='nameSection'
              transition={{ duration: 1.5, ease: "easeInOut"}}
            >
              <p className={styles.name}>
                {t('name')}
              </p>
            </motion.div>
            <motion.div
              className={styles.titleSection} 
              layoutId='titleSection'
              transition={{ duration: 1.5, ease: "easeInOut"}}
            >
              <p className={styles.title}>
                {t('title')}
              </p>
            </motion.div>
          </div>
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
