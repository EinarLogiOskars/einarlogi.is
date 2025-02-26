import { fetchProjects } from '@/sanity/fetchProjects';
import { getLocale } from 'next-intl/server';
import { urlFor } from '@/sanity/imageUrl';


import styles from './ProjectCards.module.css';

export async function ProjectCards() {
    const projects = await fetchProjects();
    const locale = await getLocale();



    return (
        <div className={styles.cardGrid}>
            {projects.map((project) => (
                <div
                    key={project._id}
                    className={styles.card}
                >
                    <div className={styles.imgWrapper}>
                        {project.mainImage && <img
                            src={urlFor(project.mainImage).width(600).url()}
                            alt={project.title?.en || "Project image"}
                            className={styles.projectImage} 
                        />}
                    </div>
                    <p className={styles.title}>{project.title?.[locale] || project.title?.en}</p>
                    <p className={styles.description}>{project.description?.[locale]}</p>
                </div>
            ))}
        </div>
    );
}