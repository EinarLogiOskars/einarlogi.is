import { useTranslations } from 'next-intl';

import Tabs from '@/components/Tabs/Tabs';

import styles from '../../styles/contact.module.css';

export default function Contact() {
    const t = useTranslations('Contact');

    return (
        <main className={styles.hero}>
            <div className={styles.container}>

                <section className={styles.topSection}>

                    <div className={styles.textContainer}>
                        <h1>{t('title')}</h1>
                        <p>{t('titleText')}</p>
                    </div>

                </section>

                <section className={styles.options}>

                    <div className={styles.tabWrapper}>
                        <Tabs />
                    </div>

                </section>
            </div>
        </main>
    )
}