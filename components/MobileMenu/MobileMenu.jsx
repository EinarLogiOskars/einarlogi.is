'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import styles from './MobileMenu.module.css';

export default function MobileMenu({ isOpen, onClose }) {
    const t = useTranslations('Menu')
    return (
        <div
            className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
            onClick={onClose}
        >
            <nav className={styles.menu} onClick={(e) => e.stopPropagation()}>
                <ul>
                    <li>
                        <Link href='/' onClick={onClose}>{t('home')}</Link>
                    </li>
                    <li>
                        <Link href='/about' onClick={onClose}>{t('about')}</Link>
                    </li>
                    <li>
                        <Link href='/projects' onClick={onClose}>{t('projects')}</Link>
                    </li>
                    <li>
                        <Link href='/contact' onClick={onClose}>{t('contact')}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}