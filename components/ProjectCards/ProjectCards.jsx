'use client';

import { urlFor } from '@/sanity/imageUrl';
import { motion } from 'motion/react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';


import styles from './ProjectCards.module.css';

export default function ProjectCards({ projects, locale }) {
    const t = useTranslations('Projects')

    const formatDate = (dateString) => {
        if (!dateString) return '';

        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(date);
    }

    return (
        <div className={styles.cardGrid}>
            <div className={styles.titleWrapper}>
                <h1>{t('title')}<span>.</span></h1>
            </div>
            {projects.map((project) => (
                <Link href={"/"} key={project._id}>
                    <motion.div
                        className={styles.card}
                    >
                        <motion.div
                            className={styles.imgWrapper}
                        >
                            {project.cardImage && <motion.img
                                src={urlFor(project.cardImage).width(750).url()}
                                alt={project.title?.en || "Project image"}
                                className={styles.projectImage} 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            />}
                            <div className={styles.testDiv}><p>Halló</p></div>
                        </motion.div>
                        <div className={styles.textWrapper}>
                            <p className={styles.title}>{project.title?.[locale] || project.title?.en}</p>
                            <p className={styles.description}>{project.description?.[locale]}</p>
                            <p className={styles.publishDate}>{formatDate(project.publishedAt)}</p>
                        </div>
                    </motion.div>
                </Link>
            ))}
            {projects.map((project) => (
                <Link href={"/"} key={project._id}>
                    <motion.div
                        className={styles.card}
                    >
                        <motion.div
                            className={styles.imgWrapper}
                        >
                            {project.cardImage && <motion.img
                                src={urlFor(project.cardImage).width(750).url()}
                                alt={project.title?.en || "Project image"}
                                className={styles.projectImage} 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            />}
                            <div className={styles.testDiv}><p>Halló</p></div>
                        </motion.div>
                        <div className={styles.textWrapper}>
                            <p className={styles.title}>{project.title?.[locale] || project.title?.en}</p>
                            <p className={styles.description}>{project.description?.[locale]}</p>
                            <p className={styles.publishDate}>{formatDate(project.publishedAt)}</p>
                        </div>
                    </motion.div>
                </Link>
            ))}
            {projects.map((project) => (
                <Link href={"/"} key={project._id}>
                    <motion.div
                        className={styles.card}
                    >
                        <motion.div
                            className={styles.imgWrapper}
                        >
                            {project.cardImage && <motion.img
                                src={urlFor(project.cardImage).width(750).url()}
                                alt={project.title?.en || "Project image"}
                                className={styles.projectImage} 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            />}
                            <div className={styles.testDiv}><p>Halló</p></div>
                        </motion.div>
                        <div className={styles.textWrapper}>
                            <p className={styles.title}>{project.title?.[locale] || project.title?.en}</p>
                            <p className={styles.description}>{project.description?.[locale]}</p>
                            <p className={styles.publishDate}>{formatDate(project.publishedAt)}</p>
                        </div>
                    </motion.div>
                </Link>
            ))}
            {projects.map((project) => (
                <Link href={"/"} key={project._id}>
                    <motion.div
                        className={styles.card}
                    >
                        <motion.div
                            className={styles.imgWrapper}
                        >
                            {project.cardImage && <motion.img
                                src={urlFor(project.cardImage).width(750).url()}
                                alt={project.title?.en || "Project image"}
                                className={styles.projectImage} 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            />}
                            <div className={styles.testDiv}><p>Halló</p></div>
                        </motion.div>
                        <div className={styles.textWrapper}>
                            <p className={styles.title}>{project.title?.[locale] || project.title?.en}</p>
                            <p className={styles.description}>{project.description?.[locale]}</p>
                            <p className={styles.publishDate}>{formatDate(project.publishedAt)}</p>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}