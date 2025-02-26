import { ProjectCards } from '@/components/ProjectCards/ProjectCards';

import styles from '../../styles/projects.module.css';

export default function Projects() {

    return (
        <main className={styles.hero}>
            <div className={styles.container}>
                
                <ProjectCards />
            </div>
        </main>
    );
}