'use client'

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            duration: 1.5,
                          }}
                    >
                        <img className={styles.einarImg} src="../einarlogi.webp" alt="Einar Logi" />
                    </motion.div>
                    <motion.div
                        className={styles.textSection} 
                        layoutId="textSection"
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            duration: 1.5,
                        }}
                    >
                        <p className={styles.iAm}>{t('iAm')}</p>
                        <p className={styles.name}>{t('name')}</p>
                    </motion.div>
                </section>

                <motion.section
                    key="botSection"
                    initial={{ opacity: 0, translateY: 2000 }}
                    exit={{ opacity: 0, translateY: 2000}}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1.0, ease: "easeInOut"}}
                    className={styles.botSection}
                >
                    <p>{t('about')}</p>
                    <p>{t('paragraph1')}</p>
                    <p>{t('paragraph2')}</p>
                    <p>{t('paragraph3')}</p>
                </motion.section>

            </div>
        </main>
    )
}