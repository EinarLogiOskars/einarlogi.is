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
              <img className={styles.einarImg} src='../einarlogi.webp' alt='Einar Logi' />
          </div>

          <div className={styles.namePhraseSection}>

            <div className={styles.nameSection}>
              <h1 className={styles.name}>{t('name')}</h1>
            </div>

            <div className={styles.phraseSection}>
              <CyclingPhrases />
            </div>

          </div>

        </section>
      </div>
    </main>
  );
}
