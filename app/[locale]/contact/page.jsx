import { useTranslations } from 'next-intl';

import Tabs from '@/components/Tabs/Tabs';

import styles from '../../styles/contact.module.css';

export default function Contact() {
    const t = useTranslations('Contact');

    return (
        <main className={styles.hero}>
            <div className={styles.container}>

                <section className={styles.topSection}>

                    <h1>{t('title')}</h1>
                    <p>{t('titleText')}</p>

                </section>

                <section className={styles.options}>

                    <div className={styles.tabWrapper}>
                        <div className={styles.tab}><Tabs /></div>
                    </div>

                    <div className={styles.option}>

                    </div>

                    <div className={styles.option}>
                        <span>
                       
                        </span>
                    </div>

                    <div className={styles.option}>
                        <span>
                       
                        </span>
                    </div>

                    <div className={styles.option}>
                        <span>
                       
                        </span>
                    </div>

                </section>
            </div>
        </main>
    )
}