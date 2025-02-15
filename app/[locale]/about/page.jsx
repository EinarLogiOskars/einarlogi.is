'use client'

import { motion } from 'motion/react'
import { useTranslations } from "next-intl";
import { useEffect, useState } from 'react';

import styles from '../../styles/about.module.css';
import CyclingPhrases from '@/components/CyclingPhrases';

export default function About() {
    const t = useTranslations('About');

    return (
        <main className={styles.hero}>
            <div className={styles.container}>
                <section className={styles.topSection}>

                    <motion.div
                        className={styles.einarImgSection} 
                        layoutId="einarImg"
                        transition={{ duration: 1.5, ease: "easeInOut"}}
                    >
                        <img className={styles.einarImg} src="../einarlogi.webp" alt="Einar Logi" />
                    </motion.div>

                    <div className={styles.nameSection}>
                        <motion.div
                            layoutId="nameSection"
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

                </section>
                <section className={styles.botSection}>
                    <motion.section
                        key="botSection"
                        initial={{ opacity: 0, translateY: 2000 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut"}}
                        className={styles.aboutMeSection}
                    >
                        <p>{t('about')}</p>
                        <p>{t('paragraph1')}</p>
                        <p>{t('paragraph2')}</p>
                        <p>{t('paragraph3')}</p>
                    </motion.section>
                </section>
            </div>
        </main>
    )
}