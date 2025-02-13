'use client'

import { motion } from 'motion/react'
import { useTranslations } from "next-intl";
import { Link } from '@/i18n/routing';

import styles from '../../styles/about.module.css';

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
                    <motion.div
                        className={styles.textSection} 
                        layoutId="textSection"
                        transition={{ duration: 1.5, ease: "easeInOut"}}
                    >
                        <p className={styles.iAm}>{t('iAm')}</p>
                        <p className={styles.name}>{t('name')}</p>
                    </motion.div>
                </section>

                <section className={styles.botSection}>
                    <motion.section
                        key="botSection"
                        initial={{ opacity: 0, translateY: 2000 }}
                        exit={{ opacity: 0, translateY: 2000}}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1.0, ease: "easeInOut"}}
                        className={styles.aboutMeSection}
                    >
                        <p>{t('about')}</p>
                        <p>{t('paragraph1')}</p>
                        <p>{t('paragraph2')}</p>
                        <p>{t('paragraph3')}</p>
                    </motion.section>
                </section>
                <section className={styles.linkSection}>
                    <motion.div
                        layoutId='aboutLink'
                        className={styles.aboutLinkSection}
                        transition={{ duration: 1.0, ease: "easeInOut"}}
                    >
                        <Link className={styles.aboutLink} href="/">{t('aboutLink')}</Link>
                    </motion.div>
                    <div className={styles.homeProjectsLinks}>
                        <motion.div
                            layoutId='homeLink'
                            className={styles.homeLinkSection}
                            initial={{translateX: -1000}}
                            animate={{translateX: 0}}
                            transition={{ duration: 2.0, ease: "easeInOut"}}
                        >
                            <Link className={styles.homeLink} href="/">{t('homeLink')}</Link>
                        </motion.div>
                        <motion.span
                            className={styles.linkDivider}
                            initial={{translateX: 1000}}
                            animate={{translateX: 0}}
                            transition={{ duration: 2.0, ease: "easeInOut"}}
                        >|</motion.span>
                        <motion.div
                            layoutId='projectsLink'
                            className={styles.projectsLinkSection}
                            initial={{translateX: 1000}}
                            animate={{translateX: 0}}
                            transition={{ duration: 1.0, ease: "easeInOut"}}
                        >
                            <Link className={styles.projectsLink} href="/projects">{t('projectsLink')}</Link>
                        </motion.div>

                    </div>
                </section>
            </div>
        </main>
    )
}