'use client';

import { urlFor } from '@/sanity/imageUrl';
import { motion } from 'motion/react';


import styles from './ProjectCards.module.css';

export default function ProjectCards({ projects, locale }) {

   const formatDate = (dateString) => {
        if (!dateString) return '';

        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(date);
    }

    return (
        <div className={styles.cardGrid}>
            {projects.map((project) => (
                <motion.div
                    key={project._id}
                    whileHover={{ scale: 1.1 }}
                    className={styles.card}
                >
                    <div className={styles.imgWrapper}>
                        {project.mainImage && <img
                            src={urlFor(project.mainImage).width(600).url()}
                            alt={project.title?.en || "Project image"}
                            className={styles.projectImage} 
                        />}
                    </div>
                    <div className={styles.textWrapper}>
                        <p className={styles.title}>{project.title?.[locale] || project.title?.en}</p>
                        <p className={styles.description}>{project.description?.[locale]}</p>
                        <p className={styles.publishDate}>{formatDate(project.publishedAt)}</p>
                    </div>
                </motion.div>
            ))}
            {projects.map((project) => (
                <motion.div
                    key={project._id}
                    whileHover={{ scale: 1.1 }}
                    className={styles.card}
                >
                    <div className={styles.imgWrapper}>
                        {project.mainImage && <img
                            src={urlFor(project.mainImage).width(600).url()}
                            alt={project.title?.en || "Project image"}
                            className={styles.projectImage} 
                        />}
                    </div>
                    <div className={styles.textWrapper}>
                        <p className={styles.title}>{project.title?.[locale] || project.title?.en}</p>
                        <p className={styles.description}>{project.description?.[locale]}</p>
                        <p className={styles.publishDate}>{formatDate(project.publishedAt)}</p>
                    </div>
                </motion.div>
            ))}
            {projects.map((project) => (
                <motion.div
                    key={project._id}
                    whileHover={{ scale: 1.1 }}
                    className={styles.card}
                >
                    <div className={styles.imgWrapper}>
                        {project.mainImage && <img
                            src={urlFor(project.mainImage).width(600).url()}
                            alt={project.title?.en || "Project image"}
                            className={styles.projectImage} 
                        />}
                    </div>
                    <div className={styles.textWrapper}>
                        <p className={styles.title}>{project.title?.[locale] || project.title?.en}</p>
                        <p className={styles.description}>{project.description?.[locale]}</p>
                        <p className={styles.publishDate}>{formatDate(project.publishedAt)}</p>
                    </div>
                </motion.div>
            ))}
            {projects.map((project) => (
                <motion.div
                    key={project._id}
                    whileHover={{ scale: 1.1 }}
                    className={styles.card}
                >
                    <div className={styles.imgWrapper}>
                        {project.mainImage && <img
                            src={urlFor(project.mainImage).width(600).url()}
                            alt={project.title?.en || "Project image"}
                            className={styles.projectImage} 
                        />}
                    </div>
                    <div className={styles.textWrapper}>
                        <p className={styles.title}>{project.title?.[locale] || project.title?.en}</p>
                        <p className={styles.description}>{project.description?.[locale]}</p>
                        <p className={styles.publishDate}>{formatDate(project.publishedAt)}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}