import { useTranslations } from "next-intl";

import styles from '../../styles/projects.module.css';

export default function Projects() {
    const t = useTranslations('Projects');
    return (
        <main className={styles.hero}>
            <div style={{ height: '80dvh', display: 'flex', flexDirection: 'column'}}>
                <div style={{ alignSelf: 'center', justifySelf:'center', marginTop: '30dvh', fontFamily: 'Inter'}}>
                    <h1>Projects</h1>
                    <h5>Work in progress</h5>
                </div>
            </div>
        </main>
    );
}