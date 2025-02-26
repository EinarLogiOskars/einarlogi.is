import { useTranslations } from 'next-intl';

import ProjectCardsWrapper from '@/components/ProjectCards/ProjectCardsWrapper';

import styles from '../../styles/projects.module.css';

export default function Projects() {
    const t = useTranslations('Projects');

    return (
        <main className={styles.hero}>
            <div className={styles.container}>
                <h1>{t('title')}<span>.</span></h1>
                <ProjectCardsWrapper />
            </div>
        </main>
    );
}