import { useTranslations } from 'next-intl';

import CyclingPhrases from '@/components/CyclingPhrases';
import AnimatedElement from '@/components/AnimatedElement';

import styles from '../styles/home.module.css';

export default function Home() {
  const t = useTranslations('Home');

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

          <div className={styles.namePhraseSection}>

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

        </section>
      </div>
    </main>
  );
}
