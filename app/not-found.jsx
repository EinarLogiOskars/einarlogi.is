import { routing } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import Link from 'next/link';
import BaseLayout from '@/components/BaseLayout';
import styles from './styles/not-found.module.css';

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <BaseLayout locale={routing.defaultLocale}>
            <div className={styles.container}>
                <div className={styles.notFound}>
                    <h1>404</h1>
                    <p><span>|</span></p>
                    <p>{t('text')}</p>
                </div>
                <Link href="/">{t('link')}</Link>
            </div>
        </BaseLayout>
    );
}