'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl';

import styles from '../styles/home.module.css';
import CyclingPhrases from '@/components/CyclingPhrases';

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
          <div className={styles.namePhraseSection}>
            <div className={styles.nameSection}>
              <motion.div
                layoutId='nameSection'
                transition={{ duration: 1.5, ease: "easeInOut"}}
              >
                <h1 className={styles.name}>
                  {t('name')}
                </h1>
              </motion.div>
            </div>
            <motion.div
              className={styles.phraseSection}
              layoutId='phrases'
              transition={{ duration: 1.5, ease: "easeInOut"}}
            >
              <CyclingPhrases />
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
