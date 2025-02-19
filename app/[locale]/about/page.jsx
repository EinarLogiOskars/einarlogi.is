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
                        <img className={styles.einarImg} src='../einarlogi.webp' alt='Einar Logi' />
                    </div>

                    <div className={styles.nameSection}>
                        <h1 className={styles.name}>{t('name')}</h1>
                    </div>

                    <div className={styles.phraseSection}>
                        <CyclingPhrases />
                    </div>

                </section>
                <section className={styles.botSection}>
                    <div className={styles.aboutMeSection}>
                        <p key="about">{t('about')}</p>
                        <p key='paragraph1'>{t('paragraph1')}</p>
                        <p key='paragraph2'>{t('paragraph2')}</p>
                        <p key='paragraph3'>{t('paragraph3')}</p>
                    </div>
                </section>
            </div>
        </main>
    )
}