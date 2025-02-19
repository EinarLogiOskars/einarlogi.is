import { useTranslations } from "next-intl";

import styles from '../../styles/about.module.css';
import CyclingPhrases from '@/components/CyclingPhrases';
import AnimatedElement from '@/components/AnimatedElement';

export default function About() {
    const t = useTranslations('About');

    return (
        <main className={styles.hero}>
            <div className={styles.container}>
                <section className={styles.topSection}>

                    <div className={styles.einarImgSection} >
                        <AnimatedElement
                            layoutId={'einarImg'}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            <img className={styles.einarImg} src='../einarlogi.webp' alt='Einar Logi' />
                        </AnimatedElement>
                    </div>

                    <div className={styles.nameSection}>
                        <AnimatedElement
                            layoutId={'nameSection'}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            <h1 className={styles.name}>{t('name')}</h1>
                        </AnimatedElement>
                    </div>

                    <div className={styles.phraseSection}>
                        <AnimatedElement
                            layoutId={'phrases'}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            <CyclingPhrases />
                        </AnimatedElement>
                    </div>

                </section>
                <section className={styles.botSection}>
                    <div className={styles.aboutMeSection}>
                        <AnimatedElement
                            key="botSection"
                            initial={{ opacity: 0, translateY: 2000 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: -2000 }}
                            transition={{ duration: 1.5, ease: "easeInOut"}}
                        >
                            <p key="about">{t('about')}</p>
                            <p key='paragraph1'>{t('paragraph1')}</p>
                            <p key='paragraph2'>{t('paragraph2')}</p>
                            <p key='paragraph3'>{t('paragraph3')}</p>
                        </AnimatedElement>
                    </div>
                </section>
            </div>
        </main>
    )
}