import { useTranslations } from "next-intl";

import CyclingPhrases from "@/components/CyclingPhrases";
import AnimatedElement from "@/components/AnimatedElement";

import styles from '../../styles/projects.module.css';

export default function Projects() {
    const t = useTranslations('Projects');
    return (
        <main className={styles.hero}>
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
            <div style={{ height: '80dvh', display: 'flex', flexDirection: 'column'}}>
                <div style={{ alignSelf: 'center', justifySelf:'center', marginTop: '30dvh', fontFamily: 'Inter'}}>
                    <h1>Projects</h1>
                    <h5>Work in progress</h5>
                </div>
            </div>
        </main>
    );
}