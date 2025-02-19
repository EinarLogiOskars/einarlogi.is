import { useTranslations } from 'next-intl';

import CyclingPhrases from '@/components/CyclingPhrases';
import AnimatedElement from '@/components/AnimatedElement';

import styles from '../../styles/contact.module.css';

export default function Contact() {
    const t = useTranslations('Contact');

    return (
        <main className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.imgAndPhrases}>

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

                </div>

                <section className={styles.topSection}>

                    <h1>{t('title')}</h1>
                    <p>{t('titleText')}</p>

                </section>

                <section className={styles.options}>

                    <div className={styles.option}>
                        <div>
                            <svg width="1000" height="1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                                <path id="vector" fill="none" stroke="currentColor" stroke-width="50" stroke-linecap="round" stroke-linejoin="round" d="M 666.666687 783.333313 L 333.333344 783.333313 C 233.333328 783.333313 166.666672 733.333313 166.666672 616.666626 L 166.666672 383.333313 C 166.666672 266.666687 233.333328 216.666687 333.333344 216.666687 L 666.666687 216.666687 C 766.666687 216.666687 833.333313 266.666687 833.333313 383.333313 L 833.333313 616.666626 C 833.333313 733.333313 766.666687 783.333313 666.666687 783.333313 Z"/>
                                <path id="vector2" fill="none" stroke="currentColor" stroke-width="50" stroke-linecap="round" d="M 725.660034 358.960022 L 540.76001 501.83667 C 516.75 520.386658 483.243347 520.386658 459.233337 501.83667 L 274.332672 358.960022"/>
                            </svg>
                        </div>
                        <h5>Email</h5>
                    </div>

                    <div className={styles.option}>

                    </div>

                </section>
            </div>
        </main>
    )
}